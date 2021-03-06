import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { Fragment, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { navigation } from "@/configs/navigation";
import { Menu, Transition } from "@headlessui/react";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function NavBar() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuOpens, setMenuOpen] = useState(false);

  const isLinkActive = (href: string) => {
    return router.pathname === href;
  };

  const menuOpen = () => {
    setMenuOpen(!menuOpens);
  };

  return (
    <>
      <nav className="flex lg:justify-between sm:justify-between justify-between w-full z-10 py-3 px-6 items-center absolute top-0">
        <Image
          src="/logo2.svg"
          alt={"logo"}
          width={50}
          height={50}
          className={"dark:invert"}
        />
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
        <div className="md:hidden" onClick={menuOpen}>
          <Menu as="div" className="relative ml-3">
            <div>
              <Menu.Button className="relative flex rounded-full text-sm focus:outline-none ">
                <span className="absolute -inset-1.5" />
                {menuOpens ? (
                  <FaTimes size={30} color={`#000`} className={"dark:invert"} />
                ) : (
                  <FaBars size={30} color={`#000`} className={"dark:invert"} />
                )}
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                {navigation.map((i) => (
                  <Menu.Item key={i.url}>
                    {({ active }) => (
                      <Link
                        href={i.url}
                        className={classNames(
                          active ? "bg-gray-100" : "",
                          "block px-4 py-2 text-sm text-gray-700 hover:text-purple-800",
                          isLinkActive(`${i.url}`)
                            ? "text-purple-900 border-b-4 border-purple-900"
                            : ""
                        )}
                      >
                        {i.label}
                      </Link>
                    )}
                  </Menu.Item>
                ))}
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </nav>
    </>
  );
}
