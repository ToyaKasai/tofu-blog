import { FC } from 'react';
import Image from 'next/image';
import { AiOutlineGithub } from 'react-icons/ai';
import { GITHUB_LiNK } from '@/constants';

export const Header: FC = () => {
  return (
    <header className="fixed top-0 z-header flex h-header w-full items-center justify-center border-b border-gray-300 px-4 backdrop-blur-md dark:border-gray-600">
      <div className="flex w-full max-w-2xl items-center justify-between">
        <div className="flex items-center space-x-3">
          <Image
            src="/images/profile.png"
            alt=""
            width={36}
            height={36}
            className="rounded-full border border-gray-300 dark:border-gray-600"
          />
          <p className="font-mPlus text-xl font-bold">Toya Kasai</p>
        </div>
        <a href={GITHUB_LiNK} target="_blank" rel="noreferrer noopener" title="github">
          <AiOutlineGithub size="28" />
        </a>
      </div>
    </header>
  );
};
