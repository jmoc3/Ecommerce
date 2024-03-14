import { Html, Head, Main, NextScript } from "next/document";
import Providers from "./components/providers";

export default function Document() {
  return (
    <Html lang="en">
      <Head/>
      <link rel="shortcut icon" href="/logoIcon.png" />

      <body className="w-full overflow-x-hidden">
        <Providers>
          <Main />
        </Providers>
        <NextScript />
      </body>
    </Html>
  );
}
