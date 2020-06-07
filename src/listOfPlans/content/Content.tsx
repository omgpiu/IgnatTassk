import React from 'react';

import {ValueOfTasks} from "../listOfPlans";

import Task from "./task/task";

export type PropsType = {
    lists: Array<ValueOfTasks>
}


function Content(props: PropsType) {

    return (
        <div>
            <Task ids={props.lists[0].id} titles={props.lists[0].title} priorities={props.lists[0].priority}/>
            <Task ids={props.lists[1].id} titles={props.lists[1].title} priorities={props.lists[1].priority}/>
            <Task ids={props.lists[2].id} titles={props.lists[2].title} priorities={props.lists[2].priority}/>
            <Task ids={props.lists[3].id} titles={props.lists[3].title} priorities={props.lists[3].priority}/>

        </div>


    )

}

export default Content;