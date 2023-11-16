import { Roboto } from "next/font/google";
import NavBar from "@/components/navbar";
import CardPerfil from "@/components/cardperfil";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center gap-2  ${roboto.className}`}
    >
      <NavBar />

      <CardPerfil />
    </main>
  );
}
