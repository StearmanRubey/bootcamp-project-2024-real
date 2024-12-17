import React from 'react';
import Comment from "@/components/comment";
import Portfolio, {IComment} from "@/database/portfolioSchema";
import Image from 'next/image';
import Link from "next/link";

export const dynamic = 'force-dynamic'

export default function PortfoiloPreview(props: Portfolio) {

  const renderImage = typeof props.image === "string" && props.image !== "";
  if (props.comments){
    props.comments.sort((a, b) => b.time.getTime() - a.time.getTime())
  }

  return (
        <div className="project">
            <Link href={props.slug}>
                { renderImage && (
                    <Image src = {props.image} alt = {props.imageAlt} width={700} height={394} ></Image>
                    )
                }
            </Link>
            
            <div className="project-details">
                <p className="project name">
                   <strong>{props.title}</strong>
                </p>

                <p className="project-description">
                    {props.description}
                </p>
            </div>

            <h3>Comments</h3>

            <div className="comments">
            {props.comments && props.comments.length > 0 ? (
                props.comments.map((comment: IComment, index: number) => (
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