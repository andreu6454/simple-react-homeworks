import React from 'react'
import style from "./Message.module.css"


type MessagePropsType = {
    name: string,
    avatar: string,
    message: string,
    time: string
}

function Message(props: MessagePropsType) {
    return (
        <div className={style.messageBlock}>
            <img src={props.avatar} alt="avatar" className="img-size"></img>
            <div className={style.Angle}></div>
            <div className={style.message}>
                <h5 className={style.Name}>{props.name}</h5>
                <div className={style.messageContent}>
                    <div className={style.messageText}>
                        <p className={style.messageText}>{props.message}</p>
                    </div>
                    <div className={style.time}>
                        <p>{props.time}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Message
