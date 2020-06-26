import React from 'react';
import {NavLink} from 'react-router-dom';
import st from './TaskNavBar.module.css';


function TaskNavBar() {
    return (
        <nav>
            <div className={st.holder}>
                <div className={st.block}>
                    <div>
                        <NavLink to='/homepage'>HomePage</NavLink>
                    </div>
                    <div>
                        <NavLink to='/taskone'>TaskOne</NavLink>
                    </div>
                    <div>
                        <NavLink to='/tasktwo'>TaskTwo</NavLink>
                    </div>
                    <div>
                        <NavLink to='/taskthreeandfour'>TaskThreeAndFour</NavLink>
                    </div>
                    <div>
                        <NavLink to='/taskfive'>TaskFive</NavLink>
                    </div>
                </div>
            </div>


            <div className={st.holder2}>
                <div className={st.block2}>
                    <div>
                        <NavLink to='/homepage'>HomePage</NavLink>
                    </div>
                    <div>
                        <NavLink to='/taskone'>TaskOne</NavLink>
                    </div>
                    <div>
                        <NavLink to='/tasktwo'>TaskTwo</NavLink>
                    </div>
                    <div>
                        <NavLink to='/taskthreeandfour'>TaskThreeAndFour</NavLink>
                    </div>
                    <div>
                        <NavLink to='/taskfive'>TaskFive</NavLink>
                    </div>
                </div>
            </div><div className={st.holder3}>
                <div className={st.block3}>
                    <span>
                        <NavLink to='/homepage'> HomePage </NavLink>
                    </span>
                    <span>
                        <NavLink to='/taskone'> TaskOne </NavLink>
                    </span>
                    <span>
                        <NavLink to='/tasktwo'> TaskTwo </NavLink>
                    </span>
                    <span>
                        <NavLink to='/taskthreeandfour'> TaskThreeAndFour </NavLink>
                    </span>
                    <span>
                        <NavLink to='/taskfive'> TaskFive </NavLink>
                    </span>
                </div>
            </div>


        </nav>


    );

}


export default TaskNavBar;