import React from 'react';
import st from "./task.module.css";


type TaskTypes = {
 ids: any   // Непонятная хуйня
 titles: string
 priorities: 'High'| 'Middle'| 'Low'

}



function Task(props: TaskTypes) {
    return (
        <div className={st.plan}>
            <div className={st.item} id={props.ids} >
                <div className={st.title}>{props.titles}</div>
                <div className={st.prior}>{props.priorities}</div>
                <button>Удалить</button>
            </div>
        </div>
    )

}



export default Task;