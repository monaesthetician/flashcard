import React from 'react';
import './Card.css';

const Card = (props) =>(
    <div className="card-container">
      <div className="card">
          <div className="front">
             <div className="eng">{props.eng}</div> 
          </div>

          <div className="back">
              <div className="Thai">{props.thai}</div> 
              <div className="Example">{props.ex}</div> 
          </div>
      </div>   
    </div>
)

export default Card;