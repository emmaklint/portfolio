"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`font-serif hover:text-orange-700 text-base md:text-2xl ${
        isActive ? "text-decoration-line: underline underline-offset-8" : ""
      }`}
    >
      {children}
    </Link>
  );
};
const Navbar = () => {
  return (
    <nav>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="text-xl md:text-3xl font-serif">
          Emma Klint
        </Link>
        <ul className="flex space-x-4">
          <li>
            <NavLink href="/about">About</NavLink>
          </li>
          <li>
            <NavLink href="/work">Work</NavLink>
          </li>
          {/* <li>
            <NavLink href="/blog">Blog</NavLink>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
