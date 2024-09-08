import React from "react"

export default function About(){
  return (
    <>
      <div className="mainabout">
        <div className="about">
            <img src="./src/assets/images/img8.jpg" className="aboutimg"/>
            <p>
            S Events hosted an unforgettable pool party at GMC Place in Kitengela, and it was nothing short of spectacular!
            </p>
            <button className="readmore"><a>Read More...</a></button>
        </div>
        <div className="about">
            <img src="./src/assets/images/img2.jpg" className="aboutimg"/>
            <p>
            S Events hosted an electrifying concert at the Kenyatta International Convention Centre (KICC) in Nairobi, and it was an absolute triumph! 
            </p>
            <button className="readmore"><a>Read More...</a></button>
        </div>
        <div className="about">
            <img src="./src/assets/images/img3.jpg" className="aboutimg"/>
            <p>
            S Events proudly hosted an unforgettable album launch that resonated with music lovers and fans alike! The atmosphere was electric as attendees gathered at the vibrant venue, eagerly awaiting the unveiling of the highly anticipated album.
            </p>
            <button className="readmore"><a>Read More...</a></button>
        </div>
      </div>
    </>
  )
}