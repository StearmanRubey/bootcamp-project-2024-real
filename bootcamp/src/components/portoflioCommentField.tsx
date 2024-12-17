import React, {useState} from "react";
import style from "@/components/userField.module.css"


type CommentFormData = {
    user: string;
    comment: string;
  }

export default function PortfolioCommentForm({title, onSubmit}: {title: string, onSubmit: () => void}) {
  
    const [formData, setFormData] = useState<CommentFormData>({
      user: "",
      comment: "",
    })
  
    const [status, setStatus] = useState("");
  
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const {id, value } = e.target
      setFormData((prev) => ({...prev, [id]: value}))
    }
  
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
  
      try {
        const response = await fetch(`/api/portfolio/${title}`, {
          method: "POST",
          headers: { "Content-Type": "application/json"},
          body: JSON.stringify(formData),
        })
  
        if (!response.ok){
          throw new Error("Comment failed.")
        }
  
        onSubmit();
  
        setStatus ("Comment submitted!")
        setFormData({user: "", comment: ""})
      } catch (err) {
        console.error("Error:", err)
        setStatus("Comment failed.")
      }
    }
  
  
  
    return (
      <div className = {style.form}>
        <h3> Comment Here!</h3>
        <form onSubmit = {handleSubmit}>
          <label htmlFor = "user"> Name: </label>
          <input type = "text" id = "user" value = {formData.user} onChange = {handleInputChange} required/>
  
          <label  htmlFor = "comment"> Comment: </label>
          <textarea id = "comment" value = {formData.comment} onChange = {handleInputChange} required/>
          
          <div className = {style.buttonField}>
            <button type = "submit"> Submit </button>
          </div>
  
        </form>
        {status && <p className = {style.status}>{status}</p>}
      </div>
    )
  }