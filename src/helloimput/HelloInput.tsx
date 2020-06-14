import React, {useState} from 'react';
import st from './HelloImput.module.css'
import {v1} from "uuid";


type NameType = {
    title:string
    id: string

}



function HelloInput() {

    let [lists, setLists] = useState<Array<NameType>>([]);
    let [title, setTitle] = useState('')

    function greeting() {
        if (title.trim()) {
            alert('Hello ' + title)
            setTitle('')
            setLists([...lists,{title:title, id:v1()}])
        } else {
            alert('Input your name,please')
        }
    }


    let listOfNames = lists.map(t => {
        return (

            <li key={t.id}>
                <span>{t.title}</span>
            </li>

        )
    });



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
                onKeyPress={(e) => {
                    if (e.charCode === 13) {
                        greeting()
                    }
                }}
            />
            <button onClick={greeting}>+
            </button>
            <div>
                {listOfNames}
            </div>


        </div>


    )

}

export default HelloInput;