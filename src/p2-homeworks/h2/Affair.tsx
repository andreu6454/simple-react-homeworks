import React from 'react'
import style from "./Affairs.module.css"
type AffairPropsType = {
    _id: number
    affair: string
    priority: string
    deleteAffairCallback: (_id: number) => void;
}

function Affair(props: AffairPropsType) {
    const deleteCallback = (_id:number) => {
        {props.deleteAffairCallback(_id)}
    }

    return (
        <div className={style.Affair}>
            <div className={style.AffairName}>{props.affair}</div>
            <div className={style.AffairPriority}>{props.priority}</div>
            <button onClick={()=> deleteCallback(props._id)}>delete</button>
        </div>
    )
}

export default Affair
