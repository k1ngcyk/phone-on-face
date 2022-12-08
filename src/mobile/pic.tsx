import { useTheme } from "../context/theme";

interface PicProps {
  imageURL: string;
  top: string;
  left: string;
}

const BigPic = (props: PicProps) => {
  return (
    <>
      <div
        style={{
          width: "110px",
          height: "110px",
          background: "black",
          top: String(Number(props.top.replaceAll("px", "")) + 8) + "px",
          left: String(Number(props.left.replaceAll("px", "")) + 8) + "px",
        }}
      />
      <div
        style={{
          backgroundImage: `url(${props.imageURL})`,
          backgroundSize: "cover",
          width: "110px",
          height: "110px",
          top: props.top,
          left: props.left,
        }}
      />
    </>
  );
};

export const BigPics = () => {
  const { bigPics } = useTheme();
  return (
    <>
      <BigPic imageURL={bigPics[0]} top="432px" left="406px" />
      <BigPic imageURL={bigPics[1]} top="432px" left="566px" />
      <BigPic imageURL={bigPics[2]} top="432px" left="726px" />
      <BigPic imageURL={bigPics[3]} top="633px" left="432px" />
      <BigPic imageURL={bigPics[4]} top="633px" left="592px" />
    </>
  );
};

const SmallPic = (props: PicProps) => {
  return (
    <>
      <div
        style={{
          width: "68px",
          height: "68px",
          background: "white",
          top: String(Number(props.top.replaceAll("px", "")) + 3) + "px",
          left: String(Number(props.left.replaceAll("px", "")) + 3) + "px",
        }}
      />
      <div
        style={{
          backgroundImage: `url(${props.imageURL})`,
          backgroundSize: "cover",
          width: "68px",
          height: "68px",
          top: props.top,
          left: props.left,
        }}
      />
    </>
  );
};

export const SmallPics = () => {
  const { smallPics } = useTheme();
  return (
    <>
      <SmallPic imageURL={smallPics[0]} top="569px" left="232px" />
      <SmallPic imageURL={smallPics[1]} top="569px" left="320px" />
      <SmallPic imageURL={smallPics[2]} top="569px" left="408px" />
      <SmallPic imageURL={smallPics[3]} top="569px" left="496px" />
      <SmallPic imageURL={smallPics[4]} top="569px" left="584px" />
      <SmallPic imageURL={smallPics[5]} top="569px" left="672px" />
      <SmallPic imageURL={smallPics[6]} top="569px" left="760px" />
      <SmallPic imageURL={smallPics[7]} top="569px" left="848px" />
      <SmallPic imageURL={smallPics[8]} top="569px" left="936px" />
      <SmallPic imageURL={smallPics[9]} top="666px" left="232px" />
      <SmallPic imageURL={smallPics[10]} top="666px" left="320px" />
      <SmallPic imageURL={smallPics[11]} top="666px" left="408px" />
      <SmallPic imageURL={smallPics[12]} top="666px" left="496px" />
      <SmallPic imageURL={smallPics[13]} top="666px" left="584px" />
      <SmallPic imageURL={smallPics[14]} top="666px" left="672px" />
      <SmallPic imageURL={smallPics[15]} top="666px" left="760px" />
      <SmallPic imageURL={smallPics[16]} top="666px" left="848px" />
      <SmallPic imageURL={smallPics[17]} top="666px" left="936px" />
      <SmallPic imageURL={smallPics[18]} top="764px" left="232px" />
      <SmallPic imageURL={smallPics[19]} top="764px" left="320px" />
      <SmallPic imageURL={smallPics[20]} top="764px" left="408px" />
      <SmallPic imageURL={smallPics[21]} top="764px" left="496px" />
      <SmallPic imageURL={smallPics[22]} top="764px" left="584px" />
      <SmallPic imageURL={smallPics[23]} top="764px" left="672px" />
      <SmallPic imageURL={smallPics[24]} top="764px" left="760px" />
      <SmallPic imageURL={smallPics[25]} top="764px" left="848px" />
      <SmallPic imageURL={smallPics[26]} top="764px" left="936px" />
    </>
  );
};
