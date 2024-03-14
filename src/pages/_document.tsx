import { Html, Head, Main, NextScript } from "next/document";
import Providers from "./components/providers";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="shortcut icon" href="/logoIcon.png" />
      </Head>
      <title>LeBlonde Shop</title>

      <body className="w-full overflow-x-hidden">
        <Providers>
          <Main />
        </Providers>
        <NextScript />
      </body>
    </Html>
  );
}
