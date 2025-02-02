import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="p-4 fixed w-full top-0 z-50 bg-gradient-to-b from-black to-transparent">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <span className="text-cosmos-light text-2xl font-bold cursor-pointer">
            Kii Global FrontEnd Challenge
          </span>
        </Link>
        <div className="flex space-x-4">
          <Link href="/login">
            <span className="text-cosmos-light hover:text-cosmos-primary cursor-pointer">
              Login
            </span>
          </Link>
          <Link href="/dashboard">
            <span className="text-cosmos-light hover:text-cosmos-primary cursor-pointer">
              Dashboard
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
