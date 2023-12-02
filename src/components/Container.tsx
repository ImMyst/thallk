import { type ReactNode } from "react";
import { Box } from "../../styled-system/jsx";
import { css } from "../../styled-system/css";

interface Props {
  children: ReactNode;
}

export default function Container({ children }: Props) {
  return (
    <Box
      className={css({
        w: "full",
        display: "flex",
        pt: "20",
        flexDirection: "column",
        alignItems: "center",
      })}
    >
      {children}
    </Box>
  );
}
