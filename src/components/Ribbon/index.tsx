import { ReactNode } from "react";

import * as S from "./styles";

export type RibbonColors = "primary" | "secondary";
export type RibbonSizes = "small" | "normal" | "large";

export type RibbonProps = {
  children: ReactNode;
  color?: RibbonColors;
  size?: RibbonSizes;
};

const Ribbon = ({
  children,
  color = "primary",
  size = "normal"
}: RibbonProps) => {
  return (
    <S.Wrapper color={color} size={size}>
      {children}
    </S.Wrapper>
  );
};

export default Ribbon;
