import { Roboto } from "next/font/google";
import NavBar from "@/components/navbar";
import CardContact from "@/components/cardcontato";

const roboto = Roboto({
  subsets: ["latin"],
  weight: "700",
});

export default function Contacts() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center gap-2  ${roboto.className}`}
    >
      <NavBar />

      <CardContact />
    </main>
  );
}
