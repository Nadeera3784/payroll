import React from 'react';
import classes from './card.module.css';

const Card = (props) => {
    const styling = [props.icon , classes.fontAw]
    return (
        <div className = {classes.Card} style={{backgroundColor:props.color}}>
            <div>
                <h2>{props.value}</h2>
                <h3>{props.text}</h3>
            </div>
            <div style={{bottom:'35px', position:'absolute' , right:'10%' }}> 
                <i className={styling.join(' ')} style={{opacity:'0.3', fontSize:'300%'}}/>
            </div>
            
        </div>
    )
}

export default Card;