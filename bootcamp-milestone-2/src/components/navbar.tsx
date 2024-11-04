import React from "react";
import style from "./navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className={style.navList} >
      <h1> Stearman's Personal Website </h1>
      <nav className={style.navText}>
        <Link href="/" >Home</Link>
        <Link href="/blogs">Blog</Link>
        <Link href="/portfolio">Portfolio</Link>
        <Link href="/resume" >Resume</Link>
        <Link href="/about" >Contact</Link>
      </nav>
    </header>
  );
}