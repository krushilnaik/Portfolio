import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "next-themes";
import React, { PropsWithChildren, useState } from "react";
import { BackgroundContext } from "../contexts/BackgroundContext";

interface Props {}

function MainLayout(props: PropsWithChildren<Props>) {
  const [backgroundColor, setBackgroundColor] = useState("darkslategray");
  const { children } = props;

  return (
    <ThemeProvider attribute="class">
      <BackgroundContext.Provider value={{ backgroundColor, setBackgroundColor }}>
        <AnimatePresence exitBeforeEnter>
          <div className="w-screen min-h-screen flex flex-col justify-between max-w-full bg-theme text-theme transition-colors">
            {children}
          </div>
        </AnimatePresence>
      </BackgroundContext.Provider>
    </ThemeProvider>
  );
}

export default MainLayout;
