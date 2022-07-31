import React from "react";
import { Github, Linkedin } from "@emotion-icons/boxicons-logos";
import FooterButton from "./FooterButton";

interface Props {}

function Footer(props: Props) {
  const {} = props;

  return (
    <footer className="relative flex flex-col p-4 z-40 items-center gap-4 h-64 bg-black/5 dark:bg-white/5 mt-6">
      <h2 className="text-2xl">Social Links</h2>
      <div className="flex gap-3">
        <FooterButton href="">
          <Linkedin size={25} />
        </FooterButton>
        <FooterButton href="https://github.com/krushilnaik">
          <Github size={25} />
        </FooterButton>
      </div>
      <p className="text-lg">Accepts bribes in the form of Taco Bell 🌮</p>
    </footer>
  );
}

export default Footer;
