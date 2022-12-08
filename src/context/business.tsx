import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { alreadyMinted } from "../util/ethers";

interface IBusiness {
  minted: number;
  total: number;
  toMint: number;
  addr: string;
  msgJSXCallback: (() => JSX.Element) | null;
}

const defaultBusiness: IBusiness = {
  minted: 0,
  total: 5555,
  toMint: 1,
  addr: "",
  msgJSXCallback: null,
};

const BusinessContext = createContext({
  business: defaultBusiness,
  setToMint: (num: number) => {},
  mint: async (num: number) => {},
  setAddr: (addr: string) => {},
  refreshMinted: () => {},
  setMsgJSXCallback: (cb: (() => JSX.Element) | null) => {},
});

export const BusinessProvider = ({ children }: { children: ReactNode }) => {
  const [business, setBusiness] = useState(defaultBusiness);

  const refreshMinted = () => {
    alreadyMinted()
      .then((minted: number) => {
        setBusiness((b) => {
          return { ...b, minted: minted };
        });
      })
      .catch((e) => {
        alert(`Fail to connect to Ethereum Network, ${e.code}, ${e.event}`);
      });
  };

  useEffect(refreshMinted, []);

  const setToMint = (num: number) => {
    setBusiness((business) => {
      return { ...business, toMint: num };
    });
  };

  const mint = async (num: number) => {};

  const setAddr = (addr: string) => {
    setBusiness((business) => {
      return {
        ...business,
        addr: addr.slice(0, 7) + "..." + addr.slice(-5),
      };
    });
  };

  const setMsgJSXCallback = (cb: (() => JSX.Element) | null) => {
    setBusiness((business) => {
      return {
        ...business,
        msgJSXCallback: cb,
      };
    });
  };

  return (
    <BusinessContext.Provider
      children={children}
      value={{
        business,
        setToMint,
        mint,
        setAddr,
        refreshMinted,
        setMsgJSXCallback,
      }}
    />
  );
};

export const useBusiness = () => {
  return useContext(BusinessContext);
};
