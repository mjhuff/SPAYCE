import { Html, Head, Main, NextScript } from 'next/document';
import StarBackground from '../components/StarBackground';

export default function Document() {
  return (
    <Html lang="en">
      <Head link rel="shortcut icon" href="favicon.ico" />
      <body className="bg-black">
        <StarBackground />
        <Main />
        <NextScript />
        <div id="modal-root"></div>
      </body>
    </Html>
  );
}
