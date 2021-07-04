import React from 'react'
import Head from 'next/head'
import { GetStaticProps, NextPage } from "next";
import { getSortedArticlesData } from '../lib/articles'
import { getHeaderHtml } from '../lib/header'
import Link from 'next/link'
import Date from '../components/Date'
import Paper from '@material-ui/core/Paper'
import SEO from '../components/SEO'
import { Root } from '../components/Root'
import { ArticleHeader as IArticleHeader } from "../models";

type Props = {
  articles: IArticleHeader[];
};

export default function Home({ articles }: Props) {
  return (
    <>
      <SEO title="TOP" description="にしやまの技術ブログ" />
      <Root articles={articles} />
    </>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const articles = await getSortedArticlesData();

  return {
    props: {
      articles
    },
  };
};
