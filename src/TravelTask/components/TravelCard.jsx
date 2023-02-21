import React from "react"


const TravelCard = (props) => {

    return(
        <div className="container">
            <div className="img-container">
                { <img src={props.imageUrl} alt={props.title} />}
            </div>

            <div className="info-container">
                <p>{props.location}</p>
                <p>{props.googleMapsUrl}</p>
                <h1>{props.title}</h1>
                <p>{props.startDate}</p>
                <p>{props.endDate}</p>
                <p>{props.description}</p>
            </div>
        </div>
    )

};

export default TravelCard;