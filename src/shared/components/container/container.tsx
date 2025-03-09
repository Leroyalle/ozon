import type { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const Container: FC<Props> = ({ children }) => {
  return <div className="max-w-[1230px] mx-auto">{children}</div>;
};
