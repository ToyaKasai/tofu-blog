import { FC } from 'react';
import { Link, AppLink } from '@/components/AppLink';
import { PostCategory } from '@/components/PostCategory';

type Props = Link & {
  postTitle: string;
  postDescription: string;
  categories: Array<string>;
};

export const PostCard: FC<Props> = ({ postTitle, postDescription, categories, ...link }) => {
  return (
    <AppLink
      {...link}
      title={postTitle}
      className="block w-full rounded-lg border border-gray-400 p-4 transition-[border-color] duration-300 hover:border-black dark:border-gray-600 dark:hover:border-white lg:p-6"
    >
      <span className="space-y-4 lg:space-y-6">
        <p className="text-lg font-bold lg:text-xl">{postTitle}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400 lg:text-base">{postDescription}</p>
        <ul className="flex space-x-1 lg:space-x-2">
          {categories.map((category) => (
            <li key={`category-${category}`}>
              <PostCategory name={category} />
            </li>
          ))}
        </ul>
      </span>
    </AppLink>
  );
};
