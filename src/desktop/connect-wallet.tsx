import styled from "styled-components";
import { useBusiness } from "../context/business";
import { getUserAddress } from "../util/ethers";
import { ImageButton } from "./button";
import whiteDialogCloseButton from "./assets/white-dialog-close-button.webp";

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
        Connecting with MetaMask.
        <br />
        Check ur Metamask popover.
      </div>
    </div>
  );
};

const ErrorDialog = ({ error }: any) => {
  const { setMsgJSXCallback } = useBusiness();

  let errStr: string;
  if (typeof error.message === "string") {
    errStr = error.message;
  } else {
    errStr = "Unknown error";
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
        Plz connect with ur MetaMask<br></br>Error
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

const ConnectWalletButton = (props: unknown) => {
  const { business, setAddr, setMsgJSXCallback } = useBusiness();

  const onClick = async () => {
    if (business.addr !== "") {
      return;
    }
    try {
      setMsgJSXCallback(Processing);
      let addr = await getUserAddress();
      setTimeout(() => {
        setAddr(addr);
        setMsgJSXCallback(null);
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
  };
  return (
    <ImageButton
      onClick={() => {
        onClick();
      }}
      {...props}
      style={{ cursor: business.addr === "" ? "pointer" : "default" }}
    >
      {business.addr || "CONNECT WALLET"}
    </ImageButton>
  );
};

export const StyledConnectWalletButton = styled(ConnectWalletButton)`
  width: 226px;
  height: 49px;
  left: 1057px;
  top: 13px;
  box-shadow: 10px 10px rgb(0 0 0);
  background-color: white;
  font-size: 20px;
`;
