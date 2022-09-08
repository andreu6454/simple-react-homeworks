import {UserType} from "../HW8";

export const homeWorkReducer = (state: Array<UserType>, action: ActionType) => { // need to fix any
    switch (action.type) {
        case 'SORT-UP': {
            let newState = [...state]
            return newState.sort((a, b) => a.name > b.name ? 1 : -1)
        }
        case "SORT-DOWN": {
            let newState = [...state]
            return newState.sort((a, b) => a.name > b.name ? -1 : 1)
        }
        case "CHECK18": {
            return state.filter(el => el.age >= 18)
        }
        default: return state
    }
}
type ActionType = sortUpAcType | sortDownAcType | checkAgeType

type sortUpAcType = ReturnType<typeof sortUpAc>
type sortDownAcType = ReturnType<typeof sortDownAc>
type checkAgeType = ReturnType<typeof checkAge>

export const sortUpAc = () =>{
    return {
        type: "SORT-UP",
    } as const
}
export const sortDownAc = () =>{
    return {
        type: "SORT-DOWN",
    } as const
}

export const checkAge = () =>{
    return {
        type: "CHECK18"
    } as const
}
