import React, {ChangeEvent} from 'react'
import style from './Greeting.module.css'

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string
    totalUsers: number
}

const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers}
) => {

    return (
        <div className={style.HW3}>
            <input value={name} onChange={setNameCallback}/>
            <button onClick={addUser}>add</button>
            <span className={style.counter}>current count of names: {totalUsers}</span>
            <div className={style.error}>{error}</div>
        </div>
    )
}

export default Greeting
