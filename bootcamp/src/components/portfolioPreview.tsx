"use client"

import React, {useState, useEffect} from 'react';
import Comment from "@/components/comment";
import Portfolio, {IComment} from "@/database/portfolioSchema";
import Image from 'next/image';
import Link from "next/link";
import PortfolioCommentForm from './portoflioCommentField';


interface TitleProp {
    title : string;
}

export default function PortfoiloPreview({title}: TitleProp) {
    const [portfolio, setPortfolio] = useState<Portfolio | null>(null);
    const [loading, setLoading] = useState(true)

    console.log(title)

    const fetchPortfolio = async () => {
        try {
          const res = await fetch(`/api/portfolio/${title}`, {cache: "no-store"})
          if (!res.ok) throw new Error("fetch failed");
          const data: Portfolio = await res.json();
          setPortfolio(data);
        } catch(err) {
          console.error("Error", err)
        } finally {
          setLoading(false);
        }
      }

    useEffect(() => {fetchPortfolio()}, [title]);

    const refreshSubmit = () => {
        fetchPortfolio()
    }

    if(loading) {
        return <div>Portfolio is loading</div>
    }
    
      if (!portfolio) {
        return <div>Portfolio is null</div>;
    }



  const renderImage = typeof portfolio.image === "string" && portfolio.image !== "";

  if (portfolio.comments) {
    portfolio.comments.sort((a, b) => {
      //not sure why this is needed as all of my times are Dates
      //but otherwise I get an error
      const aTime = new Date(a.time);
      const bTime = new Date(b.time);

      return bTime.getTime() - aTime.getTime();
    });
  }


  return (
        <div className="project">
            <Link href={portfolio.slug}>
                { renderImage && (
                    <Image src = {portfolio.image} alt = {portfolio.imageAlt} width={700} height={394} ></Image>
                    )
                }
            </Link>
            
            <div className="project-details">
                <p className="project name">
                   <strong>{portfolio.title}</strong>
                </p>

                <p className="project-description">
                    {portfolio.description}
                </p>
            </div>

            <PortfolioCommentForm title = {portfolio.title} onSubmit = {refreshSubmit}/>

            <h3>Comments</h3>

            <div className="comments">
            {portfolio.comments && portfolio.comments.length > 0 ? (
                portfolio.comments.map((comment: IComment, index: number) => (
                    <Comment key={index} comment={comment} />
                ))
            ):(
                <div>
                    <p> No Comments Yet! </p>
                </div>
            )}
            
            </div>
        </div>
    );
}