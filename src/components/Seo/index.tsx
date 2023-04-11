import { FC } from 'react';

import Head from 'next/head';

const SEO_KEY = {
  TITLE: 'title',
  OG_TITLE: 'og:title',
  DESCRIPTION: 'description',
  OG_DESCRIPTION: 'og:description',
  TWITTER_CARD: 'twitter:card',
};

type Props = {
  title?: string;
  description?: string;
};

export const Seo: FC<Props> = ({
  title = 'tech blog - ToyaKasai',
  description = 'tech blog by ToyaKasai.',
}) => {
  return (
    <Head>
      <title key={SEO_KEY.TITLE}>{title}</title>
      <meta key={SEO_KEY.OG_TITLE} property="og:title" content={title} />
      <meta key={SEO_KEY.DESCRIPTION} name="description" content={description} />
      <meta key={SEO_KEY.OG_DESCRIPTION} property="og:description" content={description} />
      <meta name="twitter:card" key={SEO_KEY.TWITTER_CARD} content="summary_large_image" />
    </Head>
  );
};
