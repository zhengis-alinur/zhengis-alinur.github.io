import React, {useContext} from 'react';
import '../styles/BottomBar.scss';
import BottomBarItem from '../components/BottomBarItem';
import { Link } from 'react-router-dom';
import PageContext from '../contexts/PageContext';

const BottomBar = (props => {
    const navStyle = {textDecoration: "none"};
    const {page, setPage} = useContext(PageContext);
    const items = {
        characters: "Персонажи",
        locations: "Локации",
        episodes: "Эпизоды",
        settings: "Настройки",
    };

    return <div className={"bottombar"}>
        {
            Object.keys(items).map((val) => {
                return <Link to={`/${val}`} style={navStyle} key={val}>
                    <BottomBarItem name={items[val]} page={val} isCurrent={val === page}/>
                </Link>
            })
        }
    </div>
});
export default BottomBar;
