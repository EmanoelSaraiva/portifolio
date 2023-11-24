import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
        <link rel="icon" href="/logo2.svg" />
      </Head>
      <body className="w-full">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
