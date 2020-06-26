import React, {useState} from 'react';
import st from './listOfPlans.module.css';
import Content from './content/Content';
import PriorityButtons from './priority/PriorityButtons';
import {v1} from 'uuid';

type ListOfPlansType = {
    firstTitle: string
    secondTitle: string
}


export type ValueOfTasks = {
    title: string
    priority: 'High' | 'Middle' | 'Low'
    id: string
}

export type FilterPriorityType = 'High' | 'Low' | 'Middle' | 'All'


function LisfOfPlans(props: ListOfPlansType,) {
    let [filter, setFilter] = useState<FilterPriorityType>('All');


    let [list, setList] = useState<Array<ValueOfTasks>>([
        {id: v1(), title: 'Посуда', priority: 'High'},


        {id: v1(), title: 'Стрика2', priority: 'Middle'},

        {id: v1(), title: 'Полы1', priority: 'Low'},


    ]);
    let [list2, setList2] = useState<Array<ValueOfTasks>>([
        {id: v1(), title: 'JS1', priority: 'High'},
       

        {id: v1(), title: 'CSS2', priority: 'Middle'},

        {id: v1(), title: 'HTML1', priority: 'Low'},

    ]);


    function removeTask(id: string) {
        let filteredList = list.filter(t => t.id !== id);
        setList(filteredList);
        let filteredList2 = list2.filter(t => t.id !== id);
        setList2(filteredList2);

        console.log(filteredList);

    }

    function changeFilter(value: FilterPriorityType) {
        setFilter(value);
    }


    let tasksForToDOLists = list;
    if (filter === 'High') {
        tasksForToDOLists = list.filter(t => t.priority === 'High');
    }
    if (filter === 'Low') {
        tasksForToDOLists = list.filter(t => t.priority === 'Low');
    }
    if (filter === 'Middle') {
        tasksForToDOLists = list.filter(t => t.priority === 'Middle');
    }
    let tasksForToDOLists2 = list2;
    if (filter === 'High') {
        tasksForToDOLists2 = list2.filter(t => t.priority === 'High');
    }
    if (filter === 'Low') {
        tasksForToDOLists2 = list2.filter(t => t.priority === 'Low');
    }
    if (filter === 'Middle') {
        tasksForToDOLists2 = list2.filter(t => t.priority === 'Middle');
    }


    return (
        <div className={st.wrapper}>
            <PriorityButtons changeFilter={changeFilter}/>
            <div className={st.thingsToDO}>{props.firstTitle}</div>
            <Content lists={tasksForToDOLists} removeTask={removeTask}/>
            <div className={st.thingsToDO}>{props.secondTitle}</div>
            <Content lists={tasksForToDOLists2} removeTask={removeTask}/>
        </div>
    );
};

export default LisfOfPlans;