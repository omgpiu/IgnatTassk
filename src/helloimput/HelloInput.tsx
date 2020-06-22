import React, {ChangeEvent, useState} from 'react';
import st from './HelloImput.module.css';
import {v1} from 'uuid';
import MyInputNya from './MyInput/MyInput';
import MyButtonNya from './MyButton/MyButton';


type NameType = {
    title: string
    id: string

}


function HelloInput() {

    let [lists, setLists] = useState<Array<NameType>>([]);
    let [title, setTitle] = useState('');
    let [error, setError] = useState<string | null>(null);

    function greeting() {
        if (title.trim() !== '') {
            alert('Hello ' + title);
            setTitle('');
            setLists([...lists, {title: title, id: v1()}]);
        } else {
            alert('Input your name,please');
            setError('Title is required');
        }
    }

    let listOfNames = lists.map(t => {
        return (

            <li key={t.id}>
                <span>{t.title}</span>
            </li>

        );
    });

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value);
    };
    const onKeyPressHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        setError(null);
        if (e.charCode === 13) {
            greeting();
        }
    };

    return (

        <div className={st.wrapper}>
            <span className={st.title}>Say Hello</span>
            <div>Количество имен в списке - {lists.length}</div>

            <div> <MyButtonNya onClick={greeting} title={'Нажми меня'} /></div>
            <MyInputNya type="text"
                        value={title}
                        onChange={onChangeHandler}
                        onKeyPress={onKeyPressHandler}
                        error={error}/>



            <div>
                {listOfNames}
            </div>

        </div>


    );

}

export default HelloInput;