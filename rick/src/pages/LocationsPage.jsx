import React, { useState, useEffect, useContext }from 'react';
import SearchBar from '../components/SearchBar';
import LocationCardsHolder from '../components/LocationCardsHolder'
import BottomBar from '../components/BottomBar';
import { withRouter } from 'react-router-dom';
import { fetchLocations } from '../API/api';
import PageContext from '../contexts/PageContext';

function LocationsPage(props) {
    const {page, setPage} = useContext(PageContext);

    useEffect(()=>{
        getLocations();
        setPage('locations');
    }, []);

    const [locations, setLocations] = useState([]);
    const [totalRecords, setTotalRecords] = useState(0);

    const getLocations = async () => {
        fetchLocations(1, 10).then(async (request) => {
            const locations = await request.json();
            setLocations(locations.data)
            setTotalRecords(locations.totalRecords);
        });
    }

    return (
        <>
            <div className={"page"}>
                <SearchBar placeholder={"Найти локацию"}/>
                <div className="caption">
                    <p className={"grey-caption"}>{`Всего локаций: ${totalRecords}`}</p>
                </div>
                <LocationCardsHolder data={locations}/>
            </div>
            <BottomBar/>
        </>
    )
}
export default withRouter(LocationsPage);
