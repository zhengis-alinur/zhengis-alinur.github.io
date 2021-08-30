import React, { useState } from 'react';
import '../styles/CharacterCardsHolder.scss';

export default function CharacterCard(props) {
    const [alive, setAlive] = useState(props.status);
    return <div className={"character-card-wrapper"}>
        <div className={"character-image"} style={{backgroundImage: `url(${props.img})`}}></div>
        <div className="character-caption">
            <p className={alive === true ? 'green-text' : 'red-text'}>{alive === true ? 'Живой' : 'Мертвый'}</p>
            <p className="title">{props.name}</p>
            <p className="grey-text">{props.caption}</p>
        </div>
    </div>
}
