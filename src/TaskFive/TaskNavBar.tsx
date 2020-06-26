import React from 'react';
import {NavLink} from 'react-router-dom';




function TaskNavBar() {
    return (
        <nav>
            <div>
                <NavLink to='/homepage'>HomePage</NavLink>
            </div><div>
                <NavLink to='/taskone'>TaskOne</NavLink>
            </div><div>
                <NavLink to='/tasktwo'>TaskTwo</NavLink>
            </div><div>
                <NavLink to='/taskthreeandfour'>TaskThreeAndFour</NavLink>
            </div><div>
                <NavLink to='/taskfive'>TaskFive</NavLink>
            </div>


        </nav>


    );

}


export default TaskNavBar;