import React from 'react';
import LisfOfPlans from "./listOfPlans/listOfPlans";
import MessageContainer from "./Appfirst";




function App() {
    return (
        <div>
            <MessageContainer name={"Alex"} message={"Did you write something?"} time={"11.20"}/>
            <LisfOfPlans/>
        </div>
    );
}

export default App;
