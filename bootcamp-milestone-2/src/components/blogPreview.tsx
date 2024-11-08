import React from 'react';
import style from './blogPreview.module.css';
import { Blog } from "@/app/blogData";
import Image from 'next/image';
import Link from "next/link";

export default function BlogPreview(props: Blog) {
  return (
    <div className={style.div}>
      <h3>{props.title}</h3>
      <h3>{props.date}</h3>
      <Link href={`blog/${props.slug}`} >Learn More!</Link>
      <div className={style.inner}>
        <Image src = {props.image} alt = {props.imageAlt} width={700} height={394} ></Image>
        <p>{props.description}</p>
      </div>
	</div>
  );
}