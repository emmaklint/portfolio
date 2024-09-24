"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`hover:text-gray-300 text-2xl ${isActive ? "font-bold" : ""}`}
    >
      {children}
    </Link>
  );
};
const Navbar = () => {
  return (
    <nav className="p-8">
      <div className="flex justify-between items-center">
        <Link href="/" className="text-3xl">
          Emma Klint{" "}
        </Link>
        <ul className="flex space-x-4">
          <li>
            <NavLink href="/">Home</NavLink>
          </li>
          <li>
            <NavLink href="/about">About</NavLink>
          </li>
          <li>
            <NavLink href="/work">Work</NavLink>
          </li>
          <li>
            <NavLink href="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
