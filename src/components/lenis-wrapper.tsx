import { ReactLenis } from "@studio-freight/react-lenis";
import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

function LenisWrapper({ children }: Props) {
  return <ReactLenis root>{children}</ReactLenis>;
}

export default LenisWrapper;
