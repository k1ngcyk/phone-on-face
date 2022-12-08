import styled from "styled-components";
import { Button } from "./button";

const WhatTheHellIsThisButton = (props: unknown) => {
  const onClick = () => {
    window.scrollTo(0, 818);
  };
  return (
    <Button onClick={onClick} {...props}>
      What the hell is this?{" "}
    </Button>
  );
};

const StyledWhatTheHellIsThisButton = styled(WhatTheHellIsThisButton)`
  width: 229px;
  height: 44px;
  background-color: white;
  font-size: 15.5px;
`;

export const UpperStyledWhatTheHellIsThisButton = styled(
  StyledWhatTheHellIsThisButton
)`
  left: 433px;
  top: 338px;
`;

export const BottomStyledWhatTheHellIsThisButton = styled(
  StyledWhatTheHellIsThisButton
)`
  left: 433px;
  top: 1086px;
`;
