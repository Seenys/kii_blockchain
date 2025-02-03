"use client";
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import PrivateInfoStorage from "@/contracts/PrivateInfoStorage.json";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useContractStore } from "@/store/store";
import ContractInfo from "@/components/ContractInfo";

export default function Dashboard() {
  const [isOwner, setIsOwner] = useState(false);
  const [whitelist, setWhitelist] = useState<string[]>([]);
  const [newInfo, setNewInfo] = useState("");
  const { setContractInfo, isConnected, contractAddress, setContractAddress } =
    useContractStore();

  const { toast } = useToast();

  setContractAddress(process.env.NEXT_PUBLIC_CONTRACT_ADDRESS!); // Reemplaza con la dirección del contrato
  const abi = PrivateInfoStorage.abi;

  const fetchData = async () => {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(contractAddress, abi, signer);

      const address = await signer.getAddress();
      const isWhitelisted = await contract.isWhitelisted(address);
      if (!isWhitelisted) {
        toast({
          title: "No estás en la whitelist",
          description:
            "Por favor, solicita acceso al propietario del contrato.",
          variant: "destructive",
          duration: 5000,
        });
        return;
      }

      const privateInfo = await contract.getPrivateInfo();
      setContractInfo(privateInfo);

      const owner = await contract.owner();
      if (address === owner) {
        setIsOwner(true);
        const whitelist = await contract.getWhitelist();
        setWhitelist(whitelist);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const updateInfo = async () => {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(contractAddress, abi, signer);

      try {
        const tx = await contract.storePrivateInfo(newInfo);
        await tx.wait();
        setContractInfo(newInfo);
        setNewInfo("");
      } catch (err) {
        console.error("Error al actualizar la información:", err);
        toast({
          title: "Error al actualizar la información",
          description: "Por favor, intenta de nuevo.",
          variant: "destructive",
          duration: 5000,
        });
      }
    }
  };

  return (
    <div className="min-h-screen text-cosmos-light bg-gray-100 bg-opacity-0 backdrop-blur-lg flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4 text-cosmos-light">Dashboard</h1>
      {isConnected ? (
        <div>
          <ContractInfo />
        </div>
      ) : (
        <p className="text-lg mb-4">No estás conectado.</p>
      )}

      {isOwner && (
        <div>
          <h2 className="text-2xl font-bold mb-4">
            Actualizar Información Privada
          </h2>
          <Input
            type="text"
            value={newInfo}
            onChange={(e) => setNewInfo(e.target.value)}
            className="px-4 py-2 border rounded mb-4"
          />
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              className="w-full bg-cosmos-primary text-cosmos-light px-8 py-3 rounded-lg hover:bg-opacity-90 transition-all"
              onClick={updateInfo}
            >
              Actualiza tu Información
            </Button>
          </motion.div>
          <h2 className="text-2xl font-bold mt-8 mb-4">Whitelist</h2>
          <div className="max-h-40 overflow-y-auto">
            <ul>
              {whitelist.map((address, index) => (
                <li key={index}>{address}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
