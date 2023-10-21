import type { FC, ReactNode } from "react";

interface ContentProviderProps {
  children: ReactNode;
}

export const ContentProvider: FC<ContentProviderProps> = ({
  children,
}: ContentProviderProps) => {
  return (
    <div className='relative min-w-full h-[720px] z-20 flex items-center'>
      {children}
    </div>
  );
};
