import { Work_Sans, Libre_Baskerville } from "next/font/google";

import Navbar from "../components/Navbar";
import "./globals.css";

const workSans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-work-sans",
  weight: ["400", "700"], // Add the weights you need
});

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-libre-baskerville",
  weight: ["400", "700"], // Add the weights you need
});

export const metadata = {
  title: "Emma Klint",
  description: "UX Designer and Front-End Developer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${workSans.variable} ${libreBaskerville.variable}`}
    >
      <body className="min-h-screen flex flex-col items-center overflow-y-scroll">
        <Navbar />
        <main className="flex-grow flex justify-center pt-16 max-w-screen-xl px-4 md:px-8">
          {children}
        </main>
      </body>
    </html>
  );
}
