import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import {v1} from "uuid";


export type UserType = {
    _id: string
    name: string
}

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<Array<UserType>>([
        {_id: v1(), name: 'Andrey'},
        {_id: v1(), name: 'Maks'}
    ])

    const addUserCallback = (name: string) => {
        const NewUser: UserType = {
            _id: v1(),
            name: name
        }
        setUsers([...users,NewUser])
    }

    return (
        <div>
            <hr/>
            homeworks 3


            <GreetingContainer users={users} addUserCallback={addUserCallback}/>

            <hr/>
            <hr/>
        </div>
    )
}

export default HW3