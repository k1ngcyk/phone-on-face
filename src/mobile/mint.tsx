import styled from "styled-components";
import mintButtonImage from "./assets/mint.webp";
import incImage from "./assets/inc.webp";
import decImage from "./assets/dec.webp";
import { Button, ImageButton } from "./button";
import { useBusiness } from "../context/business";
import { mint } from "../util/ethers";
import whiteDialogCloseButton from "./assets/white-dialog-close-button.webp";
import blackDialogCloseButton from "./assets/black-dialog-close-button.webp";
import viewInEthscanButton from "./assets/view-in-ethscan.webp";
import viewInOpenseaButton from "./assets/view-in-opensea.webp";

const InfoDiv = (props: unknown) => {
  const { business } = useBusiness();
  return (
    <div {...props}>
      {business.minted} / {business.total} MINTED
    </div>
  );
};

const StyledInfoDiv = styled(InfoDiv)`
  font-size: 20px;
  text-align: center;
  left: 0px;
  top: 0px;
  height: 47px;
  line-height: 47px;
  width: 100%;
`;

const CircleImageButton = styled(ImageButton)`
  border-radius: 16.5px;
`;

const IncOrDecButton = styled(CircleImageButton)`
  background-color: black;
  width: 23px;
  height: 23px;
`;

const IncButton = (props: unknown) => {
  const { business, setToMint } = useBusiness();
  const onClick = () => {
    if (business.toMint >= 5) {
      return;
    }
    setToMint(business.toMint + 1);
  };
  return <IncOrDecButton onClick={onClick} {...props} />;
};

const StyledIncButton = styled(IncButton)`
  left: 71px;
  top: 60px;
  background-image: url(${incImage});
  background-size: 14px 14px;
`;

const DecButton = (props: unknown) => {
  const { business, setToMint } = useBusiness();
  const onClick = () => {
    if (business.toMint <= 1) {
      return;
    }
    setToMint(business.toMint - 1);
  };
  return <IncOrDecButton onClick={onClick} {...props} />;
};

const StyledDecButton = styled(DecButton)`
  left: 12px;
  top: 60px;
  background-image: url(${decImage});
  background-size: 14px 4px;
`;

const ToMintDiv = (props: unknown) => {
  const { business } = useBusiness();
  return <div {...props}>{business.toMint}</div>;
};

const StyledToMintDiv = styled(ToMintDiv)`
  font-size: 20px;
  text-align: center;
  left: 35px;
  top: 59px;
  width: 36px;
`;

const PlsConnectToWalletFirst = () => {
  const { setMsgJSXCallback } = useBusiness();

  return (
    <div
      style={{
        height: "160px",
        background: "white",
        boxShadow: "10px 10px black",
      }}
    >
      <div
        style={{
          fontSize: "18px",
          width: "100%",
          textAlign: "center",
          position: "absolute",
          top: "55px",
        }}
      >
        Please connect to your wallet first.
      </div>
      <Button
        onClick={() => {
          setMsgJSXCallback(null);
        }}
        style={{
          fontSize: "20px",
          color: "white",
          width: "306px",
          height: "35px",
          background: "black",
          textAlign: "center",
          position: "absolute",
          top: "100px",
          left: "21px",
        }}
      >
        Ohhhh, ‘kay
      </Button>

      <img
        alt=""
        src={blackDialogCloseButton}
        onClick={() => {
          setMsgJSXCallback(null);
        }}
        style={{
          position: "absolute",
          top: "12px",
          left: "310px",
          width: "31px",
          height: "31px",
          cursor: "pointer",
        }}
      />
    </div>
  );
};

const Processing = () => {
  return (
    <div
      style={{
        height: "130px",
        background: "white",
        boxShadow: "10px 10px black",
      }}
    >
      <div
        style={{
          fontSize: "18px",
          width: "100%",
          textAlign: "center",
          position: "absolute",
          top: "25px",
        }}
      >
        Processing
      </div>

      <div
        style={{
          fontSize: "16px",
          width: "100%",
          textAlign: "center",
          position: "absolute",
          top: "66px",
        }}
      >
        Minting with MetaMask.
        <br />
        Check ur Metamask popover.
      </div>
    </div>
  );
};

