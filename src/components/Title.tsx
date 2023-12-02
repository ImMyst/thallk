import { type ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Title({ children }: Props) {
  return <div>{children}</div>;
}
