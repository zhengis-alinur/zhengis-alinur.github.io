import React, { useState, useEffect } from 'react';
import '../styles/LocationPage.scss'
import CaptionItem from '../components/CaptionItem';
import CharacterCardsHolder from '../components/CharacterCardsHolder';
import { months } from '../utils';
import { Link, withRouter } from 'react-router-dom';

function LocationPage(props) {

    const [location, setLocation] = useState({});
    const [characters, setCharacters] = useState([]);
    const id = props.match.params.id;

    useEffect(()=>{
        fetchLocation(id);
    },[]);

    const fetchLocation = async(id) => {
        const data = await fetch(`http://173.249.20.184:7001/api/Locations/GetByID?Id=${id}`);
        const location = (await data.json()).data;
        setLocation(location);
        setCharacters(location.characters);
    }

    return (
        <div className={"location-page"}>
            <Link to={"/locations"}>
                <svg className={"back-arr"} width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 6H15" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6 1L1 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6 11L1 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </Link>
            <div className="bg-avatar" style={{backgroundImage: `url(${location.imageName})`}}>
            </div>
            <div className="about-wrapper">
                <div className="about">
                    <p className="big-title">{location.name}</p>
                    <p className="blue-text">серия</p>
                    <div className="caption">
                        <p>{location.about}</p>
                    </div>
                    <p className="section-title">Персонажи</p>
                    <CharacterCardsHolder data={characters} view={'list'} />
                </div>
            </div>
        </div>
    )
}
export default withRouter(LocationPage);
