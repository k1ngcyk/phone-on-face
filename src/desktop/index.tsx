import { StyledConnectWalletButton } from "./connect-wallet";
import { Dialog } from "./dialog";
import {
  Background1,
  Background2,
  Background3,
  BackgroundContainer,
  Section1,
  Section2,
  Section3,
  Container,
  StyledPhoneOnFace,
  WhiteLine,
  Shadow,
} from "./layout";
import { UpperBlackLinkButtons, BottomWhiteLinkButtons } from "./link";
import { BottomStyledMintPanel, UpperStyledMintPanel } from "./mint";
import { BigPics, SmallPics } from "./pic";
import { StyledViewSmartContractButton } from "./view-smart-contract";
import {
  BottomStyledWhatTheHellIsThisButton,
  UpperStyledWhatTheHellIsThisButton,
} from "./what-the-hell";

export const Desktop = () => {
  return (
    <>
      <Container>
        <StyledPhoneOnFace />
        <Section1>
          <StyledConnectWalletButton />
          <UpperStyledMintPanel />
          <UpperStyledWhatTheHellIsThisButton />
          <UpperBlackLinkButtons />
          <BigPics />
        </Section1>
        <Section2>
          <StyledViewSmartContractButton />
          <BottomStyledMintPanel />
          <BottomStyledWhatTheHellIsThisButton />
          <BottomWhiteLinkButtons />
          <SmallPics />
        </Section2>
        <Section3></Section3>
      </Container>
      <BackgroundContainer>
        <Background1 />
        <Background2 />
        <Background3 />
      </BackgroundContainer>
      <WhiteLine />
      <Shadow />
      <Dialog />
    </>
  );
};
