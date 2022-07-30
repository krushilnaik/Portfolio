import React from "react";
import Logo from "./Logo";
import NavLink from "./NavLink";
import ThemeToggle from "./ThemeToggle";

interface Props {}

function Header(props: Props) {
  const {} = props;

  return (
    <header
      className="absolute z-50 flex items-center justify-between p-3 w-screen"
      style={{ fontFamily: "Rubik" }}
    >
      <Logo />
      <div className="flex gap-2">
        <nav className="flex justify-between items-center">
          <ul className="flex gap-2 items-center font-normal">
            <li>
              <NavLink href="/">Home</NavLink>
            </li>
            <li>
              <NavLink href="/projects">Projects</NavLink>
            </li>
            {/* <li>
              <NavLink href="/blog">Blog</NavLink>
            </li> */}
            <li>
              <NavLink href="/#contact">Contact</NavLink>
            </li>
          </ul>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}

export default Header;
