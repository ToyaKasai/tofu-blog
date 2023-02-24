import { NextPage, GetServerSideProps } from 'next';
import { ComponentProps } from 'react';

import { cmsClient, ENDPOINT } from '@/api/cms/client';
import { Blog, ContentList } from '@/api/cms/model';

import { PostCard } from '@/components/PostCard';
import { PageLayout } from '@/components/PageLayout';

type Post = ComponentProps<typeof PostCard> & { id: string };
type Props = { posts: Array<Post> };

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const { contents } = await cmsClient.get<ContentList<Blog>>({ endpoint: ENDPOINT.BLOGS });

  const posts = contents.map<Post>(({ id, title, description, categories }) => {
    const formattedCategories = categories.map(({ name }) => name);
    return {
      id,
      postTitle: title,
      postDescription: description,
      categories: formattedCategories,
      href: `/${id}`,
    };
  });

  return { props: { posts } };
};

const Index: NextPage<Props> = ({ posts }) => {
  return (
    <PageLayout>
      <h1 className="font-mPlus text-xl font-medium lg:text-2xl">All Posts</h1>
      <ul className="mt-5 space-y-4 lg:mt-9">
        {posts.map(({ id, ...post }) => (
          <li key={`post-${id}`}>
            <PostCard {...post} />
          </li>
        ))}
      </ul>
    </PageLayout>
  );
};

export default Index;
