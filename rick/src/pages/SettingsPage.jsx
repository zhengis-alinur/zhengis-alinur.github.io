import React, { useState, useEffect,useContext } from 'react';
import { withRouter, useHistory } from 'react-router-dom';
import '../styles/SettingsPage.scss';
import DefaultBtn from '../components/DefaultBtn';
import { Link } from 'react-router-dom';
import { getProfile } from '../API/api';
import BottomBar from '../components/BottomBar';
import PageContext from '../contexts/PageContext';

function SettingsPage(props) {
    const {page, setPage} = useContext(PageContext);

    const [name, setName] = useState("");
    const [image, setImage] = useState(null);
    const history = useHistory();

    useEffect(() => {
        setPage("settings");
        getName();
    }, []);

    const getName = async () => {
        getProfile(props.appStore.userName).then(async (request) => {
            const response = await request.json();
            setName(response.data.fullName);
            if (response.data.avatar !== null) {
                setImage(response.data.avatar);
            }
        });
    }

    const redirect = () => {
        history.push("/editProfile");
    }

    return (
        <div className={"settings-page"}>
            <div className="horizontal">
                <Link to={"/characters"}>
                    <svg className={"back-arr"} width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 6H15" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M6 1L1 6" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M6 11L1 6" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </Link>
                <div className="page-title" >Настройки</div>
            </div>
            <div className="profile-info">
                <div className="profile-img" style={{backgroundImage: image === null ? 'url(https://internetuniversitet.ru/wp-content/uploads/2017/11/no-avatar.png)' : image}}></div>
                <div className="profile-about">
                    <p className="title">{name}</p>
                    <p className="grey-text">{props.appStore.userName}</p>
                </div>
            </div>
            <DefaultBtn text={"Редактировать "} onClick={redirect}/>
            <hr></hr>
            <div className="view-settings">
                <p className={"grey-text"}>Внешний вид</p>
                <div className="view-chooser">
                    <svg className={"pallete-icon"} width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.9984 9.5625C17.7704 9.5625 17.5859 9.747 17.5889 9.975C17.5889 10.203 17.7734 10.3875 18.0014 10.3875C18.2294 10.3875 18.4139 10.203 18.4139 9.975C18.4109 9.747 18.2279 9.5625 17.9984 9.5625" stroke="#0B1E2D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M10.386 17.9985C10.386 17.7705 10.2015 17.586 9.975 17.589C9.747 17.589 9.5625 17.7735 9.5625 18.0015C9.5625 18.2295 9.747 18.414 9.975 18.414C10.203 18.414 10.386 18.228 10.386 17.9985" stroke="#0B1E2D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M23.9655 12.033C23.805 11.8725 23.544 11.8725 23.385 12.0345C23.2245 12.195 23.2245 12.456 23.385 12.6165C23.5455 12.777 23.8065 12.777 23.967 12.6165C24.1275 12.4545 24.1275 12.195 23.9655 12.033Z" stroke="#0B1E2D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12.6149 23.3835C12.4544 23.223 12.1934 23.223 12.0344 23.385C11.8739 23.5455 11.8739 23.8065 12.0344 23.967C12.1949 24.1275 12.4559 24.1275 12.6164 23.967C12.7769 23.8065 12.7769 23.5455 12.6149 23.3835Z" stroke="#0B1E2D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12.617 12.6151C12.7775 12.4546 12.7775 12.1936 12.6155 12.0346C12.455 11.8741 12.194 11.8741 12.0335 12.0346C11.873 12.1951 11.873 12.4561 12.0335 12.6166C12.194 12.7771 12.455 12.7771 12.617 12.6151Z" stroke="#0B1E2D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M18.0003 31.5001C10.4178 31.5001 4.2948 25.2481 4.5063 17.6176C4.7013 10.5736 10.5738 4.70105 17.6178 4.50605C25.2483 4.29455 31.5003 10.4176 31.5003 18.0001V19.5001C31.5003 21.1576 30.1578 22.5001 28.5003 22.5001H25.4058C23.4123 22.5001 21.9738 24.4081 22.5213 26.3236L22.9068 27.6751C23.4558 29.5921 22.0158 31.5001 20.0238 31.5001H18.0003Z" stroke="#0B1E2D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <div className="vertical">
                        <p className={"small-title"}>Темная тема</p>
                        <p className="grey-text">Включена</p>
                    </div>
                    <svg className={"arr"} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 16L14 12L10 8" stroke="#0B1E2D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
            </div>
            <hr></hr>
            <div className="about-app">
                <p className={"grey-text"}>О приложении</p>
                <p>Зигерионцы помещают Джерри и Рика в симуляцию, чтобы узнать секрет изготовления концентрированной темной материи.</p>
            </div>
            <hr></hr>
            <div className="app-version-info">
                <p className={"grey-text"}>Версия приложения</p>
                <p>Rick & Morty  v1.0.0</p>
            </div>
            <BottomBar/>
        </div>
    )
};
export default SettingsPage;
