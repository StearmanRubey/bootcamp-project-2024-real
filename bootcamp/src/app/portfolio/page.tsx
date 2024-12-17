import React from "react";
import PortfolioPreview from '@/components/portfolioPreview';
import Portfolio from "@/database/portfolioSchema";
import connectDB from "@/database/db";

export async function getPortfolios(){
	await connectDB() // function from db.ts before

	try {
	    const portfolios = await Portfolio.find().sort({ date: "descending" }).lean().orFail();
	    return portfolios
	} catch (err) {
        console.log(err)
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
                {portfolios.map((portfolio, index) => (

                    <PortfolioPreview // This is how we call the component
                    title = {portfolio.title as string}
                    />
                ))}
            

        </main>
    )}