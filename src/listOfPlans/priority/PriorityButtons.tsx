import React from 'react';
import st from './PriorityButtons.module.css'

import {FilterPriorityType} from "../listOfPlans";

export type PriorityButtonsType = {
    changeFilter: (value: FilterPriorityType) => void
}


function PriorityButtons(props: PriorityButtonsType) {
    return (
        <div>

            <div className={st.header}>List of all my plans</div>
            <div className={st.priorities}>
                <button className={st.itemB} onClick={() => {
                    props.changeFilter('High')
                }}>High
                </button>
                <button className={st.itemB} onClick={() => {
                    props.changeFilter('Middle')
                }}>Middle
                </button>
                <button className={st.itemB} onClick={() => {
                    props.changeFilter('Low')
                }}>Low
                </button>
                <button className={st.itemB} onClick={() => {
                    props.changeFilter('All')
                }}>All
                </button>
                <button className={st.itemADD} onClick={() => alert('Еще  не готово =(')}>Add</button>
            </div>


        </div>


    )

}

export default PriorityButtons;