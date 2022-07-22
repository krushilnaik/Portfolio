import "../styles/globals.css";
import type { AppProps } from "next/app";
import Logo from "../components/Logo";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <div className="w-screen min-h-screen max-w-full bg-slate-900 text-slate-200 p-3">
      <header>
        <nav className="flex justify-between items-center">
          <Logo />
          <ul className="flex gap-2">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Component {...pageProps} key={router.asPath} />
      </main>
      <footer className="flex justify-center gap-3">
        <span className="bg-slate-50/5 rounded-full w-9 h-9 grid place-content-center select-none hover:bg-slate-50/10 transition-colors cursor-pointer">
          L
        </span>
        <span className="bg-slate-50/5 rounded-full w-9 h-9 grid place-content-center select-none hover:bg-slate-50/10 transition-colors cursor-pointer">
          G
        </span>
      </footer>
    </div>
  );
}

export default MyApp;
