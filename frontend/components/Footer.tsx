import Link from "next/link";

const Footer = () => {
  return (
    <nav className="p-4 fixed w-full bottom-0 z-50 bg-gradient-to-t from-black to-transparent">
      <div className="container mx-auto flex justify-center items-center">
        <div className="flex space-x-4">
          <Link href="/login">
            <span className="text-cosmos-light hover:text-cosmos-accent cursor-pointer">
              Github
            </span>
          </Link>
          <Link href="/dashboard">
            <span className="relative text-cosmos-light hover:text-cosmos-accent cursor-pointer animate-bounce">
              Vercel
              <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Footer;
