import { useBusiness } from "../context/business";

export const Dialog = () => {
  const { business } = useBusiness();

  if (business.msgJSXCallback === null) {
    return <></>;
  }

  return (
    <>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      />

      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "350px",
        }}
      >
        <business.msgJSXCallback></business.msgJSXCallback>
      </div>
    </>
  );
};
