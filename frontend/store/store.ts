import { create } from "zustand";

interface ContractState {
  contractInfo: string | null;
  setContractInfo: (info: string) => void;
  contractAddress: string | null;
  setContractAddress: (address: string) => void;
  isConnected: boolean;
  setIsConnected: (connected: boolean) => void;
  userAddress: string | null;
  setUserAddress: (address: string) => void;
}

export const useContractStore = create<ContractState>((set) => ({
  contractInfo: null,
  setContractInfo: (info) => set({ contractInfo: info }),

  contractAddress: null,
  setContractAddress: (address) => set({ contractAddress: address }),

  isConnected: false,
  setIsConnected: (connected) => set({ isConnected: connected }),

  userAddress: null,
  setUserAddress: (address) => set({ userAddress: address }),
}));
