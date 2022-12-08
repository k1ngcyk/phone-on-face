import styled from "styled-components";
import { Button } from "./button";

const WhatTheHellIsThisButton = (props: unknown) => {
  const onClick = () => {
    window.scrollTo(0, 949);
  };
  return (
    <Button onClick={onClick} {...props}>
      What the hell is this?{" "}
    </Button>
  );
};

const StyledWhatTheHellIsThisButton = styled(WhatTheHellIsThisButton)`
  width: 293px;
  height: 57px;
  background-color: white;
  font-size: 20px;
`;

export const UpperStyledWhatTheHellIsThisButton = styled(
  StyledWhatTheHellIsThisButton
)`
  left: 700px;
  top: 252px;
`;

export const BottomStyledWhatTheHellIsThisButton = styled(
  StyledWhatTheHellIsThisButton
)`
  left: 458px;
  top: 1176px;
`;
