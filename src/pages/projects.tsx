import { Roboto } from "next/font/google";
import NavBar from "@/components/navbar";
import CardProject from "@/components/cardprojects";
import Image from "next/image";

const roboto = Roboto({
  subsets: ["latin"],
  weight: "700",
});

export default function Projects() {
  return (
    <>
      <NavBar />
      <main
        className={`flex min-h-screen flex-wrap items-center justify-center gap-2 md:flex-wrap  ${roboto.className}`}
      >
        <section className="flex flex-wrap items-center justify-evenly max-w-screen-xl w-screen py-36 gap-10">
          <CardProject
            title="Funnel ADS"
            description="Neste projeto esta sendo desenvolvido em equipe, juntamente com mais 3 desenvolvedores, onde fiquei responsável pelo FrontEnd!"
            url="https://funnel-ads.vercel.app/"
          >
            <Image
              src={"/funnel.svg"}
              width={385}
              height={250}
              alt={""}
              className="rounded-t-lg"
            />
          </CardProject>

          <CardProject
            title="Projeto ODS-4"
            description="Este projeto foi proposto pela DigitalHouse como conclusão de curso de UX/UI, desenvolvemos o projeto para mostrar nosso aprendizado durante o curso"
            url="https://www.figma.com/file/UTIqAe0VlGCYY0Q9gn1wgd/Untitled?type=design&node-id=102%3A3&mode=design&t=B9FGfCqvvZ97iqXj-1"
          >
            <Image
              src={"/figma.png"}
              width={385}
              height={250}
              alt={""}
              className="rounded-t-lg container"
            />
          </CardProject>
          <CardProject
            title="Yu-Gi-Oh"
            description="Este projeto foi proposto pela GrowDev como uma forma de trabalho em equipe, desenvolvemos o projeto para mostrar nossas habilidades tanto softskill quanto hardskill"
            url="https://yu-gi-oh-nine.vercel.app/"
          >
            <Image
              src={"/yugioh.png"}
              width={385}
              height={250}
              alt={""}
              className="rounded-t-lg"
            />
          </CardProject>
        </section>
      </main>
    </>
  );
}
