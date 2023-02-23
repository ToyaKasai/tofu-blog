import { FC, ReactNode } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

type Props = {
  children: ReactNode;
};

export const BasicLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="mt-header flex-grow">{children}</main>
      <Footer />
    </>
  );
};
