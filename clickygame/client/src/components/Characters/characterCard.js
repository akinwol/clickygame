import React from "react";
import "./characterCardcs.css";

const CharacterCard = props => (

    <div className="col-sm-3">
        <div className="card">
            <div className="img-container">
            {/* on click passing in a props click item which takes in the id of the item */}
                <img alt={props.name} src={props.image} data-id={props.id} 
                onClick={() => {props.clickItem(props.id)}}/>

            </div>

        </div>
    </div>
)
export default CharacterCard; 