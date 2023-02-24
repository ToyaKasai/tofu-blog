import { FC } from 'react';
import { Link, AppLink } from '@/components/AppLink';
import { PostCategory } from '@/components/PostCategory';

type Props = Link & {
  postTitle: string;
  postDescription: string;
  category: string;
};

export const PostCard: FC<Props> = ({ postTitle, postDescription, category, ...link }) => {
  return (
    <AppLink
      {...link}
      title={postTitle}
      className="flex w-full justify-between space-x-4 rounded-lg border border-gray-400 p-4 transition-[border-color] duration-300 hover:border-black dark:border-gray-500 dark:hover:border-white lg:space-x-6 lg:p-6"
    >
      <span className="space-y-6 lg:space-y-12">
        <p className="text-2xl font-bold lg:text-3xl">{postTitle}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400 lg:text-lg">{postDescription}</p>
      </span>
      <span className="self-end">
        <PostCategory name={category} />
      </span>
    </AppLink>
  );
};
