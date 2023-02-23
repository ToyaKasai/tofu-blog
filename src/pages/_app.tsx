import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { BasicLayout } from '@/components/BasicLayout';

export default function Portfolio({ Component, pageProps }: AppProps) {
  return (
    <BasicLayout>
      <Component {...pageProps} />
    </BasicLayout>
  );
}
