import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="w-screen min-h-screen max-w-full bg-slate-900 text-slate-200 p-3">
      <nav className="flex justify-between items-center">
        <div className="bg-rose-600 w-12 h-12 rounded-full grid place-content-center text-2xl font-sans font-semibold">
          K
        </div>
        <ul className="flex gap-2">
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <main>
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default MyApp;
