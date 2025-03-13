import type { FC } from 'react';
import { Input, InputProps } from '@heroui/react';
import { MailIcon } from 'lucide-react';

interface Props extends InputProps {
  className?: string;
}

export const EmailField: FC<Props> = ({ className, ...props }) => {
  return (
    <Input
      className={className}
      endContent={
        <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
      }
      label="Почта"
      name="email"
      placeholder="Введите почту"
      variant="bordered"
      {...props}
    />
  );
};
