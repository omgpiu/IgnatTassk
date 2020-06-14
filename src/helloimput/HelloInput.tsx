import React, {useState} from 'react';
import st from './HelloImput.module.css'
import {v1} from "uuid";


function HelloInput() {

    let [lists, setLists] = useState([
        {id: v1(), title: 'Sasha'},
        {id: v1(), title: 'Masha'},
        {id: v1(), title: 'Dasha'}
    ])

 let summ;
    function addName(title: string) {
        let list = {id: v1(), title: title};
        let newList = [list, ...lists];
        summ = Object.keys(newList).length
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

     if (title !== '') {
        addName(title);
        alert('Hello ' + title)
        setTitle('')
    } else {
        alert('Input your name,please')
    }}
document.write(summ)
    return (

        <div className={st.wrapper}>

            <span>Say Hello</span>

            <input

                type="text"
                value={title}
                onChange={(e) => {
                    setTitle(e.currentTarget.value)
                }}

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