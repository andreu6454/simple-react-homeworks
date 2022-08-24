import React from 'react'
import style from './Error404.module.css'

function Error404() {
    return (
        <div className={style.Block}>
            <div className={style.Error}>404</div>
            <div className={style.ErrorMessage}>Page not found!</div>
            <div className={style.ErrorEmoji}>—ฅ/ᐠ.̫ .ᐟ\ฅ—</div>
        </div>
    )
}

export default Error404
