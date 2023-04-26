import React, { useEffect, useState } from 'react';
import CreateTask from '../modals/CreateTask';
import Card from './Card';


const TodoList = () => {
    const [modal, setModal] = useState(false);
    const [taskList, setTaskList] = useState([]); // creating state for task list when user click on create task button

    useEffect(() =>{
        let arr = localStorage.getItem("taskList");
        if(arr){
        let obj = JSON.parse(arr);
            setTaskList(obj);
        }
    }, [])

    const deleteTask = (index) => {
        let tempList = taskList;
        tempList.splice(index, 1)
        localStorage.setItem("taskList", JSON.stringify(tempList));
        setTaskList(tempList);
        window.location.reload();
    }


   const updateListArray = (obj, index) => {
            let tempList = taskList;
            tempList[index] = obj;
            localStorage.setItem("taskList", JSON.stringify(tempList))
            setTaskList(...tempList)
            window.location.reload();
   }


    const toggle = () =>{
        setModal(!modal);
    }

    //making function for task list
    const saveTask = (taskObj) =>{
         let temList = taskList;  // putting initial empty taskList to temList
         temList.push(taskObj);  // updating temList with taskObj
         localStorage.setItem("taskList", JSON.stringify(temList)); // setting object to the browser localStorage
         setTaskList(temList);  // setting updated tempList to setTaskList
         setModal(false) // after setting the object modal is going to close and showing object value
         
    }
    return (
       <>
             <div className='header text-center'>
                    <h1>Todo List</h1>
                    <button className='btn btn-primary mt-3' onClick={() => setModal(true)}>Create Task</button>
            </div>

            <div className="task-container"> 
                    {
                        taskList.map((obj, index) => <Card taskObj = {obj} index = {index} deleteTask= {deleteTask} updateListArray={updateListArray}/>)
                    }
            </div>
          
           
           <CreateTask modal={modal} toggle={toggle} save = {saveTask}/>
           
       </>
    );
};

export default TodoList;