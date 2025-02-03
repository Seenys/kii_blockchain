"use client";
import { useContractStore } from "@/store/store";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const { isConnected } = useContractStore();

  return (
    <nav className="p-4 fixed w-full top-0 z-50 bg-gradient-to-b from-black to-transparent">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <Image alt="kiiLogo" src={"/KiiChain.png"} width={100} height={100} />
        </Link>
        <div className="flex space-x-4">
          {isConnected ? (
            <Link href="/dashboard">
              <span className="text-cosmos-light hover:text-cosmos-primary cursor-pointer">
                Dashboard
              </span>
            </Link>
          ) : (
            <Link href="/login">
              <span className="text-cosmos-light hover:text-cosmos-primary cursor-pointer">
                Connect Wallet
              </span>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
