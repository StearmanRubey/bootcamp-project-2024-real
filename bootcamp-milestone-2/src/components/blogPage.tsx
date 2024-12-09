import React from 'react';
import Comment from "@/components/comment";
import Blog, { IComment } from "@/database/blogSchema"

async function getBlog(slug: string): Promise<Blog | null> {
	try {
		// This fetches the blog from an api endpoint that would GET the blog
		const res = await fetch(`http://localhost:3000/api/Blogs/${slug}`, {
			cache: "no-store",	
		})
		// This checks that the GET request was successful
		if (!res.ok) {
			throw new Error("Failed to fetch blog");
		}

		return res.json();
	} catch (err: unknown) {
		console.log(`error: ${err}`);
		return null;
		// `` are a special way of allowing JS inside a string
		// Instead of "error: " + err, we can just do the above
		// it is simular to formated strings in python --> f"{err}"
	}
}


type BlogSlug = {
    slug: string;
};


export default async function BlogPage({slug}: BlogSlug) {
    const blog = await getBlog(slug);

    if (!blog){
        return <div>Blog is null</div>
    }

  const newDate = new Date(blog.date)


  return (

    <main>
        <h1 className="page-title">{blog.title}</h1>

        <div id="blog-container">
            <div className="blog-date">
                <p>{newDate.toDateString()}</p>
            </div>
            <div className="blog-image">
                <img src = {blog.image} width="700" height="394" alt={blog.imageAlt}></img>
            </div>
            <div className="blog-content">
                    <p>{blog.content}</p>
            </div> 


            
        </div>

        <h3>Comments</h3>

        <div className="comments">
           {blog.comments ? (
            blog.comments.map((comment: IComment, index: number) => (
                <Comment key={index} comment={comment} />
            ))
        ):(
            <div>
                <p> No Comments Yet! </p>
            </div>
        )}
           

        </div>
  </main>

  )}