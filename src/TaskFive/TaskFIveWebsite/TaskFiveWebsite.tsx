import React from 'react';

import JuniorPage from '../Junior/JuniorPage';
import JuniorPlusPage from '../Junior+/JuniorPlusPage';
import PreJuniorPage from '../preJunior/preJuniorPage';
import {HashRouter, Route} from 'react-router-dom';
import TaskNav from './TaskNav';



function TaskFiveWebsite() {
    return (
        <div>
            <TaskNav/>
            <Route  path={'/taskFive/PreJuniorPage'} render={() => <PreJuniorPage />}/>
            <Route  path={'/taskFive/JuniorPage'} render={() => <JuniorPage />}/>
            <Route  path={'/taskFive/JuniorPlusPage'} render={() => <JuniorPlusPage />}/>

        </div>

    );

}


export default TaskFiveWebsite;