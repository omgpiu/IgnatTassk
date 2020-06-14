import React, {useState} from 'react';
import st from './HelloImput.module.css'
import {v1} from "uuid";


function HelloInput() {

    let [lists, setLists] = useState([
        {id: v1(), title: 'Sasha'},
        {id: v1(), title: 'Masha'},
        {id: v1(), title: 'Dasha'}
    ])

    function addName(title: string) {
        let list = {id: v1(), title: title};
        let newList = [list, ...lists];
        setLists(newList)
    }

    let [title, setTitle] = useState('')
    let listOfNames = lists.map(t => {
        return (

            <li key={t.id}>
                <span>{t.title}</span>
            </li>

        )
    });

    function greeting() {

        if (title.length > 2) {
            addName(title);
            alert('Hello ' + title)
            setTitle('')
        } else {
            alert('Input your name,please')
        }
    }

    return (

        <div className={st.wrapper}>

            <span className={st.title}>Say Hello</span>
            <div>Количество имен в списке - {lists.length}</div>
            <input

                type="text"
                value={title}
                onChange={(e) => {
                    setTitle(e.currentTarget.value)
                }}
                onKeyPress={(e)=>{if(e.charCode===13){greeting()}}}

            />
            <button onClick={() => {
                greeting()
            }}>+
            </button>
            <div>
                {listOfNames}
            </div>


        </div>


    )

}

export default HelloInput;