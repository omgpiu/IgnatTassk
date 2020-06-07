import React from 'react';
import LisfOfPlans from "./listOfPlans/listOfPlans";
import MessageContainer from "./Appfirst";





function App() {
    return (
        <div>
            <div>Задача №1</div>
            <MessageContainer name={"Alex"} message={"Did you write something?"} time={"11.20"}/>
           <div><hr/>Задача №2</div>
            <LisfOfPlans firstTitle={'Home'} secondTitle={'Studying'}/>
        </div>
    );
}

export default App;
