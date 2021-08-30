import React from 'react';
import '../styles/Message.scss';
import PrimaryBtn from '../components/PrimaryBtn';
function Message(props) {
    return (
        <div className={"message-wrapper"}>
            <div className="message">
                { props.type !== 'error' ? true :<p className={"title"}>Ошибка</p> }
                <p className={"message-text"}>{props.text}</p>
                <PrimaryBtn onClick={props.onClick} text={"Ok"} width={"100%"}/>
            </div>
        </div>
    );
}

export default Message;