const ErrorDialog = ({ error }: any) => {
  const { setMsgJSXCallback } = useBusiness();

  let errStr: string;
  if (typeof error.data?.message === "string") {
    errStr = error.data?.message;
  } else if (typeof error.message === "string") {
    errStr = error.message;
  } else {
    errStr = "Unknown error";
  }

  if (errStr.includes("Over mint limit")) {
    errStr = "Over mint limit";
  }

  let shortErrStr = errStr;
  if (shortErrStr.length > 30) {
    shortErrStr =
      shortErrStr.slice(0, 30).split(" ").slice(0, -1).join(" ") + "...";
  }

  return (
    <div
      style={{
        height: "175px",
        background: "black",
        boxShadow: "10px 10px white",
      }}
    >
      <div
        style={{
          color: "white",
          fontSize: "20px",
          width: "100%",
          textAlign: "center",
          position: "absolute",
          top: "40px",
        }}
      >
        Mint failed<br></br>Error
      </div>

      <div
        title={errStr}
        style={{
          color: "white",
          fontSize: "18px",
          width: "100%",
          textAlign: "center",
          position: "absolute",
          top: "114px",
        }}
      >
        {shortErrStr}
      </div>

      <img
        alt=""
        src={whiteDialogCloseButton}
        onClick={() => {
          setMsgJSXCallback(null);
        }}
        style={{
          position: "absolute",
          top: "12px",
          left: "310px",
          width: "31px",
          height: "31px",
          cursor: "pointer",
        }}
      />
    </div>
  );
};

const Success = () => {
  const { setMsgJSXCallback } = useBusiness();

  return (
    <div
      style={{
        height: "210px",
        background: "white",
        boxShadow: "10px 10px black",
      }}
    >
      <div
        style={{
          fontSize: "20px",
          width: "100%",
          textAlign: "center",
          position: "absolute",
          top: "60px",
        }}
      >
        Congrats, successfully minted
      </div>

      <img
        alt=""
        src={viewInEthscanButton}
        onClick={() => {
          alert("view in ethscan");
        }}
        style={{
          position: "absolute",
          top: "115px",
          left: "28px",
          width: "294px",
          height: "34px",
          cursor: "pointer",
        }}
      />

      <img
        alt=""
        src={viewInOpenseaButton}
        onClick={() => {
          window.open("https://opensea.io/collection/phone-on-face", "_blank");
        }}
        style={{
          position: "absolute",
          top: "153px",
          left: "28px",
          width: "294px",
          height: "34px",
          cursor: "pointer",
        }}
      />

      <img
        alt=""
        src={blackDialogCloseButton}
        onClick={() => {
          setMsgJSXCallback(null);
        }}
        style={{
          position: "absolute",
          top: "12px",
          left: "310px",
          width: "31px",
          height: "31px",
          cursor: "pointer",
        }}
      />
    </div>
  );
};

const MintButton = (props: unknown) => {
  const { business, refreshMinted, setMsgJSXCallback } = useBusiness();

  const onClick = async () => {
    if (business.addr === "") {
      setMsgJSXCallback(PlsConnectToWalletFirst);
      return;
    }

    try {
      setMsgJSXCallback(Processing);
      const result = await mint(business.toMint);
      console.log(result);
      setTimeout(() => {
        setMsgJSXCallback(Success);
      }, 1500);
    } catch (error: any) {
      console.log(error);
      setTimeout(() => {
        setMsgJSXCallback(() => {
          return (
            <>
              <ErrorDialog error={error}></ErrorDialog>
            </>
          );
        });
      }, 1500);
    }

    refreshMinted();
  };

  return (
    <ImageButton
      onClick={() => {
        onClick();
      }}
      {...props}
    />
  );
};

const StyledMintButton = styled(MintButton)`
  width: 127px;
  height: 43px;
  left: 102px;
  top: 50px;
  background-image: url(${mintButtonImage});
  background-size: 127px 43px;
`;

const MintPanel = (props: unknown) => {
  return (
    <div {...props}>
      <StyledInfoDiv />
      <StyledToMintDiv />
      <StyledIncButton />
      <StyledDecButton />
      <StyledMintButton />
    </div>
  );
};

const StyledMintPanel = styled(MintPanel)`
  width: 229px;
  height: 93px;
  background: white;
`;

export const UpperStyledMintPanel = styled(StyledMintPanel)`
  left: 433px;
  top: 240px;
`;

export const BottomStyledMintPanel = styled(StyledMintPanel)`
  left: 433px;
  top: 988px;
`;
