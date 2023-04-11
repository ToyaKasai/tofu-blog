import { NextPage, GetServerSideProps } from 'next';
import { useMemo } from 'react';

import { ParsedUrlQuery } from 'querystring';

import { Blog } from '@/api/cms/model';
import { cmsClient, ENDPOINT } from '@/api/cms/client';

import { PageLayout } from '@/components/PageLayout';
import { PostCategory } from '@/components/PostCategory';
import { HTMLParser } from '@/components/HTMLParser';

import { formatDateTimeString } from '@/utils';
import { formatCodeBlockToHighlight } from '@/libs/highlightjs';

type Props = { post: Blog };
type QueryParams = ParsedUrlQuery & {
  id: string;
};

export const getServerSideProps: GetServerSideProps<Props, QueryParams> = async (context) => {
  const { id } = context.params || {};

  if (!id) {
    return { notFound: true };
  }

  const post = await cmsClient.get<Blog>({ endpoint: ENDPOINT.BLOGS, contentId: id });
  return {
    props: {
      post: {
        ...post,
        content: formatCodeBlockToHighlight(post.content),
      },
    },
  };
};

const PostDetail: NextPage<Props> = ({ post }) => {
  const { publishedAt, title, description, categories, content } = post;

  const formattedPublishedAt = useMemo(
    () => formatDateTimeString(publishedAt, 'YYYY/M/D HH:mm'),
    [publishedAt]
  );
  return (
    <PageLayout backLink="/">
      <ul className="flex space-x-1 lg:space-x-2">
        {categories.map(({ id, name }) => (
          <li key={id}>
            <PostCategory name={name} />
          </li>
        ))}
      </ul>
      <div className="mt-4 space-y-2 lg:mt-6 lg:space-y-4">
        <p className="text-sm text-gray-400 dark:text-gray-400">{formattedPublishedAt}</p>
        <h1 className="font-mPlus text-xl font-medium lg:text-2xl">{title}</h1>
        <p className="text-sm lg:text-base">{description}</p>
      </div>
      <div className="mt-14">
        <HTMLParser htmlString={content} />
      </div>
    </PageLayout>
  );
};

export default PostDetail;
