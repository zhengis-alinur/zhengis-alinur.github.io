import React from 'react';
import CharacterCard from './CharacterCard';
import { Link } from 'react-router-dom';

export default function CharacterCardsHolder(props) {
    return <div className={`cards-holder ${props.view}`}>
        {props.data.map((val) => {
            return <Link to={`/characters/${val.id}`} key={val.id} className={"link"}>
                <CharacterCard img={val.imageName} status={val.status === 0 ? true : false} name={val.fullName} caption={`${val.race}, ${val.gender === 0 ? 'мужской' : 'женский'}`}/>
            </Link>
        })}
    </div>
}
