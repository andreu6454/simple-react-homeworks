import React from 'react'
import {checkAge, homeWorkReducer, sortDownAc, sortUpAc} from '../homeWorkReducer'
import {UserType} from "../../HW8";

let initialState: UserType[] // need to fix any

beforeEach(() => {
    initialState = [
        {_id: 0, name: 'Кот', age: 3},
        {_id: 1, name: 'Александр', age: 66},
        {_id: 2, name: 'Коля', age: 16},
        {_id: 3, name: 'Виктор', age: 44},
        {_id: 4, name: 'Дмитрий', age: 40},
        {_id: 5, name: 'Ирина', age: 55},
    ]
})

test('sort name up', () => {
    const newState = homeWorkReducer(initialState, sortUpAc())
    expect(newState[0].name).toBe("Александр")
    expect(newState[5].name).toBe("Кот")
})
test('sort name down', () => {
    const newState = homeWorkReducer(initialState, sortDownAc())

    expect(newState[0].name).toBe("Кот")
    expect(newState[5].name).toBe("Александр")
})
test('check age 18', () => {
    const newState = homeWorkReducer(initialState, checkAge())

    for(let key in newState){
        expect(newState[key].age).toBeGreaterThan(17)
    }
})
