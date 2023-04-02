import { FC } from 'react';

import styles from '@/styles/post.module.css';

type Props = {
  htmlString: string;
};

export const HTMLParser: FC<Props> = ({ htmlString }) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `${htmlString}`,
      }}
      className={styles.postContent}
    />
  );
};
