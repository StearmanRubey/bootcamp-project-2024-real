import React from "react";
import BlogPreview from '@/components/blogPreview';
import Blog from "@/database/blogSchema";
import connectDB from "@/database/db";
import Image from "next/image";

export const dynamic = 'force-dynamic'

async function getBlogs(){
	await connectDB() // function from db.ts before

	try {
			// query for all blogs and sort by date
	    const blogs = await Blog.find().sort({ date: "descending" }).orFail()
			// send a response as the blogs as the message
	    return blogs
	} catch (err) {
        console.log(err)
	    return null
	}
}

const blogs = await getBlogs();

export default function Homepage() {
    if(!blogs) {
        return <p> blogs is null</p>
    }
    return (
                <main>
                    <h1 className="page-title">My Index!</h1>
                    <div className="about">
                        <div className="about-image">
                            <Image src="/Background_Image.png" width="700" height="394" alt="Landscape of trees and mountains" />
                        </div>
                        <div className="about-text">
                            <p>
                                Hi, I&apos;m <strong>Stearman Rubey!</strong>
                            </p>
                            <p>
                                I&apos;m a first year student at <em>Cal Poly SLO</em> studying <strong>Computer Science!</strong>
                            </p>
                            <p>
                                I&apos;m making this website as part of the <em>Hack4Impact</em> starter pack, and am learning about git, HTML, CSS, and more!
                            </p>
                        </div>
                    <h1> Blogs </h1>
                        {blogs.map(blog => 

                            
                            <BlogPreview // This is how we call the component
                            
                            key={blog._id}
                            title={blog.title}
                            description={blog.description}
                            date={blog.date}
                            imageAlt={blog.imageAlt}
                            slug={blog.slug}
                            content={blog.content}
                            image={blog.image}

                            />
                        )}

                    </div>
                </main>
    )
}