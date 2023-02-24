import { FC } from 'react';

type Props = {
  htmlString: string;
};

export const HTMLParser: FC<Props> = ({ htmlString }) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `${htmlString}`,
      }}
    />
  );
};
