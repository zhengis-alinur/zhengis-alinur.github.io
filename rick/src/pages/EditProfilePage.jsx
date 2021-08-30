import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import '../styles/EditProfilePage.scss';
import DefaultBtn from '../components/DefaultBtn';
import { Link, useHistory } from 'react-router-dom';
import { getProfile } from "../API/api";

function EditProfilePage(props) {
    const [name, setName] = useState("");
    const [image, setImage] = useState(null);
    const history = useHistory();

    useEffect(() => {
        getProfileInfo();
    }, []);
    const getProfileInfo = async () => {
        getProfile(props.appStore.userName).then(async (request) => {
            const response = await request.json()
            setName(response.data.fullName);
            props.appStore.setId = response.data.id;
            if (response.data.avatar !== null) {
                setImage(response.data.avatar);
            }
        });
    }

    return (
        <div className={"edit-profile-page"}>
            <div className="horizontal">
                <Link to={"/settings"}>
                    <svg className={"back-arr"} width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 6H15" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M6 1L1 6" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M6 11L1 6" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </Link>
                <div className="page-title" >Редактировать профиль</div>
            </div>
            <div className="profile-info">
                <div className="profile-img" style={{backgroundImage: image === null ? 'url(https://internetuniversitet.ru/wp-content/uploads/2017/11/no-avatar.png)' : image}}></div>
                <label className={"input-label"} htmlFor={"avatar"}>Изменить фото</label>
                <input type={"file"} id={"avatar"} name={"avatar"} accept={"image/png, image/jpeg"}></input>
            </div>
            <div className="profile-items">
                <p className={"grey-text"}>Профиль</p>
                <Link to={"/editName"} className={"link"}>
                    <div className="view-chooser">
                        <div className="vertical">
                            <p className={"small-title"}>Изменить ФИО</p>
                            <p className="grey-text">{name}</p>
                        </div>
                        <svg className={"arr"} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 16L14 12L10 8" stroke="#0B1E2D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                </Link>
                <div className="view-chooser">
                    <div className="vertical">
                        <p className={"small-title"}>Логин</p>
                        <p className="grey-text">{props.appStore.userName}</p>
                    </div>
                    <svg className={"arr"} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 16L14 12L10 8" stroke="#0B1E2D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
            </div>
        </div>
    )
};
export default EditProfilePage;
