import React ,{useState}from "react"

export default function Footer(){

   const [formData,setFormData]=useState({
    firstName:"",
    lastName:"",
    email:"",
    message:""
   })
        function hanldeChange(event){
          setFormData((formData)=>{
            return({
              ...formData,
              [event.target.name]:event.target.value
            })
          })
        }
        console.log(formData)
  return (
    <div className="foot" id="Contacts">
    <div className="footer">
      <form className="form" action="https://formsubmit.co/djsankee@gmail.com" method="POST">
        <label className="label">FirstName</label>
        <input type="text" 
                onChange={hanldeChange}
                name="firstName"
                value={formData.firstName}
                required 
               />
        <label className="label">LastName</label>
        <input type="text" 
                onChange={hanldeChange}
                name="lastName"
                value={formData.lastName}
               />
        <label className="label">Email</label>
        <input type="email" 
               onChange={hanldeChange}
               name="email"
               value={formData.email}
               />
        <textarea className="label" 
                  placeholder="Message us..."
                  onChange={hanldeChange}
                  name="message"
                  value={formData.message}
                 
        ></textarea>
        <input type="hidden" name="_next" value="https://devsankale.github.io/S-Events/" />
        <button className="submit">Submit</button>
      </form>
      <div className="socialLinks">
        <a href=""><img src="./images/black-instagram-icon.png" width="20px" height="auto" className="linkContainer"/>Instagram</a>
        <a href=""><img src="./images/twitter-square-icon.png" width="20px" height="auto" className="linkContainer"/>Twitter</a>
        <a href=""><img src="./images/facebook-app-round-icon.png" width="20px" height="auto" className="linkContainer"/>Facebook</a>
        <a href=""><img src="./images/youtube-icon.png" width="20px" height="auto" className="linkContainer"/>Youtube</a>
      </div>
    </div>
    <p className="signage"><img src="./images/logo1.png" className="logoimage" width="100px" height="auto"/></p>
    </div>
  )
}