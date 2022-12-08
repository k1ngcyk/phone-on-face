import styled from "styled-components";
import { ImageButton } from "./button";
import openSeaWhiteText from "./assets/opensea-white-text.webp";
import twitterWhiteText from "./assets/twitter-white-text.webp";
import discordWhiteText from "./assets/discord-white-text.webp";
import openSeaBlackText from "./assets/opensea-black-text.webp";
import twitterBlackText from "./assets/twitter-black-text.webp";
import discordBlackText from "./assets/discord-black-text.webp";

interface LinkButtonProps {
  link: string;
}

const LinkButton = ({ link, ...restProps }: LinkButtonProps) => {
  const onClick = () => {
    window.open(link, "_blank");
  };
  return <ImageButton onClick={onClick} {...restProps} />;
};

const StyledLinkButton = styled(LinkButton)`
  width: 177px;
  height: 44px;
`;

const BlackStyledLinkButton = styled(StyledLinkButton)`
  background-color: black;
`;

const BlackOpenseaButton = styled(BlackStyledLinkButton)`
  background-image: url(${openSeaWhiteText});
  background-size: 80px 16px;
`;

const BlackTwitterButton = styled(BlackStyledLinkButton)`
  background-image: url(${twitterWhiteText});
  top: 49px;
  background-size: 66px 13px;
`;

const BlackDiscordButton = styled(BlackStyledLinkButton)`
  background-image: url(${discordWhiteText});
  top: 98px;
  background-size: 69px 13px;
`;

const WhiteStyledLinkButton = styled(StyledLinkButton)`
  background-color: white;
`;

const WhiteOpenseaButton = styled(WhiteStyledLinkButton)`
  background-image: url(${openSeaBlackText});
  background-size: 80px 16px;
`;

const WhiteTwitterButton = styled(WhiteStyledLinkButton)`
  background-image: url(${twitterBlackText});
  top: 49px;
  background-size: 66px 13px;
`;

const WhiteDiscordButton = styled(WhiteStyledLinkButton)`
  background-image: url(${discordBlackText});
  top: 98px;
  background-size: 69px 13px;
`;

const StyledLinkButtons = styled.div`
  width: 177px;
  height: 143px;
`;

const BlackLinkButtons = (props: unknown) => {
  return (
    <StyledLinkButtons {...props}>
      <BlackOpenseaButton link="https://opensea.io/collection/phone-on-face" />
      <BlackTwitterButton link="https://twitter.com/PoFTothemoon" />
      <BlackDiscordButton link="https://discord.gg/CMDv7egx" />
    </StyledLinkButtons>
  );
};

export const UpperBlackLinkButtons = styled(BlackLinkButtons)`
  left: 667px;
  top: 240px;
`;

const WhiteLinkButtons = (props: unknown) => {
  return (
    <StyledLinkButtons {...props}>
      <WhiteOpenseaButton link="https://opensea.io/collection/phone-on-face" />
      <WhiteTwitterButton link="https://twitter.com/PoFTothemoon" />
      <WhiteDiscordButton link="https://discord.gg/CMDv7egx" />
    </StyledLinkButtons>
  );
};

export const BottomWhiteLinkButtons = styled(WhiteLinkButtons)`
  left: 667px;
  top: 988px;
`;
