import React, { useState } from 'react';
import '../styles/EnterPage.scss'
import InputText from "../components/InputText";
import PrimaryBtn from "../components/PrimaryBtn";
import { Link, useHistory } from 'react-router-dom';
import Message from "../components/Message";
import { login } from "../API/api";


function EnterPage(props) {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState(false);
    const [responseText, setResponseText] = useState('');
    const appStore = props.appStore;

    const history = useHistory();

    const showMessage = () => {
        setMessage(true);
    }
    const closeMessage = () => {
        setMessage(false);
    }
    const redirect = () => {
        history.push("/characters");
    }
    const loginHadle = async () => {
        const data = {userName, password}
        login(data).then(async (request) => {
            if (request.status !== 200) {
                setResponseText("Введены неверныe логин или пароль");
                showMessage();
            } else {
                const response = await request.json();
                const { token, refreshToken }= response.data;
                sessionStorage.setItem("isAuth", true);
                sessionStorage.setItem("userName", userName);
                sessionStorage.setItem("token", token);
                appStore.setToken(token);
                appStore.setAuth(true)
                appStore.setUserName(userName);
                redirect();
            }
        });

    }

    const userNameChangeHandler = (event) => {setUserName(event.target.value)}
    const passwordChangeHandler = (event) => {setPassword(event.target.value)}

    return (
        <div className={"enter-page"}>
            {message === true ? <Message text={responseText} onClick={closeMessage} type={"error"}/> : true}
            <img src="./assets/enter-page-img.svg" alt="rick and morty icon"></img>
            <div className="login-form">
                <label htmlFor={"login"}>Логин</label>
                <InputText type={"email"} id={"login"} placeHolder={"Логин"} onChange={userNameChangeHandler}/>
                <label htmlFor={"password"}>Пароль</label>
                <InputText type={"password"} id={"password"} placeHolder={"Пароль"} onChange={passwordChangeHandler}/>
                <PrimaryBtn text={"Войти"} onClick={loginHadle}/>
            </div>
            <div className="create-acc-caption">
                <p>У вас еще нет аккаунта?</p>
                <Link to={"/registration"} className={"green-link"}>Создать</Link>
            </div>
        </div>
    );
}

export default EnterPage;
