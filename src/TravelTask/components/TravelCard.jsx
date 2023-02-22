import React from "react"


const TravelCard = (props) => {

    return(
        <div className="container">
            <div className="img-container">
                { <img src={props.imageUrl} alt={props.title} className="img-el"/>}
            </div>

            <div className="info-container">
                <p className="location-el">{props.location}</p>
                <a className="google-el" href={props.googleMapsUrl}>view on Google</a>
                <h1 className="title-el">{props.title}</h1>
                <p className="start-el">{props.startDate}</p>
                <p className="end-el">{props.endDate}</p>
                <p className="desc-el">{props.description}</p>
            </div>
        </div>
    )

};

export default TravelCard;