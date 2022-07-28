import React from "react";
import Logo from "./Logo";
import NavLink from "./NavLink";
import ThemeToggle from "./ThemeToggle";

interface Props {}

function Header(props: Props) {
  const {} = props;

  return (
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
  );
}

export default Header;
