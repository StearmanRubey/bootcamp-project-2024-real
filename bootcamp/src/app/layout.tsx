import type { Metadata } from "next"; // Object to set metadata
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Fragment } from "react";

export const metadata: Metadata = {
  title: "Stearman's Personal Website",
  description: "A personal website for Stearman.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // returns boilerplate
  return (
    <html lang="en">
      <body>
      <Fragment>
      <Navbar />
      {children}
      <Footer />
      </Fragment>
      </body>
    </html>
  );
}