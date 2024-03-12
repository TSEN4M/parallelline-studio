import PropTypes from 'prop-types'
import { useState } from 'react';



function Card (props){

    const[isClickedOnImage,setCardImageToZoomed] = useState(false);
    const handleClickImage = () => {
        setCardImageToZoomed(!isClickedOnImage);
    }

    
    return(
        <>
        <div className="card" >
            <img className={`card-image ${isClickedOnImage ?'card-image-zoomed' : 'card-image'}`} 
                        src={props.image} 
                        alt="image of a bike"
                        onClick={handleClickImage}>
            </img>
            <h2 className="card-tittle">{props.title}</h2>
            <p className="card-text">{props.cardText}</p>
            
        </div>
        </>

    );
}

Card.propTypes = {
    image : PropTypes.string,
    title : PropTypes.string,
    cardText : PropTypes.string
}
export default Card