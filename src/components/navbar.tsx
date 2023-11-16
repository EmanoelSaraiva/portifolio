import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { navigation } from "@/configs/navigation";

export default function NavBar() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isLinkActive = (href: string) => {
    return router.pathname === href;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <nav className="flex lg:justify-around sm:justify-between justify-between w-full p-3 items-center absolute top-0">
        <Image src="/logo2.svg" alt={"logo"} width={50} height={50} />
        <ul className="hidden md:flex flex-row gap-4 justify-around text-2xl font-bold">
          {navigation.map((i) => (
            <li key={i.url}>
              <Link
                href={i.url}
                className={` hover:text-purple-800 ${
                  isLinkActive(`${i.url}`) &&
                  "text-purple-900 border-b-4 border-purple-900"
                }`}
              >
                {i.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="md:hidden" onClick={toggleMenu}>
          <FaBars size={30} color={`#000`} />
        </div>
      </nav>
    </>
  );
}
