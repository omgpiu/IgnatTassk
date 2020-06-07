import React, {useState} from 'react';
import st from './listOfPlans.module.css'
import Content from "./content/Content";
import PriorityButtons from "./priority/PriorityButtons";

type ListOfPlansType = {
    firstTitle: string
    secondTitle: string
}


export type ValueOfTasks = {
    title: string
    priority: 'High' | 'Middle' | 'Low'
    id: number
}

export type FilterPriorityType = 'High' | 'Low' | 'Middle' | 'All'


function LisfOfPlans(props: ListOfPlansType,) {
    let [filter, setFilter] = useState<FilterPriorityType>('All');


    let [list, setList] = useState<Array<ValueOfTasks>>([
        {id: 99, title: 'Посуда', priority: 'High'},
        {id: 98, title: 'Уборка1', priority: 'High'},
        {id: 97, title: 'Уборка2', priority: 'High'},
        {id: 96, title: 'Стрика1', priority: 'Middle'},
        {id: 95, title: 'Стрика2', priority: 'Middle'},
        {id: 94, title: 'Стрика3', priority: 'Middle'},
        {id: 93, title: 'Полы1', priority: 'Low'},
        {id: 92, title: 'Полы2', priority: 'Low'},
        {id: 91, title: 'Полы3', priority: 'Low'},

    ]);
    let [list2, setList2] = useState<Array<ValueOfTasks>>([
        {id: 5, title: 'JS1', priority: 'High'},
        {id: 6, title: 'JS2', priority: 'High'},
        {id: 7, title: 'JS3', priority: 'High'},
        {id: 8, title: 'React', priority: 'High'},
        {id: 9, title: 'CSS1', priority: 'Middle'},
        {id: 10, title: 'CSS2', priority: 'Middle'},
        {id: 11, title: 'CSS3', priority: 'Middle'},
        {id: 12, title: 'HTML1', priority: 'Low'},
        {id: 13, title: 'HTML2', priority: 'Low'},
        {id: 14, title: 'HTML3', priority: 'Low'},
    ]);


    function removeTask(id: number) {
        let filteredList = list.filter(t => t.id != id);
        setList(filteredList);
        let filteredList2 = list2.filter(t => t.id != id);
        setList2(filteredList2)

        console.log(filteredList)

    }

    function changeFilter(value: FilterPriorityType) {
        setFilter(value)
    }


    let tasksForToDOLists = list;
    if (filter === 'High') { tasksForToDOLists = list.filter(t => t.priority === 'High');}
    if (filter === 'Low') {tasksForToDOLists = list.filter(t => t.priority === 'Low');}
     if  (filter === 'Middle') { tasksForToDOLists = list.filter(t => t.priority === 'Middle');}
    let tasksForToDOLists2 = list2;
    if (filter === 'High') { tasksForToDOLists2 = list2.filter(t => t.priority === 'High');}
    if (filter === 'Low') {tasksForToDOLists2 = list2.filter(t => t.priority === 'Low');}
    if  (filter === 'Middle') { tasksForToDOLists2 = list2.filter(t => t.priority === 'Middle');}





    return (
        <div className={st.wrapper}>
            <PriorityButtons changeFilter={changeFilter}/>
            <div className={st.thingsToDO}>{props.firstTitle}</div>
            <Content lists={tasksForToDOLists} removeTask={removeTask}  />
            <div className={st.thingsToDO}>{props.secondTitle}</div>
            <Content lists={tasksForToDOLists2} removeTask={removeTask} />
        </div>
    )
};

export default LisfOfPlans;