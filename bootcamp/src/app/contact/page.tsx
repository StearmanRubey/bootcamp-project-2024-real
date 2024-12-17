"use client"
import React, { useState } from "react";
import emailjs from "@emailjs/browser"
import style from "@/components/userField.module.css"

export default function Contact() {

    const [ formData, setFormData ] = useState ({
        name: "",
        email: "",
        message: ""
    })
    const [status, setStatus] = useState("")

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value} = e.target;
        setFormData((prev) => ({...prev, [id]: value}))
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("Sending...")

        const serviceID = "service_jjdg7m9"
        const templateID = "template_a5mqlfo"
        const publicKey = "0GTT4zzDtzdK4dWcV"


        try {
            const result = await emailjs.send(
                serviceID,
                templateID,
                formData,
                publicKey
            );
            console.log("Email sent!", result.text);
            setStatus("Message sent!");
            setFormData({name: "", email: "", message: ""});

        } catch (error) {
            console.error("Error sending:", error);
            setStatus("Failed Sending")
        }
    };
    
    return (
        <main className = {style.form}>
            <h1 className="page-title">Contact Me!</h1>

            <form id="contact-form" onSubmit = {handleSubmit}>
                <label htmlFor = "name">Name:</label>
                <input type = "text" id = "name" value = {formData.name} onChange = {handleInputChange} required />


                <label htmlFor = "email">Email:</label>
                <input type = "email" id = "email" value = {formData.email} onChange = {handleInputChange} required />


                <label htmlFor = "message">Message:</label>
                <textarea id = "message" value = {formData.message} onChange = {handleInputChange} required />


                <div className = {style.buttonField}>
                    <button type = "submit"> Submit </button>
                </div>
            </form>

            {status && <p className = {style.status}>{status}</p>}
        </main>
    );
}