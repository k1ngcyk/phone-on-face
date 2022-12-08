import styled from "styled-components";
import phoneOnFace from "./assets/phone-on-face.webp";

const sectionWidth = "1440px";
const section1Height = "949px";
const section2Height = "1680px";
const section3Height = "3115px";

export const Container = styled.div`
  position: relative;
  width: ${sectionWidth};
  left: 50%;
  transform: translateX(-50%);
`;

const PhoneOnFace = (props: unknown) => {
  return <img alt="" src={phoneOnFace} width="1440" height="5744" {...props} />;
};

export const StyledPhoneOnFace = styled(PhoneOnFace)`
  position: absolute;
`;

const Section = styled.div`
  position: relative;
  * {
    position: absolute;
  }
`;

export const Section1 = styled(Section)`
  height: ${section1Height};
`;

export const Section2 = styled(Section)`
  height: ${section2Height};
`;

export const Section3 = styled(Section)`
  height: ${section3Height};
`;

export const BackgroundContainer = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  z-index: -1;
  left: 50%;
  transform: translateX(-50%);
`;

export const Background1 = styled.div`
  background: ${(props) => props.theme.color};
  height: ${section1Height};
`;

export const Background2 = styled.div`
  background: black;
  height: ${section2Height};
`;

export const Background3 = styled.div`
  background: ${(props) => props.theme.color};
  height: ${section3Height};
`;

export const WhiteLine = styled.div`
  position: absolute;
  top: 1926px;
  width: 100vw;
  height: 26px;
  background: white;
`;

export const Shadow = () => {
  return (
    <svg
      style={{
        position: "absolute",
        top: "3874px",
        zIndex: "-1",
        left: "50%",
        transform: "translateX(-50%)",
      }}
      width="100%"
      height="1870px"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="linearGradient-205g24b1wo-1"
        >
          <stop
            stopColor="#000000"
            stopOpacity="0"
            offset="0.0122070312%"
          ></stop>
          <stop stopColor="#000000" offset="100%"></stop>
        </linearGradient>
      </defs>
      <g
        id="responsive"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g
          id="home"
          transform="translate(0.000000, -3875.000000)"
          fill="url(#linearGradient-205g24b1wo-1)"
        >
          <rect id="Rectangle" x="0" y="3875" width="100%" height="1870"></rect>
        </g>
      </g>
    </svg>
  );
};
