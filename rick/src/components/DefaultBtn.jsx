import React from 'react';
import '../styles/DefaultBtn.scss';
function DefaultBtn(props) {
    return (
        <button className={"default-btn"} onClick={props.onClick} style={{width: props.width ? props.width : "320px"}}>{props.text}</button>
    );
}

export default DefaultBtn;
