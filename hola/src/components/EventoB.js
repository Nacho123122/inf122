import React from "react";


function EventoB(props){
    return (
        <div className="card-container">
            <img className="card-image" src={require(`../images/${props.image}.jpg`)} alt="Foto del evento" />
            <div className="card-content">
                <h2 className="card-title">{props.title}</h2>
                <p className="card-date">{props.dateLiteral}</p>
                <p className="card-place">{props.placeLiteral}</p>
                <p className="card-description">{props.description}</p>
                <p className="holi">{props.holi}</p>
            </div>

        </div>
    );
}

export default EventoB;