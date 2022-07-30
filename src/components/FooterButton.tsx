import Link from "next/link";
import React, { PropsWithChildren } from "react";

interface Props {
  href: string;
}

function FooterButton(props: PropsWithChildren<Props>) {
  const { children, href } = props;

  return (
    <Link href={href} passHref>
      <a className="bg-slate-900/10 dark:bg-slate-50/5 rounded-full w-12 h-12 grid place-content-center select-none hover:bg-slate-50/10 hover:text-rose-400 transition-colors cursor-pointer">
        {children}
      </a>
    </Link>
  );
}

export default FooterButton;
