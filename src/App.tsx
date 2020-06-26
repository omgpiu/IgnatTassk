import React from 'react';
import LisfOfPlans from './TaskTwo/listOfPlans';
import MessageContainer from './TaskOne/TaskOne';
import HelloInput from './TaskThreeAndFour/HelloInput';
import TaskNavBar from './TaskFive/TaskNavBar';
import HomePage from './HomePage/HomePage';
import {HashRouter, Route} from 'react-router-dom';
import TaskFiveWebsite from './TaskFive/TaskFIveWebsite/TaskFiveWebsite';


function App() {


    return (
        <HashRouter>
            <TaskNavBar/>
            <Route path={'/homepage'} render={() => <HomePage/>}/>
            <Route path={'/taskone'} render={() => <MessageContainer name={'Alex'}
                                                                     message={'Did you write something?'}
                                                                     time={'11.20'}/>}/>
            <Route path={'/taskTwo'} render={() => <LisfOfPlans
                firstTitle={'Home'}
                secondTitle={'Studying'}/>}/>
            <Route path={'/taskThreeAndFour'} render={() => <HelloInput/>}/>
            <Route path={'/taskFive'} render={() => <TaskFiveWebsite/>}/>
        </HashRouter>
    );
}

export default App;
