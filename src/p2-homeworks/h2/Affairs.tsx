import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import style from "./Affairs.module.css"

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: (filter: FilterType) => void;
    deleteAffairCallback: (_id: number) => void;
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair
            key={a._id}
            _id = {a._id}
            affair={a.name}
            priority = {a.priority}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {
        props.setFilter("all")
    }
    const setHigh = () => {
        props.setFilter("high")
    }
    const setMiddle = () => {
        props.setFilter("middle")
    }
    const setLow = () => {
        props.setFilter("low")
    }

    return (
        <div className={style.Affairs}>

            {mappedAffairs}
            <div className={style.Buttons}>
                <button onClick={setAll}>All</button>
                <button onClick={setHigh}>High</button>
                <button onClick={setMiddle}>Middle</button>
                <button onClick={setLow}>Low</button>
            </div>

        </div>
    )
}

export default Affairs
