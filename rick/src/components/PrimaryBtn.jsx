import React from 'react';
import '../styles/PrimaryBtn.scss';
function PrimaryBtn(props) {
    return (
        <button className={"primary-btn"} onClick={props.onClick} style={{width: props.width ? props.width : "320px"}}>{props.text}</button>
    );
}

export default PrimaryBtn;
