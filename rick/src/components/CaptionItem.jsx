import React, { useState } from 'react';
import '../styles/CharacterPage.scss';

export default function CaptionItem(props) {
    return <div className={"character-caption-item"} style={{minWidth:props.minWidth}}>
        <p className="grey-text">{ props.title }</p>
        <p>{ props.text }</p>
    </div>
}
