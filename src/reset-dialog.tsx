import { useEffect } from "react";
import { useBusiness } from "./context/business";

export const ResetDialog = ({ layout }: any) => {
  const { setMsgJSXCallback } = useBusiness();
  useEffect(() => {
    setMsgJSXCallback(null);
    // eslint-disable-next-line
  }, [layout]);
  return <></>;
};
