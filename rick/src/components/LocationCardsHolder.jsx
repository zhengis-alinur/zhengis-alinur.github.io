import React from 'react';
import '../styles/SearchBar.scss';
import LocationCard from './LocationCard';
import { Link } from 'react-router-dom';

export default function LocationCardsHolder(props) {
    return <div className={"cards-holder"}>
        {props.data.map(val => {
            return <Link to={`/locations/${val.id}`} className={"link"} key={val.id}>
                <LocationCard img={val.imageName} name={val.name} caption={`${val.type}${val.measurements !== "" ? ` • ${val.measurements}`: ""}`} key={val.id}/>
            </Link>
        })}
    </div>
}
