import React, { useState, useEffect, useMemo, useCallback, useContext } from 'react';
import SearchBar from '../components/SearchBar';
import CharacterCardsHolder from '../components/CharacterCardsHolder';
import BottomBar from '../components/BottomBar';
import CharacterFilter from '../components/CharacterFilter';
import { withRouter } from 'react-router-dom';
import FilterContext from '../contexts/FilterContext';
import { fetchCharacters } from '../API/api';
import PageContext from '../contexts/PageContext';

function CharactersPage(props) {
    const {page, setPage} = useContext(PageContext);

    const [characters, setCharacters] = useState([]);
    const [totalRecords, setTotalRecords] = useState(0);

    const [orderASC, setOrder] = useState(true);
    const [gender, setGender] = useState(-1);
    const [alive, setAlive] = useState(-1);

    const [view, setView] = useState('map');
    const [filterVisible, setFilterVisible] = useState(false);

    useEffect(() => {setPage('characters')}, []);

    useEffect(async () => {
        getCharacters();
    }, [gender, alive]);

    const getCharacters = async () => {
        fetchCharacters(1, 43).then(async (request) => {
            const characters = await request.json();
            let filtredCharacters = gender === -1 ? characters.data : characters.data.filter((val) => val.gender === gender);
            filtredCharacters = alive === -1 ? filtredCharacters : filtredCharacters.filter((val) => val.status === alive);
            setCharacters(filtredCharacters);
            setTotalRecords(filtredCharacters.length);
        });
    }

    const toggleView = () => {
        view === 'map' ? setView('list') : setView('map');
    }

    const toggleFilter = () => {
        if (filterVisible === true) {
            setFilterVisible(false);
            document.querySelector("body").style.overflow = "visible";
        } else {
            setFilterVisible(true);
            document.querySelector("body").style.overflow = "hidden";
        }
    }

    return (
    <>
        <FilterContext.Provider value={{gender, setGender, alive, setAlive}}>
            <CharacterFilter onBackArrClick={toggleFilter} visible={filterVisible}/>
        </FilterContext.Provider>
        <div className={"page"}>
            <SearchBar placeholder={"Найти персонажа"} filter={true} onFilterClick={toggleFilter}/>
            <div className="caption">
                <p className={"grey-caption"}>{`Всего персонажей: ${totalRecords}`}</p>
                <div className="view-toggle-btn" onClick={toggleView}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.5 6H20.5" stroke="#5B6975" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M4 6H5" stroke="#5B6975" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M4 12H5" stroke="#5B6975" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M4 18H5" stroke="#5B6975" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M8.5 12H20.5" stroke="#5B6975" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M8.5 18H20.5" stroke="#5B6975" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
            </div>
            <CharacterCardsHolder view={view} data={characters}/>
        </div>
        <BottomBar/>
    </>)
}

export default withRouter(CharactersPage);
