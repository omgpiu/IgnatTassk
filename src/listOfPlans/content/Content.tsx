import React from 'react';

import {ValueOfTasks} from "../listOfPlans";

import Task from "./task/task";

export type PropsType = {
    lists: Array<ValueOfTasks>
    removeTask:(taskId:number) => void

}


function Content(props: PropsType) {

    return (
        <div>
            {
                props.lists.map(t => <Task key={t.id} task={t} removeTask={props.removeTask}/>)
            }

        </div>


    )

}

export default Content;