"use client";

import ConnectWallet from "@/components/ConnectWallet";

export default function Login() {
  return (
    <div className="min-h-screen  flex flex-col items-center justify-center">
      <h1 className="text-4xl text-cosmos-light font-bold mb-4">
        Conectar Billetera
      </h1>
      <ConnectWallet />
    </div>
  );
}
