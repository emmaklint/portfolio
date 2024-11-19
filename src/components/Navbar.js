"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Sun, Moon, PartyPopper } from "lucide-react";

const NavLink = ({ href, children, onClick }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`font-semibold hover:text-orange-700 text-4xl md:text-2xl ${
        isActive ? "underline underline-offset-8" : ""
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
      className={`fixed inset-y-0 right-0 z-50 w-full bg-white dark:bg-gray-800 shadow-lg transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out`}
    >
      <div className="relative p-4 h-full flex flex-col justify-center">
        <Link
          href="/"
          className="text-xl md:text-3xl absolute top-4 left-4"
          onClick={onClose}
        >
          Emma Klint
        </Link>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
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
  const [theme, setTheme] = useState("light"); // Default to light

  useEffect(() => {
    // Set theme based on user's system preference after component mounts
    const preferredTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";
    setTheme(preferredTheme);
    document.documentElement.setAttribute("data-theme", preferredTheme);
    document.body.setAttribute("data-theme-set", "true"); // Show body
  }, []);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      // Cycle through themes
      const themes = ["light", "dark", "party"];
      const nextIndex = (themes.indexOf(prevTheme) + 1) % themes.length;
      return themes[nextIndex];
    });
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <nav className="w-full">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4 md:p-8">
        <Link href="/" className="text-xl md:text-3xl font-bold">
          Emma Klint
        </Link>
        <ul className="hidden md:flex flex-1 justify-end items-center space-x-4">
          <li>
            <NavLink href="/about">About</NavLink>
          </li>
          <li>
            <NavLink href="/work">Work</NavLink>
          </li>
          {/* <li>
            <NavLink href="/blog">Blog</NavLink>
          </li> */}
          <li>
            <button
              onClick={toggleTheme}
              className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded p-2"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <Moon size={20} />
              ) : theme === "dark" ? (
                <PartyPopper size={20} />
              ) : (
                <Sun size={20} />
              )}
            </button>
          </li>
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
