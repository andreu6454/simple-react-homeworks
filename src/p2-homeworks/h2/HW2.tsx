import React, {useState} from 'react'
import Affairs from './Affairs'


export type AffairPriorityType = "low" | "middle" | "high"
export type AffairType = {
    _id: number,
    name: string,
    priority: FilterType
}
export type FilterType = 'all' | AffairPriorityType


const defaultAffairs: Array<AffairType> = [
    {_id: 1, name: 'React', priority: 'high'},
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
]



export const filterAffairs = (affairs: Array<AffairType>, filter: FilterType): Array<AffairType> => { // need to fix any
    switch (filter){
        case "all":
            return affairs
        case "low":
            return affairs.filter(affair => affair.priority === "low")
        case "middle":
            return affairs.filter(affair => affair.priority === "middle")
        case "high":
            return affairs.filter(affair => affair.priority === "high")
    }

}
export const deleteAffair = (affairs: Array<AffairType>, _id: number): Array<AffairType> => { // need to fix any
    return affairs.filter((affair)=> affair._id !== _id)
}

function HW2() {
    const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs) // need to fix any
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id))

    return (
        <div>
            <hr/>
            homeworks 2

            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
            />

            <hr/>
            <hr/>
        </div>
    )
}

export default HW2
