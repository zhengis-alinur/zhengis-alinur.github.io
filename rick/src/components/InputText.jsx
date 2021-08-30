import React from 'react';
import '../styles/InputText.scss';
function InputText(props) {
    return (
        <div className={"input-text"}>
            <div className="input-wrapper">
                {props.type === 'password' ? <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.84897 7.73501C7.99497 7.88101 7.99497 8.11901 7.84897 8.26501C7.70297 8.41101 7.46497 8.41101 7.31897 8.26501C7.17297 8.11901 7.17297 7.88101 7.31897 7.73501C7.46497 7.58801 7.70197 7.58801 7.84897 7.73501Z" stroke="#5B6975" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12.265 7.73501C12.411 7.88101 12.411 8.11901 12.265 8.26501C12.119 8.41101 11.881 8.41101 11.735 8.26501C11.589 8.11901 11.589 7.88101 11.735 7.73501C11.881 7.58801 12.119 7.58801 12.265 7.73501Z" stroke="#5B6975" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16.682 7.73501C16.828 7.88101 16.828 8.11901 16.682 8.26501C16.536 8.41101 16.298 8.41101 16.152 8.26501C16.006 8.11901 16.006 7.88101 16.152 7.73501C16.298 7.58801 16.535 7.58801 16.682 7.73501Z" stroke="#5B6975" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M11 13H5C3.895 13 3 12.105 3 11V5C3 3.895 3.895 3 5 3H19C20.105 3 21 3.895 21 5V8" stroke="#5B6975" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M19.3928 15.696V13.962C19.3928 12.878 18.5138 11.999 17.4298 11.999C16.3458 11.999 15.4668 12.878 15.4668 13.962V15.696" stroke="#5B6975" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M20 15.698H15C14.448 15.698 14 16.146 14 16.698V20C14 20.552 14.448 21 15 21H20C20.552 21 21 20.552 21 20V16.698C21 16.145 20.552 15.698 20 15.698Z" stroke="#5B6975" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg> : <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 20C5 17.544 6.991 15.553 9.447 15.553H14.553C17.009 15.553 19 17.544 19 20" stroke="#5B6975" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15.0052 5.2448C16.6649 6.90453 16.6649 9.59548 15.0052 11.2552C13.3455 12.9149 10.6545 12.9149 8.9948 11.2552C7.33507 9.59548 7.33507 6.90453 8.9948 5.2448C10.6545 3.58507 13.3455 3.58507 15.0052 5.2448" stroke="#5B6975" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                }
                <input type={props.type} id={props.id} placeholder={props.placeHolder} onChange={props.onChange}/>
                {props.type === 'password' ? <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.1218 9.87999C15.2928 11.051 15.2928 12.952 14.1218 14.125C12.9508 15.296 11.0498 15.296 9.87679 14.125C8.70579 12.954 8.70579 11.053 9.87679 9.87999C11.0498 8.70699 12.9498 8.70699 14.1218 9.87999Z" stroke="#8E90A6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M3 12C3 11.341 3.152 10.689 3.446 10.088C4.961 6.991 8.309 5 12 5C15.691 5 19.039 6.991 20.554 10.088C20.848 10.689 21 11.341 21 12C21 12.659 20.848 13.311 20.554 13.912C19.039 17.009 15.691 19 12 19C8.309 19 4.961 17.009 3.446 13.912C3.152 13.311 3 12.659 3 12V12Z" stroke="#8E90A6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg> : true}
                    </div>
            <p className={"error-msg"}>{props.msg}</p>
        </div>

    );
}

export default InputText;
