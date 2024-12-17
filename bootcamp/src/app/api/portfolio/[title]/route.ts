import { NextRequest, NextResponse } from 'next/server'
import connectDB from "@/database/db"
import Portfolio from "@/database/portfolioSchema"

export async function GET(req: NextRequest) {
    await connectDB() // function from db.ts before
    const title = decodeURIComponent(req.nextUrl.pathname.split('/')[3])

    try {
        const blog = await Portfolio.findOne({ title }).orFail()
        return NextResponse.json(blog)
    } catch (err) {
        console.log(err)
        return NextResponse.json('Portfolio not found.', { status: 404 })
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

        // validate body
        if ( !body.user || !body.comment) {
            return NextResponse.json(
                {error: "user and comment required"}
            )
        }

        const pushComment = {
            user: body.user,
            comment: body.comment,
            time: new Date()
        }

        const title = decodeURIComponent(req.nextUrl.pathname.split('/')[3])

        // push comment object to document
        const newPortfolio = await Portfolio.findOne({title: title})

        if (!newPortfolio){
            return NextResponse.json(
                {error: "could not find Portfolio"}
            )
        }

        //I need to use this strange workaround because for some reason
        //newPortfolio.comments is undefined but newPortfolio.get("comments")
        //works fine. So that's the reason for the strange code.

        const tempComments = newPortfolio.get("comments")

        tempComments.push(pushComment);

        newPortfolio.set("comments", tempComments)

        newPortfolio.markModified("comments")

        await newPortfolio.save()

        return NextResponse.json({message: "Comment Added!"})

    } catch (err) {
        console.log(err)
        return NextResponse.json(
            {error: "An error occurred"}
        )
    }
}