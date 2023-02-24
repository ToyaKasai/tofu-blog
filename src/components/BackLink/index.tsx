import { FC } from 'react';
import { BsArrowLeftShort } from 'react-icons/bs';
import { AppLink, Link } from '@/components/AppLink';

type Props = {
  to: Link['href'];
};

export const BackLink: FC<Props> = ({ to }) => {
  return (
    <AppLink href={to} className="flex items-center text-gray-400 dark:text-gray-500">
      <BsArrowLeftShort size={28} />
      <span className="font-mPlus text-sm font-medium">Back</span>
    </AppLink>
  );
};
