import type { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const Container: FC<Props> = ({ children }) => {
  return <div className="max-w-[1534px] mx-auto px-6">{children}</div>;
};
