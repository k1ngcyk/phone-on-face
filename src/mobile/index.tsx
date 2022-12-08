import { BottomStyledMintPanel, UpperStyledMintPanel } from "./mint";
import { StyledConnectWalletButton } from "./connect-wallet";
import {
  Section1,
  Section2,
  Section3,
  Container,
  Background1,
  Background2,
  Background3,
  BackgroundContainer,
  Shadow,
  WhiteLine,
  StyledPhoneOnFace,
} from "./layout";
import { BottomWhiteLinkButtons, UpperBlackLinkButtons } from "./link";
import {
  BottomStyledWhatTheHellIsThisButton,
  UpperStyledWhatTheHellIsThisButton,
} from "./what-the-hell";
import { BigPics, SmallPics } from "./pic";
import { StyledViewSmartContractButton } from "./view-smart-contract";
import { Dialog } from "./dialog";

export const Mobile = () => {
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
