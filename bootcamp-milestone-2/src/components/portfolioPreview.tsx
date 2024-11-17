import React from 'react';
import Portfolio from "@/database/portfolioSchema";
import Image from 'next/image';
import Link from "next/link";

export default function PortfoiloPreview(props: Portfolio) {

  const renderImage = typeof props.image === "string" && props.image !== "";


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
        </div>
    );
}