import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { motion, Variants } from "framer-motion";
import { Router, useRouter } from "next/router";
import { BackgroundContext } from "@/contexts/BackgroundContext";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MainLayout from "@/layouts/MainLayout";
import Loader from "@/components/Loader";

function MyApp({ Component, pageProps, router }: AppProps) {
  const [isProject, setIsProject] = useState(false);
  const [loading, setLoading] = useState(false);
  const { asPath } = useRouter();

  useEffect(() => {
    const start = () => {
      console.log("start");
      setLoading(true);
    };

    const end = () => {
      console.log("finished");
      setLoading(false);
    };

    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);

    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);

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

  const decorationVariants: Variants = {
    animate: {
      x: 0,
      y: 0,
    },
  };

  return (
    <MainLayout>
      <Header />

      {loading && <Loader />}

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

      {/* "Watermark" shapes */}
      <motion.div
        aria-hidden
        variants={{ ...decorationVariants, initial: { y: -100 } }}
        style={{ rotate: "12deg" }}
        initial="initial"
        animate="animate"
        transition={{ duration: 0.5 }}
        className="absolute -z-10 h-64 w-64 md:h-96 md:w-96 bg-rose-400/10 rounded-2xl -top-52 right-40 lg:right-1/2"
      ></motion.div>
      <motion.div
        aria-hidden
        variants={{ ...decorationVariants, initial: { x: 100 } }}
        style={{ rotate: "-12deg" }}
        initial="initial"
        animate="animate"
        transition={{ duration: 0.5 }}
        className="absolute -z-10 h-64 w-64 md:h-96 md:w-96 bg-rose-400/10 rounded-2xl top-96 -right-40"
      ></motion.div>
      <motion.div
        aria-hidden
        variants={{ ...decorationVariants, initial: { x: -100 } }}
        style={{ rotate: "45deg" }}
        initial="initial"
        animate="animate"
        transition={{ duration: 0.5 }}
        className="absolute -z-10 h-64 w-64 md:h-96 md:w-96 bg-rose-400/10 rounded-2xl bottom-96 -left-40"
      ></motion.div>

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
