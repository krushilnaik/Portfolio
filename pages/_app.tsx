import "../styles/globals.css";
import type { AppProps } from "next/app";
import Logo from "../components/Logo";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import NavLink from "../components/NavLink";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <div className="w-screen min-h-screen flex flex-col justify-between max-w-full bg-slate-900 text-slate-200">
      <header className="p-3">
        <nav className="flex justify-between items-center">
          <Logo />
          <ul className="flex gap-2">
            <li>
              <NavLink href="/">Home</NavLink>
            </li>
            <li>
              <NavLink href="/projects">Projects</NavLink>
            </li>
            <li>
              <NavLink href="#contact">Contact</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.asPath} />
      </AnimatePresence>
      <footer className="flex flex-col p-4 z-40 items-center gap-3 h-64 bg-white/5 mt-6">
        <h2 className="text-2xl">Social Links</h2>
        <div className="flex gap-3">
          <span className="bg-slate-50/5 rounded-full w-9 h-9 grid place-content-center select-none hover:bg-slate-50/10 transition-colors cursor-pointer">
            L
          </span>
          <span className="bg-slate-50/5 rounded-full w-9 h-9 grid place-content-center select-none hover:bg-slate-50/10 transition-colors cursor-pointer">
            G
          </span>
        </div>
      </footer>
    </div>
  );
}

export default MyApp;
