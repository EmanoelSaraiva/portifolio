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
    <main
      className={`flex min-h-screen flex-col items-center justify-center gap-2  ${roboto.className}`}
    >
      <NavBar />

      <CardProject
        title="Funnel ADS"
        description="Neste projeto esta sendo desenvolvido em equipe, juntamente com mais 3 desenvolvedores, onde fiquei fiz tanto front quanto back!"
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
    </main>
  );
}
