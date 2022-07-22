import "../styles/globals.css";
import type { AppProps } from "next/app";
import Logo from "../components/Logo";
import Link from "next/link";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <div className="w-screen min-h-screen max-w-full bg-slate-900 text-slate-200">
      <header className="p-3">
        <nav className="flex justify-between items-center">
          <Logo />
          <ul className="flex gap-2">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <Link href="#contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="p-3">
        <Component {...pageProps} key={router.asPath} />
      </main>
      <footer className="flex justify-center gap-3 h-64 bg-slate-800/40">
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
