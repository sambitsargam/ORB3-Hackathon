import { IChainData } from './types';

const supportedChains: IChainData[] = [
  {
    name: "Scroll Sepolia",
    short_name: "scl",
    chain: "ETH",
    network: "sepolia",
    chain_id: 534351,
    network_id: 534351,
    rpc_url: "https://sepolia-rpc.scroll.io",
    native_currency: {
      symbol: "ETH",
      name: "Ethereum",
      decimals: "18",
      contractAddress: "",
      balance: "",
    },
  },
  {
    name: "Orb3 Testnet",
    short_name: "orb3",
    chain: "ORB3",
    network: "ORB3",
    chain_id: 1627454953838939,
    network_id: 1627454953838939,
    rpc_url: "https://test-rpc.orb3.tech",
    native_currency: {
      symbol: "GETH",
      name: "GETH",
      decimals: "18",
      contractAddress: "",
      balance: "",
    },
  },
  {
    name: "Avalanche Fuji Testnet",
    short_name: "ava",
    chain: "AVAX",
    network: "avalanche",
    chain_id: 43113,
    network_id: 43113,
    rpc_url: "https://rpc.ankr.com/avalanche_fuji",
    native_currency: {
      symbol: "AVAX",
      name: "Avalanche",
      decimals: "18",
      contractAddress: "",
      balance: "",
    },
  },
];

export default supportedChains;