import React from "react"
import Carditem from "./Carditem"
import  "./Card.css"
const Cards=()=>{
    return (
        <>
        <div className="cards">
            <h1>WELCOME tO tHE TravelVerse</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                    <Carditem 
                    imgsrc="images/img-9.jpg" 
                    text="Ascent Through The Alp" 
                    path="/services" 
                    label="Adventure" />
                    <Carditem 
                    imgsrc="images/img-2.jpg" 
                    text="Ascent Through The Alp" 
                    path="/services" 
                    label="Adventure" />
                    </ul>
                    <ul className="cards__items">
                    <Carditem 
                    imgsrc="images/img-3.jpg" 
                    text="Ascent Through The Alp" 
                    path="/services" 
                    label="Adventure" />
                    <Carditem 
                    imgsrc="images/img-2.jpg" 
                    text="Ascent Through The Alp" 
                    path="/services" 
                    label="Adventure" />
                    <Carditem 
                    imgsrc="images/img-1.jpg" 
                    text="Ascent Through The Alp" 
                    path="/services" 
                    label="Adventure" />
                    </ul>
                    
                    
                </div>


            </div>
        </div>
        
        </>
    )
}
export default Cards