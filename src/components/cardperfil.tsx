import Image from "next/image";
export default function CardPerfil() {
  return (
    <>
      <section className="flex flex-col min-h-screen items-center justify-center w-full gap-5 relative">
        <Image
          src={"/yy3.gif"}
          alt="gif"
          width={400}
          height={400}
          className="-z-10 absolute"
        />
        <section>
          <p className="font-bold text-3xl">Full Stack</p>
          <h1 className="font-extrabold text-5xl bg-gradient-to-r from-purple-700 via-purple-500 to-purple-400 bg-clip-text text-transparent">
            Developer / UX-UI
          </h1>
          <h2 className="text-xl font-bold text-end">Emanoel Saraiva</h2>
        </section>
      </section>
    </>
  );
}
