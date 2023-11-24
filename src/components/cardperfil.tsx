import { useState } from "react";
import Image from "next/image";

export default function CardPerfil() {
  const [isHover, setIsHover] = useState(false);
  return (
    <>
      <section className="flex flex-col items-center md:flex w-3/4 justify-center h-full gap-5">
        <div
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          className="max-md:hidden flex flex-col items-center gap-2"
        >
          <Image
            src={isHover ? "/imgAvatar.png" : "/imgPerfil.jpg"}
            alt={""}
            width={200}
            height={200}
            className={`rounded-full border-4 border-purple-800 transition duration-500 ease-in-out`}
            priority
          />
          <h2 className="text-2xl text-center font-bold">
            Emanoel Saraiva da Silva
          </h2>
        </div>
        <section className="border-2 p-4 rounded-2xl border-purple-700 shadow-md dark:shadow-gray-700 hover:animate-pulse">
          <p className="text-center font-bold text-4xl flex flex-col">
            FullStack Web
            <span className="text-purple-700 text-6xl">Developer</span>
          </p>
        </section>
      </section>
    </>
  );
}
