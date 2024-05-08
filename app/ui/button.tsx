import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        'flex h-10 items-center rounded-lg bg-amber-950 px-4 text-sm font-medium text-white transition-colors',
        className,
        {
          'hover:bg-amber-700': true, // Change hover color 
        }
      )}
    >
      {children}
    </button>
  );
}
