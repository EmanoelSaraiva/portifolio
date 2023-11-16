import { useState } from "react";
import Image from "next/image";

export default function CardPerfil() {
  const [isHover, setIsHover] = useState(false);
  return (
    <>
      <h1 className="text-4xl text-center w-full font-bold pl-11">
        Bem vindo ao meu portifólio!
      </h1>
      <section className="flex items-center md:flex w-full justify-center h-full">
        <div
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          className="max-md:hidden"
        >
          <Image
            src={isHover ? "/imgAvatar.png" : "/imgPerfil.jpg"}
            alt={""}
            width={200}
            height={200}
            className={`rounded-full border-4 border-purple-800 transition duration-300 ease-in-out mr-10`}
            priority
          />
        </div>
        <section className="w-2/4 h-2/4">
          <h2 className="text-3xl text-center font-bold">
            Emanoel Saraiva da Silva
          </h2>
          <p className="text-center font-normal">
            {" "}
            Neste portifólio irei mostrar um pouco sobre mim!
          </p>
        </section>
      </section>
    </>
  );
}
