import styled from "styled-components";
import { useBusiness } from "../context/business";
import { ImageButton } from "./button";
import whiteDialogCloseButton from "./assets/white-dialog-close-button.webp";
import { getUserAddress } from "../util/ethers";

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
  if (shortErrStr.length > 30) {
    shortErrStr =
      shortErrStr.slice(0, 30).split(" ").slice(0, -1).join(" ") + "...";
  }

  return (
    <div
      style={{
        height: "170px",
        background: "black",
        boxShadow: "10px 10px white",
      }}
    >
      <div
        style={{
          color: "white",
          fontSize: "18px",
          width: "100%",
          textAlign: "center",
          position: "absolute",
          top: "52px",
        }}
      >
        Plz connect with ur MetaMask<br></br>Error
      </div>

      <div
        title={errStr}
        style={{
          color: "white",
          fontSize: "16px",
          width: "100%",
          textAlign: "center",
          position: "absolute",
          top: "115px",
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
  width: 176px;
  height: 38px;
  left: 683px;
  top: 18px;
  box-shadow: 8px 8px rgb(0 0 0);
  background-color: white;
  font-size: 12px;
`;
