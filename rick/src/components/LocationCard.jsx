import React, { useState } from 'react';
import '../styles/LocationCardsHolder.scss';

export default function LocationCard(props) {
    const [alive, setAlive] = useState(props.status);
    return <div className={"location-card-wrapper"}>
        <div className={"location-image"} style={{backgroundImage: `url(${props.img})`}}></div>
        <div className="location-caption">
            <p className="title">{props.name}</p>
            <p className="grey-text">{props.caption}</p>
        </div>
    </div>
}
