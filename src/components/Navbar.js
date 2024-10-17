"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NavLink = ({ href, children, onClick }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`font-serif hover:text-orange-700 text-4xl md:text-2xl ${
        isActive ? "text-decoration-line: underline underline-offset-8" : ""
      }`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

const DrawerMenu = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-y-0 right-0 z-50 w-full bg-white shadow-lg transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out`}
    >
      <div className="relative p-4 h-full flex flex-col justify-center">
        <Link
          href="/"
          className="text-xl md:text-3xl font-serif absolute top-4 left-4"
          onClick={onClose}
        >
          Emma Klint
        </Link>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
          aria-label="Close menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <ul className="flex flex-col items-center justify-center space-y-6">
          <li>
            <NavLink href="/about" onClick={onClose}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink href="/work" onClick={onClose}>
              Work
            </NavLink>
          </li>
          {/* <li>
            <NavLink href="/blog" onClick={onClose}>Blog</NavLink>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <nav className="w-full">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        <Link href="/" className="text-xl md:text-3xl font-serif">
          Emma Klint
        </Link>
        <ul className="hidden md:flex flex-1 justify-center items-center space-x-4">
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
        <button
          onClick={toggleDrawer}
          className="md:hidden text-gray-600 hover:text-gray-800"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
      <DrawerMenu
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />
    </nav>
  );
};

export default Navbar;
