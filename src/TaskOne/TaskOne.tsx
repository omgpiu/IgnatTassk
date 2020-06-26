import cl from "./TaskOne.module.css";
import React from "react";

type PropsType = {
    name: string
    message: string
    time: string
}


function MessageContainer(props: PropsType) {
    return (
        <div className={cl.MainContainer}>
            <div className={cl.avatar}> <img src={'https://c7.hotpng.com/preview/856/279/701/computer-icons-pictogram-asia-clip-art-asia.jpg'} alt="logo"/> </div>
            <div>
                <div className={cl.MainContainer__userName}>{props.name}</div>
                <div className={cl.MainContainer__message}>{props.message} </div>
            </div>
            <div className={cl.TimeDate}>
                <div className={cl.MainContainer_date}>{props.time}</div>
            </div>
        </div>
    );
}

export default MessageContainer