import Link from "next/link";
import React, { PropsWithChildren } from "react";

interface Props {
  href: string;
}

function NavLink(props: PropsWithChildren<Props>) {
  const { href, children } = props;

  return (
    <Link href={href} passHref>
      <a className="hover:text-rose-400 text-lg transition-colors">{children}</a>
    </Link>
  );
}

export default NavLink;
