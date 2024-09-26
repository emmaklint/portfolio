import { Source_Sans_3, Libre_Baskerville } from "next/font/google";

import Navbar from "../components/Navbar";
import "./globals.css";

const sourceSansPro = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source-sans-pro",
});

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-libre-baskerville",
  weight: ["400", "700"], // Libre Baskerville is available in regular and bold
});

export const metadata = {
  title: "Emma Klint",
  description: "UX Designer and Front-End Developer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${sourceSansPro.variable} ${libreBaskerville.variable}`}
    >
      <body className=" min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center px-4 py-8">
          <div className="w-full max-w-4xl">{children}</div>
        </main>
      </body>
    </html>
  );
}
