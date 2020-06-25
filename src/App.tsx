import React from 'react';
import LisfOfPlans from './listOfPlans/listOfPlans';
import MessageContainer from './Appfirst';
import HelloInput from './helloimput/HelloInput';


function App() {


    return (
        <div>
            <div>Задача №1</div>
            <MessageContainer name={'Alex'} message={'Did you write something?'} time={'11.20'}/>
            <div>
                hey
                <hr/>
                Задача №2
            </div>
            <LisfOfPlans firstTitle={'Home'} secondTitle={'Studying'}/>
            <div>
                <hr/>
                Задача №3
            </div>
            <HelloInput/>
            <div>
                <hr/>
                Задача №4
            </div>


        </div>
    );
}

export default App;
