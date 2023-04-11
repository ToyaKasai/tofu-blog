import '@/styles/globals.css';
import type { AppProps } from 'next/app';

import { BasicLayout } from '@/components/BasicLayout';
import { useRouteProgress } from '@/hooks/useRouteProgress';

import '@/styles/nprogress.css';

export default function ToyaKasaiTechBlogApp({ Component, pageProps }: AppProps) {
  useRouteProgress();

  return (
    <BasicLayout>
      <Component {...pageProps} />
    </BasicLayout>
  );
}
