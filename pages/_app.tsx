import "../styles/globals.css";
import type { AppProps } from "next/app";
import Logo from "../components/Logo";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { ThemeProvider } from "next-themes";
import ThemeToggle from "../components/ThemeToggle";
import NavLink from "../components/NavLink";
import { useRouter } from "next/router";
import { BackgroundContext } from "../contexts/BackgroundContext";
import { useContext, useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MainLayout from "../layouts/MainLayout";
import { useBackground } from "../hooks/useBackground";

function MyApp({ Component, pageProps, router }: AppProps) {
  const { backgroundColor } = useBackground();
  const [isProject, setIsProject] = useState(false);
  const { asPath } = useRouter();

  useEffect(() => {
    setIsProject(asPath.startsWith("/projects/"));
  }, [asPath]);

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
    <MainLayout>
      <Header />

      <BackgroundContext.Consumer>
        {({ backgroundColor }) => (
          <>
            {/* Desktop Background */}
            <div
              className="absolute hidden md:block transition-all duration-300 top-0 left-0 h-screen bg-red-400"
              style={{
                backgroundColor,
                clipPath: "polygon(0 0, 80% 0%, 55% 100%, 0% 100%)",
                width: isProject ? "60vw" : "0vw",
              }}
            ></div>
            {/* Mobile background */}
            <div
              className="transition-all md:hidden duration-300 w-28 h-28 bg-red-400 rounded-full absolute -top-5 -translate-x-1/2 -translate-y-1/2 left-1/2"
              style={{
                backgroundColor,
                width: isProject ? "135vw" : "0vw",
                height: isProject ? "135vw" : "0vw",
              }}
            ></div>
          </>
        )}
      </BackgroundContext.Consumer>

      <motion.div
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        key={router.asPath.split("#")[0]}
      >
        <Component {...pageProps} />
      </motion.div>
      <Footer />
    </MainLayout>
  );
}

export default MyApp;
