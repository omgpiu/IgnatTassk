import React from 'react';
import {NavLink} from 'react-router-dom';


function TaskNav() {
    return (
        <nav>
            <div>
                <NavLink to='/taskFive/PreJuniorPage'>PreJuniorPage</NavLink>
            </div>
            <div>
                <NavLink to='/taskFive/JuniorPage'>JuniorPage</NavLink>
            </div>
            <div>
                <NavLink to='/taskFive/JuniorPlusPage'>JuniorPlusPage</NavLink>
            </div>
        </nav>


    );

}


export default TaskNav;