"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-cosmos-dark min-h-screen flex items-center justify-center text-center"
    >
      <div className="container flex flex-col items-center justify-center  mx-auto px-4">
        <motion.div
          className="mb-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <Image alt="kiiLogo" src={"/Kii.png"} width={100} height={100} />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl font-bold text-cosmos-light mb-4"
        >
          Almacena y Consulta Información Privada de Manera Segura
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl text-cosmos-light mb-8"
        >
          Usa blockchain para proteger tus datos con la máxima seguridad.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link href="/login">
            <button className="bg-cosmos-primary text-cosmos-light px-8 py-3 rounded-lg hover:bg-opacity-90 transition-all">
              Conectar Billetera
            </button>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeroSection;
