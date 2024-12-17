"use client";

import React, {useState, useEffect} from "react";
import Comment from "@/components/comment";
import Blog, { IComment } from "@/database/blogSchema";
import Image from "next/image";
import BlogCommentForm from "@/components/blogCommentForm"

type BlogSlug = {
  slug: string;
};

export default function BlogPage({ slug }: BlogSlug) {

  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true)


  const fetchBlog = async () => {
    try {
      const res = await fetch(`/api/blog/${slug}`, {cache: "no-store"})
      if (!res.ok) throw new Error("fetch failed");
      const data: Blog = await res.json();
      setBlog(data);
    } catch(err) {
      console.error("Error", err)
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {fetchBlog();}, [slug, fetchBlog])

  const refreshSubmit = () => {
    fetchBlog()
  }

  if(loading) {
    return <div>Blog is loading</div>
  }

  if (!blog) {
    return <div>Blog is null</div>;
  }

  const newDate = new Date(blog.date);

  if (blog.comments) {
    blog.comments.sort((a, b) => {
      //not sure why this is needed as all of my times are Dates
      //but otherwise I get an error
      const aTime = new Date(a.time);
      const bTime = new Date(b.time);

      return bTime.getTime() - aTime.getTime();
    });
  }

  return (
    <main>
      <h1 className="page-title">{blog.title}</h1>

      <div id="blog-container">
        <div className="blog-date">
          <p>{newDate.toDateString()}</p>
        </div>
        <div className="blog-image">
          <Image
            src={blog.image}
            width="700"
            height="394"
            alt={blog.imageAlt}
          />
        </div>
        <div className="blog-content">
          <p>{blog.content}</p>
        </div>
      </div>

      <BlogCommentForm slug={slug} onSubmit={refreshSubmit}/>

      <h3>Comments</h3>

      <div className="comments">
        {blog.comments && blog.comments.length > 0 ? (
          blog.comments.map((comment: IComment, index: number) => (
            <Comment key={index} comment={comment} />
          ))
        ) : (
          <div>
            <p> No Comments Yet! </p>
          </div>
        )}
      </div>
      
    </main>
  );
}
