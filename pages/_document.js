import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* cdn 으로 넣을땐 head 열림 닫힘 태그로 변경후 설정 */}
        <script src="https://cdn.tailwindcss.com"></script>
        <title>29CM_next_ver</title>
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
