import styled from "styled-components";
import { useTheme } from "../context/theme";

interface PicProps {
  imageURL: string;
  top: string;
  left: string;
}

const BigPic = styled.div<PicProps>`
  width: 250px;
  height: 250px;
  box-shadow: 16px 16px rgb(0, 0, 0);
  background-image: url(${(props) => props.imageURL});
  background-size: cover;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
`;

export const BigPics = () => {
  const { bigPics } = useTheme();
  return (
    <>
      <BigPic imageURL={bigPics[0]} top="520.5px" left="0.5px" />
      <BigPic imageURL={bigPics[1]} top="520.5px" left="368.5px" />
      <BigPic imageURL={bigPics[2]} top="520.5px" left="736.5px" />
    </>
  );
};

const SmallPic = styled.div<PicProps>`
  width: 105px;
  height: 105px;
  box-shadow: 5px 5px rgb(255, 255, 255);
  background-image: url(${(props) => props.imageURL});
  background-size: cover;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
`;

export const SmallPics = () => {
  const { smallPics } = useTheme();
  return (
    <>
      <SmallPic imageURL={smallPics[0]} top="438.5px" left="125.5px" />
      <SmallPic imageURL={smallPics[1]} top="438.5px" left="260.5px" />
      <SmallPic imageURL={smallPics[2]} top="438.5px" left="395.5px" />
      <SmallPic imageURL={smallPics[3]} top="438.5px" left="530.5px" />
      <SmallPic imageURL={smallPics[4]} top="438.5px" left="665.5px" />
      <SmallPic imageURL={smallPics[5]} top="438.5px" left="800.5px" />
      <SmallPic imageURL={smallPics[6]} top="438.5px" left="935.5px" />
      <SmallPic imageURL={smallPics[7]} top="438.5px" left="1070.5px" />
      <SmallPic imageURL={smallPics[8]} top="438.5px" left="1205.5px" />
      <SmallPic imageURL={smallPics[9]} top="573.5px" left="125.5px" />
      <SmallPic imageURL={smallPics[10]} top="573.5px" left="260.5px" />
      <SmallPic imageURL={smallPics[11]} top="573.5px" left="395.5px" />
      <SmallPic imageURL={smallPics[12]} top="573.5px" left="530.5px" />
      <SmallPic imageURL={smallPics[13]} top="573.5px" left="665.5px" />
      <SmallPic imageURL={smallPics[14]} top="573.5px" left="800.5px" />
      <SmallPic imageURL={smallPics[15]} top="573.5px" left="935.5px" />
      <SmallPic imageURL={smallPics[16]} top="573.5px" left="1070.5px" />
      <SmallPic imageURL={smallPics[17]} top="573.5px" left="1205.5px" />
      <SmallPic imageURL={smallPics[18]} top="708.5px" left="125.5px" />
      <SmallPic imageURL={smallPics[19]} top="708.5px" left="260.5px" />
      <SmallPic imageURL={smallPics[20]} top="708.5px" left="395.5px" />
      <SmallPic imageURL={smallPics[21]} top="708.5px" left="530.5px" />
      <SmallPic imageURL={smallPics[22]} top="708.5px" left="665.5px" />
      <SmallPic imageURL={smallPics[23]} top="708.5px" left="800.5px" />
      <SmallPic imageURL={smallPics[24]} top="708.5px" left="935.5px" />
      <SmallPic imageURL={smallPics[25]} top="708.5px" left="1070.5px" />
      <SmallPic imageURL={smallPics[26]} top="708.5px" left="1205.5px" />
    </>
  );
};
