import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import strip from "strip-markdown";
import markdownToc from "markdown-toc";
import html from 'remark-html'
import highlight from 'remark-highlight.js'
import { Article as IArticle, FrontMatter } from "../models";
import { config } from '../config'

const postsDirectory = path.join(process.cwd(), 'content/posts')

type Props = { article: IArticle };

function getFrontMatter(
  id: string,
  rawData: string,
): { frontMatter: FrontMatter; content: string } {
  const matterResult = matter(rawData);

  const matterData = matterResult.data as Partial<FrontMatter>;

  if (!matterData.title) {
    throw new Error(`${id}: title is required in front-matter`);
  }

  if (!matterData.createdAt) {
    throw new Error(`${id}: createdAt is required in front-matter`);
  }

  return {
    frontMatter: {
      ...matterData,
      title: matterData.title,
      createdAt: matterData.createdAt,
    },
    content: matterResult.content,
  };
}

async function getArticleExcerpt(mdText: string): Promise<string> {
  const processed = await remark().use(strip).process(mdText);

  const contentText = processed.toString();

  const excerpt = contentText.trim().replace(/\s+/g, " ").slice(0, config.excerptLength);

  if (contentText.length > config.excerptLength) {
    return excerpt + "...";
  }

  return excerpt;
}


export async function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map(async fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const { frontMatter, content } = getFrontMatter(id, fileContents)

    // Combine the data with the id
    return {
      id,
      matterData: frontMatter,
      excerpt: await getArticleExcerpt(content),
    }
  })
  // Sort posts by date
  return (await Promise.all(allPostsData)).sort((a, b) =>
    a.matterData.createdAt < b.matterData.createdAt ? 1 : -1,
  )
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    }
  })
}

export async function getArticleData(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const { frontMatter, content } = getFrontMatter(id, fileContents)

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(highlight)
    .use(html)
    .process(content)
  const contentHtml = processedContent.toString()

  const excerpt = await getArticleExcerpt(content)

  const tocMdText = markdownToc(content).content;

  // Combine the data with the id and contentHtml
  return {
    header: {
      id,
      matterData: frontMatter,
      excerpt,
    },
    bodyMdText: contentHtml,
    tocMdText,
  };
}

