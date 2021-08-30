import React, { useState, useEffect } from 'react';
import '../styles/CharacterPage.scss';
import CaptionItem from '../components/CaptionItem';
import EpisodeCardsHolder from '../components/EpisodeCardsHolder';
import { Link, withRouter } from 'react-router-dom';

function CharacterPage(props) {
    const [character, setCharacter] = useState({});
    const [alive, setAlive] = useState(props.status);
    const [episodes, setEpisodes] = useState([]);
    const [totalRecords, setTotalRecords] = useState(0);
    const id = props.match.params.id;

    useEffect(()=>{
        fetchCharacter(id);
    },[]);

    const fetchCharacter = async(id) => {
        const data = await fetch(`http://173.249.20.184:7001/api/Characters/GetByID?Id=${id}`);
        const ch = (await data.json()).data;
        setCharacter(ch);
        setEpisodes(ch.episodes);
    }
    return <div className={"character-page"}>
        <Link to={"/characters"}>
            <svg className={"back-arr"} width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 6H15" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6 1L1 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6 11L1 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </Link>
        <div className="bg-avatar" style={{backgroundImage: `url(${character.imageName})`}}>
            <div className="blur"></div>
            <div className={"character-avatar"} style={{backgroundImage: `url(${character.imageName})`}}></div>

        </div>
        <div className="character-title">
            <div className="title">{character.fullName}</div>
            {
                character.status === 0 ? <p className="green-text">Живой</p> : <p className="red-text">Мертвый</p>
            }
        </div>
        <div className="caption">
            <div className="about">
                <p>
                    {character.about}
                </p>
            </div>
            <div className="horizontal">
                <CaptionItem title={"Пол"} text={character.gender === 1 ? "Женский" : "Мужской"} minWidth={163}/>
                <CaptionItem title={"Расса"} text={"Человек"} minWidth={163}/>
            </div>
            <CaptionItem title={"Место рождения"} text={character.placeOfBirth ? `${character.placeOfBirth.name}` : 'Неизвестно'} minWidth={343}/>
            <CaptionItem title={"Местоположение"} text={character.location ? character.location.name : 'Неизвестно'} minWidth={343}/>
        </div>
        <div className="episodes">
            <div className="section-title">
                <p className="section-title">Эпизоды</p>
                <p className="grey-text">Все эпизоды</p>
            </div>
            <EpisodeCardsHolder data={episodes}/>
        </div>
    </div>
}
export default withRouter(CharacterPage);
