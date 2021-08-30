import React from 'react';
import EpisodeCard from './EpisodeCard';
import { Link } from 'react-router-dom';
import { months } from '../utils';


export default function EpisodeCardsHolder(props) {
    return <div className={`cards-holder ${props.view}`}>
        {
            props.data.map((val) => {
                const date = new Date(val.premiere);
                return <Link to={`/episodes/${val.id}`} key={val.id} className={"link"}>
                    <EpisodeCard img={val.imageName} number={val.series} name={val.name} date={`${date.getDate()} ${months.[date.getMonth()]} ${date.getFullYear()}`} key={val.id}/>
                </Link>
            })
        }
    </div>
}
