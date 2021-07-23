import { getAllArticleIds, getArticleData } from '../../lib/articles'
import { GetStaticProps, GetStaticPaths } from "next";
import Date from '../../components/Date'
import SEO from '../../components/SEO'
import ContentsLayout from '../../components/ContentsLayout'
import utilStyles from '../../styles/utils.module.css'
import { Article as IArticle } from "../../models";


type Props = { article: IArticle };

export default function Article({ article }: Props) {
  return (
    <>
      <SEO title={article.header.matterData.title} description={article.header.excerpt} />
      <ContentsLayout >
        <article>
          <h1 className={utilStyles.headingXl}>{article.header.matterData.title}</h1>
          <div className={utilStyles.lightText}>
            <span className={utilStyles.mgr10}>公開日時：<Date dateString={article.header.matterData.createdAt} /></span>
            {article.header.matterData.updatedAt && (
              <span className={utilStyles.mgr10}>更新日時：<Date dateString={article.header.matterData.updatedAt??''} /></span>
            )}
          </div>
          <div className={utilStyles.article} dangerouslySetInnerHTML={{ __html: article.bodyMdText }} />
        </article>
        {/* <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" className="twitter-share-button" data-text="にしやまの技術ブログ" data-via="nsym__m" data-lang="ja" data-show-count="false">Tweet</a><script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script> */}
      </ContentsLayout>
    </>
  )
}

export async function getStaticPaths() {
  const paths = getAllArticleIds()
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps<Props, { id: string }> = async ({
  params,
}) => {
  if (!params) throw new Error("Component file name must has params.");

  const article = await getArticleData(params.id);
  return {
    props: { article },
  };
};
