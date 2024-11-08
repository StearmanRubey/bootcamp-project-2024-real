import React from "react";


export default function Contact() {
    
    return (
        <main>
            <h1 className="page-title">Contact Me!</h1>

            <form id="contact-form">
                Name: <input type="text" id="name" required></input>
                Email: <input type="email" id="email" required></input>
                Message: <textarea required></textarea>
                <input type="submit" required></input>
            </form>
        </main>

    )
}