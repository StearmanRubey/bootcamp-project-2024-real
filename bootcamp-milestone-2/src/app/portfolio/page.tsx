import React from "react";
import PortfolioPreview from '@/components/portfolioPreview';
import Portfolio from "@/database/portfolioSchema";
import connectDB from "@/database/db";

async function getPortfolios(){
	await connectDB() // function from db.ts before

	try {
			// query for all blogs and sort by date
	    const portfolios = await Portfolio.find().sort({ date: "descending" }).lean().orFail();
			// send a response as the blogs as the message
	    return portfolios
	} catch (err) {
	    return null
	}
}

const portfolios = await getPortfolios();

export default function PortfolioPage() {

    if(!portfolios) {
        return <p> portfolios are null</p>
    }
    return (
        <main>
            <h1> My Portfolio! </h1>
                {portfolios.map(portfolio => 

                    <PortfolioPreview // This is how we call the component

                    title={portfolio.title}
                    description={portfolio.description}
                    imageAlt={portfolio.imageAlt}
                    slug={portfolio.slug}
                    image={portfolio.image}
                    comments={portfolio.comments || []}
                    />
                )}
            

        </main>
    )}