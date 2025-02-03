"use client";

import ConnectWallet from "@/components/ConnectWallet";
import { motion } from "framer-motion";

export default function Login() {
  return (
    <div className="min-h-screen container px-4  flex flex-col items-center justify-center">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-6xl font-bold text-cosmos-light mb-4"
      >
        Conecta con Metamask
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-xl text-cosmos-light mb-8"
      >
        Si no tienes Metamask, instálalo para continuar.
      </motion.p>
      <ConnectWallet />
    </div>
  );
}
