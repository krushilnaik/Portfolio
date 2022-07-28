import "../styles/globals.css";
import type { AppProps } from "next/app";
import Logo from "../components/Logo";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { ThemeProvider } from "next-themes";
import ThemeToggle from "../components/ThemeToggle";
import NavLink from "../components/NavLink";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps, router }: AppProps) {
  const { asPath } = useRouter();

  const variants: Variants = {
    initial: {
      y: 500,
      opacity: 0,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
    exit: {
      opacity: 0,
      x: 500,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <ThemeProvider attribute="class">
      <div className="w-screen min-h-screen flex flex-col justify-between max-w-full bg-theme text-theme transition-colors">
        <header className="p-3">
          <nav className="flex justify-between items-center">
            <Logo />
            <div className="flex gap-2">
              <ul className="flex gap-2 items-center">
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
              <ThemeToggle />
            </div>
          </nav>
        </header>

        {/* Desktop Background */}
        <div
          className="absolute transition-all duration-300 top-0 left-0 h-screen bg-red-400"
          style={{
            clipPath: "polygon(0 0, 80% 0%, 55% 100%, 0% 100%)",
            width: asPath.startsWith("/projects/") ? "60vw" : "0vw",
          }}
        ></div>

        {/* Mobile background */}
        <div
          className="transition-all md:hidden duration-300 w-28 h-28 bg-red-400 rounded-full absolute top-0 -translate-x-1/2 -translate-y-1/2 left-1/2"
          style={
            asPath.startsWith("/projects/")
              ? { width: "130vw", height: "130vw" }
              : { width: "0vw", height: "0vw" }
          }
        ></div>

        <AnimatePresence exitBeforeEnter>
          <motion.div
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            key={router.asPath.split("#")[0]}
          >
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
        <footer className="flex flex-col p-4 z-40 items-center gap-3 h-64 bg-black/5 dark:bg-white/5 mt-6">
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
    </ThemeProvider>
  );
}

export default MyApp;
