import React from "react";
import Comment from "@/components/comment";
import Blog, { IComment } from "@/database/blogSchema";
import Image from "next/image";

async function getBlog(slug: string): Promise<Blog | null> {
  try {
    // This fetches the blog from an api endpoint that would GET the blog
    const res = await fetch(`http://localhost:3000/api/blog/${slug}`, {
      cache: "no-store",
    });
    // This checks that the GET request was successful
    if (!res.ok) {
      throw new Error("Failed to fetch blog");
    }

    return res.json();
  } catch (err: unknown) {
    console.log(`error: ${err}`);
    return null;
  }
}

type BlogSlug = {
  slug: string;
};

export default async function BlogPage({ slug }: BlogSlug) {
  const blog = await getBlog(slug);

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
