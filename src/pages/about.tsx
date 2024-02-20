import { Roboto } from "next/font/google";
import NavBar from "@/components/navbar";

const roboto = Roboto({
  subsets: ["latin"],
  weight: "700",
});

import { useState } from "react";
import Image from "next/image";
import { FaFigma, FaGit, FaNode, FaReact } from "react-icons/fa";
import { BiLogoJavascript, BiLogoTypescript } from "react-icons/bi";

type Section = "js" | "node" | "git" | "react" | "figma" | "ts";

export default function About() {
  const [isHover, setIsHover] = useState(false);
  const [open, close] = useState<Section | null>(null);

  const handleMouseEnter = (section: Section) => {
    close(section);
  };

  const handleMouseLeave = () => {
    close(null);
  };

  return (
    <>
      <NavBar />
      <main
        className={`flex min-h-screen flex-col justify-center relative gap-2 py-28 ${roboto.className}`}
      >
        <div
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          className="max-md:hidden flex flex-col h-52 w-52 items-center rounded-lg gap-2 border-4 absolute left-9 top-64"
        >
          <Image
            src={isHover ? "/imgAvatar.png" : "/imgPerfil.jpg"}
            alt={""}
            width={210}
            height={210}
            className="rounded-lg"
            priority
          />
        </div>

        <article className="flex flex-col justify-items-center items-center">
          <h1 className="text-5xl">Sobre</h1>

          <section className="flex w-3/6 flex-col gap-3 justify-center  text-center">
            <p>
              Olá! Sou Emanoel, um entusiasta apaixonado pela área de
              tecnologia. Atualmente, estou imerso em meus estudos na busca por
              aprimorar minhas habilidades e conhecimentos nesse fascinante
              campo. Além de estar cursando Engenharia de Software, estou
              dedicando parte do meu tempo ao curso de formação Web Full Stack,
              explorando os intricados detalhes tanto do desenvolvimento de
              frontend quanto de backend.
            </p>
            <p>
              Para complementar minha jornada no mundo da tecnologia, decidi
              mergulhar no universo do design, concluindo um curso de UX/UI.
              Acredito que a combinação de habilidades técnicas sólidas com uma
              compreensão profunda das necessidades do usuário é fundamental
              para criar soluções digitais impactantes e eficientes.
            </p>
            <p>
              Minha jornada acadêmica e profissional é marcada por uma busca
              constante por desafios, aprendizado contínuo e aplicação prática
              dos conceitos adquiridos. Estou sempre ansioso para enfrentar
              novos projetos e colaborar em equipes que compartilham da paixão
              pela inovação e excelência técnica.
            </p>
            <p>
              Além dos códigos e interfaces, aprecio explorar formas de tornar a
              experiência do usuário mais intuitiva e agradável. Estou
              comprometido não apenas em escrever linhas de código eficientes,
              mas também em criar soluções que tragam valor real aos usuários
              finais.
            </p>
          </section>
        </article>
        <footer className="mt-9 flex flex-wrap gap-3 justify-center">
          <section
            className="relative"
            onMouseEnter={() => handleMouseEnter("js")}
            onMouseLeave={handleMouseLeave}
          >
            <BiLogoJavascript className="text-9xl text-purple-800 hover:blur-sm" />
            {open === "js" && (
              <div className="absolute top-11 left-4">
                <p className="text-white text-xl border-purple-900">
                  JavaScript
                </p>
              </div>
            )}
          </section>
          <section
            className="relative"
            onMouseEnter={() => handleMouseEnter("ts")}
            onMouseLeave={handleMouseLeave}
          >
            <BiLogoTypescript className="text-9xl text-purple-800 hover:blur-sm" />
            {open === "ts" && (
              <div className="absolute top-11 left-4">
                <p className="text-white text-xl border-purple-900">
                  Typescript
                </p>
              </div>
            )}
          </section>
          <section
            className="relative"
            onMouseEnter={() => handleMouseEnter("node")}
            onMouseLeave={handleMouseLeave}
          >
            <FaNode className="text-9xl text-purple-800 hover:blur-sm" />
            {open === "node" && (
              <div className="absolute top-11 left-7 border-none">
                <span className="text-white text-xl">NodeJS</span>
              </div>
            )}
          </section>

          <section
            className="relative"
            onMouseEnter={() => handleMouseEnter("react")}
            onMouseLeave={handleMouseLeave}
          >
            <FaReact
              className={`text-9xl text-purple-800  ${
                open === "react" && "hover:blur-sm"
              }`}
            />
            {open === "react" && (
              <span className="text-white text-xl absolute top-12 left-9">
                React
              </span>
            )}
          </section>
          <section
            className="relative "
            onMouseEnter={() => handleMouseEnter("git")}
            onMouseLeave={handleMouseLeave}
          >
            <FaGit className="text-9xl text-purple-800 hover:blur-sm" />
            {open === "git" && (
              <span className="text-white font-extrabold text-xl absolute top-12 left-12">
                Git
              </span>
            )}
          </section>
          <section
            className="relative"
            onMouseEnter={() => handleMouseEnter("figma")}
            onMouseLeave={handleMouseLeave}
          >
            <FaFigma className="text-9xl text-purple-800 hover:blur-sm" />
            {open === "figma" && (
              <span className="text-white font-extrabold text-xl absolute top-12 left-10">
                Figma
              </span>
            )}
          </section>
        </footer>
      </main>
    </>
  );
}
