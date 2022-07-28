import React from "react";

interface Props {}

function Footer(props: Props) {
  const {} = props;

  return (
    <footer className="flex flex-col fixed bottom-0 w-screen p-4 z-40 items-center gap-3 h-64 bg-black/5 dark:bg-white/5 mt-6">
      <h2 className="text-2xl">Social Links</h2>
      <div className="flex gap-3">
        <span className="bg-slate-50/5 rounded-full w-12 h-12 grid place-content-center select-none hover:bg-slate-50/10 transition-colors cursor-pointer">
          L
        </span>
        <span className="bg-slate-50/5 rounded-full w-12 h-12 grid place-content-center select-none hover:bg-slate-50/10 transition-colors cursor-pointer">
          G
        </span>
      </div>
    </footer>
  );
}

export default Footer;
