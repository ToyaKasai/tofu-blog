import { FC } from 'react';

type Props = {
  name: string;
};

export const PostCategory: FC<Props> = ({ name }) => {
  return (
    <div className="w-fit rounded-full bg-gray-100 px-3 py-1.5 text-xs text-gray-400 dark:bg-gray-800">
      {name}
    </div>
  );
};
