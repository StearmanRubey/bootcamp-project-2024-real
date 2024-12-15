import { NextRequest, NextResponse } from 'next/server'
import connectDB from "@/database/db"
import Blog from "@/database/blogSchema"
type IParams = {
		params: {
			slug: string
		}
}

// If { params } looks confusing, check the note below this code block
export async function GET(req: NextRequest, { params }: IParams) {
    await connectDB() // function from db.ts before
		const { slug } = await params // another destructure

	   try {
	        const blog = await Blog.findOne({ slug }).orFail()
	        return NextResponse.json(blog)
	    } catch (err) {
	        return NextResponse.json('Blog not found.', { status: 404 })
	    }
}

export async function POST(req: NextRequest) {

    interface CommentInterface {
        user: string
        comment: string
    }



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
}