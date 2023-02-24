import { FC } from 'react';

export const Footer: FC = () => {
  const today = new Date();

  return (
    <footer className="flex h-14 shrink-0 items-center justify-center font-mPlus font-medium text-gray-800 dark:text-gray-200">
      &copy; {today.getFullYear()} Toya Kasai. All rights reserved.
    </footer>
  );
};
