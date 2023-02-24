import { FC, ReactNode, ComponentProps } from 'react';
import { BackLink } from '@/components/BackLink';

type BackLinkProps = ComponentProps<typeof BackLink>;
type Props = {
  children: ReactNode;
  backLink?: BackLinkProps['to'];
};

export const PageLayout: FC<Props> = ({ children, backLink }) => {
  return (
    <div className="my-6 px-6 lg:my-10">
      <div className="mx-auto max-w-2xl">
        {backLink && (
          <div className="mb-4">
            <BackLink to={backLink} />
          </div>
        )}
        {children}
      </div>
    </div>
  );
};
