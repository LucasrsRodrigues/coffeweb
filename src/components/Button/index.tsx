import styles from '@/styles/components/Button.module.scss';
import { AnchorHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  clsName?: string;
}

function Button({ children, clsName = 'none', ...rest }: ButtonProps) {
  return (
    <a className={`${styles.container} ${styles[clsName]}`} {...rest}>
      {children}
    </a>
  )
}

export { Button }