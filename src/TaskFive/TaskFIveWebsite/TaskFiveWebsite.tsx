import React from 'react';

import JuniorPage from '../Junior/JuniorPage';
import JuniorPlusPage from '../Junior+/JuniorPlusPage';
import PreJuniorPage from '../preJunior/preJuniorPage';
import {HashRouter, Route} from 'react-router-dom';
import TaskNav from './TaskNav';



function TaskFiveWebsite() {
    return (
        <HashRouter>
            <TaskNav/>
            <Route  path={'/PreJuniorPage'} render={() => <PreJuniorPage />}/>
            <Route  path={'/JuniorPage'} render={() => <JuniorPage />}/>
            <Route  path={'/JuniorPlusPage'} render={() => <JuniorPlusPage />}/>

        </HashRouter>

    );

}


export default TaskFiveWebsite;