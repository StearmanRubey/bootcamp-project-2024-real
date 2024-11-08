import React from "react";


export default function Portfolio() {

    return (
        <main>
            <h1 className="page-title">My Portfolio!</h1>
            <div className="project">
                <a href="index.html">
                    <img src = "Chrome_Image.png" width="700" height="394" alt="Website Image"></img>
                </a>
                
                <div className="project-details">
                    <p className="project name">
                        <strong>Stearman's Cool Website!</strong>
                    </p>

                    <p className="project-description">
                        A website I made for the <em>Hack4Impact</em> starter pack!
                    </p>

                    <p>
                        <a href="/">Learn More</a>
                    </p>
                </div>

            </div> 
        </main>
    )}