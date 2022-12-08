import { ethers } from "ethers";
import Contract from "../contract.json";

declare var window: any;

const contractAddress = "0x4087817735d9e60D55Db3b389B26C721e650bD46";
const provider = ethers.getDefaultProvider(
  "https://eth-mainnet.alchemyapi.io/v2/"
);
const contract = new ethers.Contract(contractAddress, Contract.abi, provider);

export const alreadyMinted = async () => {
  return Number(await contract.totalSupply());
};

export const mint = async (num: number) => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const contract = new ethers.Contract(contractAddress, Contract.abi, signer);
  const result = await contract.mint(num, {
    // value: ethers.utils.parseEther((0.05 * num).toFixed(2)),
    value: ethers.utils.parseEther((0.0 * num).toFixed(2)),
  });
  return await result.wait();
};

export const getUserBalance = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const [account] = await window.ethereum.request({
    method: "eth_requestAccounts",
  });
  const balance = await provider.getBalance(account);
  return ethers.utils.formatEther(balance);
};

export const getUserAddress = async () => {
  if (window.ethereum === undefined) {
    throw new Error("Please install MetaMask first");
  }

  await window.ethereum.request({
    method: "wallet_switchEthereumChain",
    params: [{ chainId: "0x1" }],
  });

  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const [account] = await window.ethereum.request({
    method: "eth_requestAccounts",
  });
  return await provider.getSigner(account).getAddress();
};
