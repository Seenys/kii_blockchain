# Kii Frontend - Contrato Inteligente

Este proyecto es una aplicación que combina un frontend en **Next.js** con un contrato inteligente en **Solidity** para almacenar y consultar información privada de manera segura. La aplicación utiliza una **whitelist** para controlar el acceso a la información privada.

---

### Enlaces

GitHub: [Kii Frontend - Contrato Inteligente](https://github.com/Seenys/kii_blockchain)

Vercel: [Kii Frontend - Contrato Inteligente](https://kii-blockchain-a7d45apse-seenys-projects.vercel.app)

---

## Características Principales

- **Frontend:** Desarrollado con Next.js, React y TailwindCSS.
- **Contrato Inteligente:** Desarrollado en Solidity y desplegado en una red de prueba (Fuji o Goerli).
- **Funcionalidades:**
  - Almacenar información privada.
  - Consultar información privada (solo para direcciones en la whitelist).
  - Agregar direcciones a la whitelist (solo el propietario del contrato).

## Requisitos

- **Node.js** (v16 o superior)
- **npm** o **yarn**
- **MetaMask** (o cualquier billetera compatible con Ethereum)
- **Hardhat** (para compilar y desplegar el contrato inteligente)

## Configuración

### 1. Clona el Repositorio

Clona el repositorio en tu máquina local:

```bash
git clone https://github.com/tu-usuario/tu-repositorio.git
cd tu-repositorio
```

## 2. Instala las Dependencias

Instala las dependencias tanto para el frontend como para el contrato inteligente.

### Frontend

```bash
cd frontend
npm install
```

### Contrato Inteligente

```bash
cd backend
npm install
```

## 3. Configura las Variables de Entorno

Crea un archivo **.env** en la raíz del proyecto del contrato inteligente y agrega tu clave privada:
**env**

```bash
FUJI_PRIVATE_KEY=tu_clave_privada
```

## 4. Compila el Contrato Inteligente

Compila el contrato inteligente usando Hardhat:

```bash
npx hardhat compile
```

## 5. Despliega el Contrato Inteligente

Despliega el contrato en la red de prueba (por ejemplo, Fuji):

```bash
npx hardhat run scripts/deploy.ts --network fuji
```

Copia la dirección del contrato desplegado y actualiza la variable contractAddress en el frontend.

## 6. Inicia la Aplicación Localmente

Inicia el servidor de desarrollo para el frontend:

```bash
cd frontend
npm run dev
```

La aplicación estará disponible en http://localhost:3000.

---
