import React from 'react';
import st from './listOfPlans.module.css'
import Content from "./content/Content";
import PriorityButtons from "./priority/PriorityButtons";


export type ValueOfTasks = {
    title: string
    priority: 'High'| 'Middle'| 'Low'
    id: number
}

function LisfOfPlans() {

    const list: Array<ValueOfTasks> = [
        { id: 1 , title: 'FamilyFamilyFamilyFamilyFamilyFamilyFamilyFamilyFamilyFamilyFamilyFamilyFamilyFamilyFamilyFamilyFamilyFamilyFamilyFamilyFamilyFamilyFamilyFamily', priority: 'High'},
        { id: 2 , title: 'React', priority: 'High'},
        { id: 3 , title: 'Job', priority: 'Middle'},
        { id: 4 , title: 'Workout', priority: 'Low'},
        { id: 5 , title: 'Games', priority: 'Low'},
    ]

    return (
        <div className={st.wrapper}>
            <PriorityButtons/>
            <Content lists={list}/>
        </div>
    )
}

export default LisfOfPlans;