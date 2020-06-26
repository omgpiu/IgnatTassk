import React from 'react';
import st from "./task.module.css";
import {ValueOfTasks} from "../../listOfPlans";


type PropsTypes = {
 task: ValueOfTasks
    removeTask:(listId:string) => void
}



function Task(props: PropsTypes) {
    return (
        <div className={st.plan}>
            <div className={st.item}>
                <div className={st.title}>{props.task.title}</div>
                <div className={st.prior}>{props.task.priority}</div>
                <button onClick={() => props.removeTask(props.task.id)}>Remove</button>
            </div>
        </div>
    )

}



export default Task;