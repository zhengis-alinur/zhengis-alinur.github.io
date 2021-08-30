import React, { useState, useEffect, useContext } from 'react';
import SearchBar from '../components/SearchBar';
import EpisodeCardsHolder from '../components/EpisodeCardsHolder';
import BottomBar from '../components/BottomBar';
import '../styles/EpisodesPage.scss';
import { withRouter } from 'react-router-dom';
import { fetchEpisodes } from '../API/api';
import PageContext from '../contexts/PageContext';

function EpisodesPage(props) {
    const {page, setPage} = useContext(PageContext);

    const seasons = ['1', '2', '3', '4', '5', '6', '7'];
    const [episodes, setEpisodes] = useState([]);
    const [totalRecords, setTotalRecords] = useState(0);

    useEffect(()=>{
        setPage("episodes");
        getEpisodes();
    }, []);

    const getEpisodes = async () => {
        fetchEpisodes(1, 11).then(async (request) => {
            const episodes = await request.json();
            setEpisodes(episodes.data)
            setTotalRecords(episodes.totalRecords);
        });
    }

    return (
        <>
            <div className={"page"}>
                <SearchBar placeholder={"Найти эпизод"} filter={false}/>
                <div className="slider">
                    {seasons.map((val) => {
                        return <p className={"grey-text uppercase active"} key={val}>сезон {val}</p>
                    })}
                </div>
                <EpisodeCardsHolder data={episodes}/>
            </div>
            <BottomBar/>
        </>
    )
}
export default withRouter(EpisodesPage);
