import Image from "next/image";
import { Roboto } from "next/font/google";
import NavBar from "@/components/navbar";
import CardPerfil from "@/components/cardperfil";

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

      <h1 className="text-5xl">Projetos</h1>
    </main>
  );
}
