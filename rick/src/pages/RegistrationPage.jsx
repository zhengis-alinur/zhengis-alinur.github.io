import React, { useRef, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import InputText from "../components/InputText";
import PrimaryBtn from "../components/PrimaryBtn";
import Message from "../components/Message";
import { createProfile } from "../API/api";
import '../styles/RegistrationPage.scss';

function RegistrationPage(props) {
    const [formIsValid, setFormIsValid] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [patronymic, setPatronymic] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [userNameError, setUserNameError] = useState('');
    const [firstNameError, setFirstNameError] = useState('');
    const [lastNameError, setLastNameError] = useState('');
    const [patronymicError, setPatronymicError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [responseText, setResponseText] = useState('');
    const [message, setMessage] = useState(false);
    const history = useHistory();

    const create = async () => {
        if (formIsValid === true) {
            const data = {firstName, lastName, patronymic, userName, password}
            createProfile(data).then(async (request) => {
                if (request.status === 200) {
                    setResponseText((await request.json()).message);
                    showMessage();
                }
            });
        }
    }

    const showMessage = (value) => {
        setMessage(true);
    }

    const redirect = () => {
        localStorage.clear();
        history.push("/");
        window.location.reload();
    }

    const firstNameChangeHandler = (event) => {setFirstName(event.target.value);}
    const lastNameChangeHandler = (event) => {setLastName(event.target.value);}
    const patronymicChangeHandler = (event) => {setPatronymic(event.target.value);}
    const userNameChangeHandler = (event) => {setUserName(event.target.value);}
    const passwordChangeHandler = (event) => {setPassword(event.target.value);}

    useEffect(() => {
        validate();
    }, [firstName, lastName, patronymic, userName, password]);

    const validate = () => {
        firstNameValidation();
        lastNameValidation();
        patronymicValidation();
        userNameValidation();
        passwordValidation();
        setFormIsValid(firstNameValidation()&&lastNameValidation()&&userNameValidation()&&passwordValidation());
    }
    const firstNameValidation = () => {
        let isValid = true;
        if(!firstName){
            isValid = false;
            setFirstNameError("Имя не может быть пустым");
        }
        if(typeof firstName !== "undefined" && !firstName === false){
            if(!firstName.match(/^[a-zA-Zа-яА-Я]+$/)){
                isValid = false;
                setFirstNameError("Only letters");
            } else {
                setFirstNameError("");
            }
        }
        return isValid;
    }
    const lastNameValidation = () => {
        let isValid = true;
        if(!lastName){
            isValid = false;
            setLastNameError("Фамилия не может быть пустым");
        }
        if(typeof lastName !== "undefined" && !lastName === false){
            if(!lastName.match(/^[a-zA-Zа-яА-Я]+$/)){
                isValid = false;
                setLastNameError("Only letters");
            } else {
                setLastNameError("");
            }
        }
        return isValid;
    };
    const patronymicValidation = () => {
        let isValid = true;
        if(typeof patronymic !== "undefined" && !patronymic === false){
            if(!patronymic.match(/^[a-zA-Zа-яА-Я]+$/)){
                isValid = false;
                setPatronymicError("Only letters");
            } else {
                setPatronymicError("");
            }
        }
        return isValid;
    };
    const userNameValidation = () => {
        let isValid = true;
        if(!userName){
            isValid = false;
            setUserNameError("Email не может быть пустым");
        }
        if(typeof userName !== "undefined" && !userName === false){
            let lastAtPos = userName.lastIndexOf('@');
            let lastDotPos = userName.lastIndexOf('.');

            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && userName.indexOf('@@') === -1 && lastDotPos > 2 && (userName.length - lastDotPos) > 2)) {
                isValid = false;
                setUserNameError("Email is not valid");
            } else {
                setUserNameError("");
            }
        }
        return isValid;
    };
    const passwordValidation = () => {
        let isValid = true;
        if(!password){
            isValid = false;
            setPasswordError("Пароль не может быть пустым");
        }
        if(typeof password !== "undefined" && !password === false){
            if(!password.match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/)){
                isValid = false;
                setPasswordError("Пароль должен содержать минимум 8 символов, цифры, буквы и спецсимволы($@$!%*#?&)");
            } else {
                setPasswordError("");
            }
        }
        return isValid;
    };

    return (
        <div className={"registration-page"}>
            {message === true ? <Message text={responseText} onClick={redirect}/> : true}
            <Link to={"/"}>
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.5 18H28.5" stroke="#0A1B28" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15 10.5L7.5 18" stroke="#0A1B28" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15 25.5L7.5 18" stroke="#0A1B28" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </Link>
            <p className="big-title">Создать аккаунт</p>
            <div className="user-info-form">
                <label htmlFor={"name"}>Имя</label>
                <InputText type={"text"} id={"name"} placeHolder={"Имя"} onChange={firstNameChangeHandler} msg={firstNameError}/>
                <label htmlFor={"surname"}>Фамилия</label>
                <InputText type={"text"} id={"surname"} placeHolder={"Фамилия"} onChange={lastNameChangeHandler} msg={lastNameError}/>
                <label htmlFor={"patronymic"}>Отчество</label>
                <InputText type={"text"} id={"patronymic"} placeHolder={"Отчество"} onChange={patronymicChangeHandler} msg={patronymicError}/>
            </div>
            <hr></hr>
            <div className="login-form">
                <label htmlFor={"login"}>Логин</label>
                <InputText type={"email"} id={"login"} placeHolder={"Логин"} onChange={userNameChangeHandler} msg={userNameError}/>
                <label htmlFor={"password"}>Пароль</label>
                <InputText type={"password"} id={"password"} placeHolder={"Пароль"} onChange={passwordChangeHandler} msg={passwordError}/>
            </div>
            <PrimaryBtn text={"Создать"} onClick={create}/>
        </div>
    );
}

export default RegistrationPage;
