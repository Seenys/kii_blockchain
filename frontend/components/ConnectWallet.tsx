"use client";
import { useState } from "react";
import { ethers } from "ethers";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import { useContractStore } from "@/store/store";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ethereum: any;
  }
}

const ConnectWallet = () => {
  const { setIsConnected, setUserAddress } = useContractStore();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { toast } = useToast();
  const router = useRouter();

  const handleConnectWallet = async () => {
    setIsLoading(true);

    if (window.ethereum) {
      try {
        // Solicita acceso a la billetera
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        // Guarda la dirección del usuario y el estado de conexión
        setUserAddress(address);
        setIsConnected(true);
        // Redirige al dashboard
        router.push("/dashboard");
      } catch (err) {
        console.error("Error al conectar la billetera:", err);
        setError("Error al conectar la billetera");
        toast({
          title: "Error al conectar la billetera",
          description: "Por favor, intenta de nuevo.",
          variant: "destructive",
          duration: 5000,
        });
      } finally {
        setIsLoading(false);
      }
    } else {
      setError("Por favor, instala MetaMask");
      toast({
        title: "MetaMask no detectado",
        description: "Por favor, instala MetaMask para continuar.",
        variant: "destructive",
        duration: 5000,
      });
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex flex-col items-center justify-center"
    >
      <Button
        onClick={handleConnectWallet}
        className="w-full bg-cosmos-primary text-cosmos-light px-8 py-3 rounded-lg hover:bg-opacity-90 transition-all"
        disabled={isLoading}
      >
        {isLoading ? "Conectando..." : "Conectar Billetera Con MetaMask"}
      </Button>
      {error && <p className="text-red-500 mt-4">{error}</p>}
    </motion.div>
  );
};

export default ConnectWallet;
