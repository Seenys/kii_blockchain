import { ethers } from "hardhat";

async function main() {
  try {
    // Obtén el contrato que deseas desplegar
    const PrivateInfoStorage =
      await ethers.getContractFactory("PrivateInfoStorage");

    // Despliega el contrato
    const privateInfoStorage = await PrivateInfoStorage.deploy();

    // Espera a que el contrato sea desplegado
    await privateInfoStorage.waitForDeployment();

    // Muestra la dirección del contrato desplegado
    console.log(
      "Contrato desplegado en:",
      await privateInfoStorage.getAddress()
    );
  } catch (error) {
    console.error("Error en el despliegue:", error);
    process.exitCode = 1;
  }
}

// Ejecuta la función principal
main();
