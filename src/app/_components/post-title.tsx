import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

export function PostTitle({ children }: Props) {
  return (
    <h1 className="text-[#789ec9] font-bold text-4xl md:text-5xl md:leading-[60px]">
      {children}
    </h1>
  );
}
