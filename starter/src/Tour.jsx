import { useState } from "react";

function Tour({id,name,image,info,price, removeButton}){
    const [readMore, setReadMore] = useState(false);
    
    const readMoreButton = () =>{
        setReadMore(!readMore);
    }
   

    return(
        <div>
            <h1>{name}</h1>
            <img style={{width: "150px", height: "150px"}} src={image} alt={name}></img>
            <p>{readMore ? info : `${info.substring(0,100)} ... read more`} <button onClick={readMoreButton}>{readMore ? "Show less" : "Read More"}</button></p>
            <p>${price}</p>
            <button onClick={() => removeButton(id)}>Remove Tour</button>
        </div>
    )
}

export default Tour;