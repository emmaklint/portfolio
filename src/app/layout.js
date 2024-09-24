import Navbar from "../components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Emma Klint",
  description: "UX Designer and Front-End Developer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        <main className="p-8">{children}</main>
      </body>
    </html>
  );
}
