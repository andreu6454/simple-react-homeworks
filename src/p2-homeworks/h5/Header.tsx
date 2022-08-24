import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./Routes";
import style from './Header.module.css'

function Header() {
    return (
        <div className={style.header}>
            <NavLink to={PATH.PRE_JUNIOR} className={style.link} activeClassName={style.active}> pre-junior</NavLink>
            <NavLink to={PATH.JUNIOR} className={style.link} activeClassName={style.active}>junior</NavLink>
            <NavLink to={PATH.JUNIOR_PLUS} className={style.link} activeClassName={style.active}>junior-plus</NavLink>
            <div className={style.Block}/>
        </div>
    )
}

export default Header
