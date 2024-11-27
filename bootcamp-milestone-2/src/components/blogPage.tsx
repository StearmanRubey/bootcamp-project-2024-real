import React from 'react';
import Blog from "@/database/blogSchema";

export default function BlogPage(props: Blog) {

  const newDate = new Date(props.date)


  return (

    <main>
        <h1 className="page-title">{props.title}</h1>

        <div id="blog-container">
        <div className="blog-date">
            <p>{newDate.toDateString()}</p>
        </div>
        <div className="blog-image">
            <img src = {props.image} width="700" height="394" alt={props.imageAlt}></img>
        </div>
        <div className="blog-content">
                <p>{props.content}</p>
        </div> 
        </div>
  </main>

  )}