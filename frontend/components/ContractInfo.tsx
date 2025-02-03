import { useContractStore } from "@/store/store";

const ContractInfo = () => {
  const { contractAddress, isConnected, userAddress, contractInfo } =
    useContractStore();

  return (
    <div>
      <h1>Información del Contrato</h1>
      <p>Contrato: {contractInfo}</p>
      <p>Dirección del contrato: {contractAddress}</p>
      <p>Estado de conexión: {isConnected ? "Conectado" : "No conectado"}</p>
      <p>Dirección del usuario: {userAddress}</p>
    </div>
  );
};

export default ContractInfo;
