import React from "react";
import { Github, Linkedin } from "@emotion-icons/boxicons-logos";
import Link from "next/link";

interface Props {}

function Footer(props: Props) {
  const {} = props;

  return (
    <footer className="relative flex flex-col p-4 z-40 items-center gap-3 h-64 bg-black/5 dark:bg-white/5 mt-6">
      <h2 className="text-2xl">Social Links</h2>
      <div className="flex gap-3">
        <span className="bg-slate-900/10 dark:bg-slate-50/5 rounded-full w-12 h-12 grid place-content-center select-none hover:bg-slate-50/10 hover:text-rose-400 transition-colors cursor-pointer">
          <Linkedin size={25} />
        </span>
        <Link href="https://github.com/krushilnaik" passHref>
          <a className="bg-slate-900/10 dark:bg-slate-50/5 rounded-full w-12 h-12 grid place-content-center select-none hover:bg-slate-50/10 hover:text-rose-400 transition-colors cursor-pointer">
            <Github size={25} />
          </a>
        </Link>
      </div>
      <p className="text-lg absolute bottom-7">
        Accepts bribes in the form of Taco Bell 🌮
      </p>
    </footer>
  );
}

export default Footer;
