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
  font-size: 26px;
  text-align: center;
  left: 0px;
  top: 0px;
  height: 63px;
  line-height: 63px;
  width: 100%;
`;

const CircleImageButton = styled(ImageButton)`
  border-radius: 21.5px;
`;

const IncOrDecButton = styled(CircleImageButton)`
  background-color: black;
  width: 30px;
  height: 30px;
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
  left: 87px;
  top: 75px;
  background-image: url(${incImage});
  background-size: 17px 17px;
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
  left: 16px;
  top: 75px;
  background-image: url(${decImage});
  background-size: 17px 4px;
`;

const ToMintDiv = (props: unknown) => {
  const { business } = useBusiness();
  return <div {...props}>{business.toMint}</div>;
};

const StyledToMintDiv = styled(ToMintDiv)`
  font-size: 26px;
  text-align: center;
  left: 46px;
  top: 74px;
  width: 41.5px;
`;

const PlsConnectToWalletFirst = () => {
  const { setMsgJSXCallback } = useBusiness();

  return (
    <div
      style={{
        height: "195px",
        background: "white",
        boxShadow: "16px 16px black",
      }}
    >
      <div
        style={{
          fontSize: "30px",
          width: "100%",
          textAlign: "center",
          position: "absolute",
          top: "36px",
        }}
      >
        Please connect to your wallet first.
      </div>
      <Button
        onClick={() => {
          setMsgJSXCallback(null);
        }}
        style={{
          fontSize: "30px",
          color: "white",
          width: "595px",
          height: "57px",
          background: "black",
          textAlign: "center",
          position: "absolute",
          top: "100px",
          left: "49px",
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
          top: "10px",
          left: "630px",
          width: "52px",
          height: "52px",
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
        height: "175px",
        background: "white",
        boxShadow: "16px 16px black",
      }}
    >
      <div
        style={{
          fontSize: "30px",
          width: "100%",
          textAlign: "center",
          position: "absolute",
          top: "36px",
        }}
      >
        Processing
      </div>

      <div
        style={{
          fontSize: "20px",
          width: "100%",
          textAlign: "center",
          position: "absolute",
          top: "86px",
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
  if (shortErrStr.length > 50) {
    shortErrStr =
      shortErrStr.slice(0, 50).split(" ").slice(0, -1).join(" ") + "...";
  }

  return (
    <div
      style={{
        height: "175px",
        background: "black",
        boxShadow: "16px 16px white",
      }}
    >
      <div
        style={{
          color: "white",
          fontSize: "30px",
          width: "100%",
          textAlign: "center",
          position: "absolute",
          top: "29px",
        }}
      >
        Mint failed<br></br>Error
      </div>

      <div
        title={errStr}
        style={{
          color: "white",
          fontSize: "20px",
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
          top: "10px",
          left: "630px",
          width: "52px",
          height: "52px",
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
        height: "195px",
        background: "white",
        boxShadow: "16px 16px black",
      }}
    >
      <div
        style={{
          fontSize: "30px",
          width: "100%",
          textAlign: "center",
          position: "absolute",
          top: "36px",
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
          top: "108px",
          left: "38px",
          width: "294px",
          height: "57px",
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
          top: "108px",
          left: "360px",
          width: "294px",
          height: "57px",
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
          top: "10px",
          left: "630px",
          width: "52px",
          height: "52px",
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
  width: 164px;
  height: 57px;
  left: 129px;
  top: 63px;
  background-image: url(${mintButtonImage});
  background-size: 164px 57px;
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
  width: 293px;
  height: 120px;
  background: white;
`;

export const UpperStyledMintPanel = styled(StyledMintPanel)`
  left: 700px;
  top: 126px;
`;

export const BottomStyledMintPanel = styled(StyledMintPanel)`
  left: 458px;
  top: 1050px;
`;
