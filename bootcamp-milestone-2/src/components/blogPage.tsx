import React from 'react';
import style from './blogPage.module.css';
import Blog from "@/database/blogSchema";
import Image from 'next/image';
import Link from "next/link";

export default function BlogPage(props: Blog) {

  const renderImage = typeof props.image === "string" && props.image !== "";


  return (
    <div className={style.div}>
      <h3>{props.title}</h3>
      <h3>{props.date.toLocaleDateString()}</h3>
      <Link href={`blog/${props.slug}`} >Learn More!</Link>
      <div className={style.inner}>
        { renderImage && (
          <Image src = {props.image} alt = {props.imageAlt} width={700} height={394} ></Image>
          )
        }
        <p>{props.description}</p>
      </div>
	</div>
  );
}