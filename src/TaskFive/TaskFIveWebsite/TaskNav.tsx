import React from 'react';
import {NavLink} from 'react-router-dom';


function TaskNav() {
    return (
        <nav>

            <div>

                <NavLink to='/PreJuniorPage'>PreJuniorPage</NavLink>
            </div>
            <div>
                <NavLink to='/JuniorPage'>JuniorPage</NavLink>
            </div>
            <div>
                <NavLink to='/JuniorPlusPage'>JuniorPlusPage</NavLink>
            </div>


        </nav>


    );

}


export default TaskNav;