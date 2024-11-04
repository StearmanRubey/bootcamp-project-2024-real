import React from 'react';
import style from './blogPreview.module.css';
import { Blog } from "@/app/blogData";
import Image from 'next/image';

export default function BlogPreview(props: Blog) {
  return (
		// replace everything between the <div> & </div> tags
		// with your code from earlier milestones
    <div className={style.div}>
      <h3>{props.title}</h3>
      <div>
        <Image src = {props.image} alt = {props.imageAlt} width={700} height={394} ></Image>
        <p>{props.description}</p>
        <p>{props.date}</p>
      </div>
	</div>
  );
}