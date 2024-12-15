import { NextRequest, NextResponse } from 'next/server'
import connectDB from "@/database/db"
import Portfolio from "@/database/portfolioSchema"

type IParams = {
		params: {
			slug: string
		}
}

export async function POST(req: NextRequest) {

    interface CommentInterface {
        title: string //used to identify which portfolio preview this is going under
        user: string
        comment: string
    }

    await connectDB()

	const body = await req.json() as Partial<CommentInterface>

	// validate body
	if (!body.title || !body.user || !body.comment) {
        return NextResponse.json(
            {error: "title, user and comment required"}
        )
	}

    const pushComment = {
        user: body.user,
        comment: body.comment,
        time: new Date()
    }
	
	// push comment object to document
    const newPortfolio = await Portfolio.findOne({title: body.title})

    if (!newPortfolio){
        return NextResponse.json(
            {error: "could not find Portfolio"}
        )
    }

    let tempComments = newPortfolio.get("comments")
    
    //I need to use this strange workaround because for some reason
    //newPortfolio.comments is undefined but newPortfolio.get("comments")
    //works fine. So that's the reason for the strange code.

    tempComments.push(pushComment);

    newPortfolio.set("comments", tempComments)

    newPortfolio.markModified("comments")

    await newPortfolio.save()

	return NextResponse.json({message: "Comment Added!"})
}