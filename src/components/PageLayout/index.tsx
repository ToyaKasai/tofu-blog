import { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const PageLayout: FC<Props> = ({ children }) => {
  return (
    <div className="my-6 px-6 lg:my-10">
      <div className="mx-auto max-w-2xl">{children}</div>
    </div>
  );
};
