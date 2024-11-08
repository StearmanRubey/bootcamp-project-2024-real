import React from "react";


export default function Resume() {

    return (
        <main>
            <h1 className="page-title">My Resume!</h1>

            <a href="MyResumePDF.pdf" download>Download Resume</a>

            <div className="resume">
                <section className="section">
                    <h2 className="section title">Education</h2>
                    
                    <div className="entry">
                        <h3 className = "entry-title">
                            Bachelor of Science in Computer Science
                        </h3>

                        <p className = "entry-info">
                            California Polytechnic State University, San Luis Obispo | Expected Graduation May 2028
                        </p>
                    </div>
                </section>

                <section className="section">
                    <h2 className="section title">Coursework</h2>

                    <ul className="course-list">
                        <li>Hack4Impact HTML, CSS, & Git Starter Pack</li>
                        <li>AP Computer Science A</li>
                        <li>Data Structures (In Progress)</li>
                    </ul>
                </section>

                <section className="section">
                    <h2 className="section title">Skills</h2>
                        
                    <ul className="skill-list">
                        <li>Semantic HTML5</li>
                        <li>CSS</li>
                        <li>Git Version Control</li>
                        <li>Java</li>
                        <li>Python</li>
                        <li>SQL</li>
                    </ul>
                </section>

                <section className="section">
                    <h2 className="section title">Projects</h2>
                        <div className="entry">
                            <h3 className = "entry-title">
                                Personal Website
                            </h3>

                            <p className = "entry-info">
                                Designed and built a personal website using HTML and CSS
                            </p>

                            <p className = "entry-description">
                                -Implemented multiple pages using HTML and CSS
                            </p>
                        </div>
                </section>

                <section className ="section">
                    <h2 className ="section title">Experience</h2>

                    <div className ="entry">
                        <h3 className = "entry-title">
                            Hack4Impact Software Developer
                        </h3>

                        <p className = "entry-info">
                                Hack4Impact | September 2024 - Present
                        </p>

                        <p className = "entry-description">
                            -Completed the Hack4Impact bootcamp
                        </p>
                    </div>
                </section>
            </div>
        </main>
    )
}