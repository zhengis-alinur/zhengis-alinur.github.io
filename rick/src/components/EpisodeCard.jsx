import React, { useState } from 'react';
import '../styles/EpisodeCardsHolder.scss';

export default function EpisodeCard(props) {
    return <div className={"episode-card-wrapper"}>
        <div className="episode-img" style={{backgroundImage: `url(${props.img})`}}></div>
        <div className="episode-caption">
            <p className="blue-text">{`серия ${props.number}`}</p>
            <p className="title">{ props.name }</p>
            <p className="grey-text">{ props.date }</p>
        </div>
        <svg className={"arr"} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 16L14 12L10 8" stroke="#0B1E2D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    </div>
}
