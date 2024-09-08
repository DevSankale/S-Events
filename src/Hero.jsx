import React from "react"

export default function Hero(){
  return (
    <div className="hero">
      <div className="nav">
          <p><img src="./src/assets/images/logo1.png" className="logoimage" width="100px" height="auto"/></p>
          <ul className="unlist">
            <li className="list"><a 
            href="#Home"className="navlist">Home</a></li>
            <li className="list"><a
            href="#About"className="navlist">About</a></li>
            <li className="list"><a
            href="#Services"className="navlist">Services</a></li>
            <li className="list"><a
            href="#Contacts"className="navlist">Contacts</a></li>
          </ul>
      </div>
      <div className="heroinfo" id="Home">
            <h1 className="heroheading">S EVENTS.</h1>
            <p className="herodetails">At S Events, we believe that every occasion deserves to be extraordinary. As a premier event planning company, we specialize in transforming your visions into unforgettable experiences. Whether it’s a wedding, corporate gathering, or a milestone celebration, our dedicated team is committed to meticulous planning and flawless execution.Our approach is rooted in understanding your unique needs and desires. We pride ourselves on our ability to listen and collaborate closely with our clients, ensuring that every detail reflects your personality and style. From elegant décor to seamless logistics, we handle every aspect of your event with precision and care. Our goal is to create a stress-free environment where you can be a guest at your own celebration.</p> 
            <a href="#Contacts" className="buttonLink">Hire Us...</a>
      </div>
    </div>
  )
}