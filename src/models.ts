export type FrontMatter = {
  title: string
  createdAt: string
  updatedAt?: string
  imageUrl?: string
}

export type ArticleHeader = {
  id: string
  matterData: FrontMatter
  excerpt: string
}

export type Article = {
  header: ArticleHeader
  bodyMdText: string
  tocMdText: string
}

  header: ArticleHeader;
  bodyMdText: string;
  tocMdText: string;
};
