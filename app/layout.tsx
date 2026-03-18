import type { Metadata } from "next";
import "./globals.css";
import Navigation from "./components/Navigation";
import Cursor from "./components/Cursor";

export const metadata: Metadata = {
  title: "AgentCFO - The Future of Finance Podcast",
  description: "Explore AI's transformation of finance with CFOs and industry leaders.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body>
        <Cursor />
        <Navigation />
        {children}
      </body>
    </html>
  );
}
