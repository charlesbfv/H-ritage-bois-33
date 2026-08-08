import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

type Variant = 'primary' | 'secondary';

interface ButtonProps {
  to?: string;
  href?: string;
  variant?: Variant;
  children: ReactNode;
  className?: string;
}

const styles: Record<Variant, string> = {
  primary:
    'bg-gold text-white hover:bg-gold-dark shadow-sm hover:shadow-md',
  secondary:
    'bg-transparent text-wood border border-wood hover:bg-wood hover:text-white',
};

const base =
  'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-mont font-semibold text-sm tracking-wide transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]';

export default function Button({ to, href, variant = 'primary', children, className = '' }: ButtonProps) {
  const cls = `${base} ${styles[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={cls}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    );
  }

  return <button className={cls}>{children}</button>;
}
