import { Roboto } from "next/font/google";
import NavBar from "@/components/navbar";

const roboto = Roboto({
  subsets: ["latin"],
  weight: "700",
});

export default function About() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center gap-2  ${roboto.className}`}
    >
      <NavBar />
      <article className="flex flex-col justify-center items-center">
        <h1 className="text-5xl">Sobre</h1>
        <section className="flex flex-col w-6/12 gap-3 text-center">
          <p>
            Olá! Sou Emanoel, um entusiasta apaixonado pela área de tecnologia.
            Atualmente, estou imerso em meus estudos na busca por aprimorar
            minhas habilidades e conhecimentos nesse fascinante campo. Além de
            estar cursando Engenharia de Software, estou dedicando parte do meu
            tempo ao curso de formação Web Full Stack, explorando os intricados
            detalhes tanto do desenvolvimento de frontend quanto de backend.
          </p>
          <p>
            Para complementar minha jornada no mundo da tecnologia, decidi
            mergulhar no universo do design, concluindo um curso de UX/UI.
            Acredito que a combinação de habilidades técnicas sólidas com uma
            compreensão profunda das necessidades do usuário é fundamental para
            criar soluções digitais impactantes e eficientes.
          </p>
          <p>
            Minha jornada acadêmica e profissional é marcada por uma busca
            constante por desafios, aprendizado contínuo e aplicação prática dos
            conceitos adquiridos. Estou sempre ansioso para enfrentar novos
            projetos e colaborar em equipes que compartilham da paixão pela
            inovação e excelência técnica.
          </p>
          <p>
            Além dos códigos e interfaces, aprecio explorar formas de tornar a
            experiência do usuário mais intuitiva e agradável. Estou
            comprometido não apenas em escrever linhas de código eficientes, mas
            também em criar soluções que tragam valor real aos usuários finais.
          </p>
        </section>
      </article>
    </main>
  );
}
