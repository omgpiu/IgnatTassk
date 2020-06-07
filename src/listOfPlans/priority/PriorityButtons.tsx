import React from 'react';
import st from './PriorityButtons.module.css'


function PriorityButtons() {
    return (
        <div>

            <div className={st.header}>List of all my plans</div>
            <div className={st.priorities}>
                <button className={st.itemB}>High</button>
                <button className={st.itemB}>Middle</button>
                <button className={st.itemB}>Low</button>
            </div>



        </div>


    )

}

export default PriorityButtons;