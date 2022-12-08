import styled from "styled-components";
import { ImageButton } from "./button";
import viewSmartContractText from "./assets/view-smart-contract-text.webp";

const ViewSmartContractButton = (props: unknown) => {
  const onClick = () => {
    window.open("https://etherscan.io/address/0x4087817735d9e60d55db3b389b26c721e650bd46", "_blank");
  };
  return <ImageButton onClick={onClick} {...props} />;
};

export const StyledViewSmartContractButton = styled(ViewSmartContractButton)`
  width: 176px;
  height: 34px;
  left: 547px;
  top: 500px;
  background-color: white;
  background-image: url(${viewSmartContractText});
  background-size: 125px 10px;
`;
