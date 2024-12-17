import { NextRequest, NextResponse } from 'next/server'
import connectDB from "@/database/db"
import Blog from "@/database/blogSchema"

export async function GET(req: NextRequest) {
    await connectDB() // function from db.ts before
    const slug = req.nextUrl.pathname.split('/')[3]

    try {
        const blog = await Blog.findOne({ slug }).orFail()
        return NextResponse.json(blog)
    } catch (err) {
        console.log(err)
        return NextResponse.json('Blog not found.', { status: 404 })
    }
}

export async function POST(req: NextRequest) {

    interface CommentInterface {
        user: string
        comment: string
    }


    try{
        await connectDB()
        const body = await req.json() as Partial<CommentInterface>
        const BlogSlug = req.nextUrl.pathname.split('/')[3]

        // validate body
        if (!body.user || !body.comment) {
            return NextResponse.json(
                {error: "user and comment required"}
            )
        }

        const pushComment = {
            user: body.user,
            comment: body.comment,
            time: new Date()
        }
        
        // push comment object to document
        const newBlog = await Blog.findOne({slug: BlogSlug})

        if (!newBlog){
            return NextResponse.json(
                {error: "could not find blog"}
            )
        }

        newBlog.comments.push(pushComment);

        await newBlog.save()

        return NextResponse.json({message: "Comment Added!"})

    } catch (err) {
        console.log(err)
        return NextResponse.json(
            {error: "An error occurred"}
        )
    }
}