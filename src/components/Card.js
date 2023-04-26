import React, { useState } from 'react';
import EditTask from '../modals/EditTask';
import DeleteAlert from '../modals/DeleteAlert';

const Card = ({taskObj, index, deleteTask, updateListArray}) => {

    const [modal, setModal] = useState(false);
    const [openModal, setOpenModal] = useState(false);

    const colors = [
        {
            primaryColor : "#5D93E1",
            secondaryColor : "#a0c1eb"
        },
        {
            primaryColor : "#F9D288",
            secondaryColor : "#edd3a1"
        },
        {
            primaryColor : "#5DC250",
            secondaryColor : "#aaeda1"
        },
        {
            primaryColor : "#F48687",
            secondaryColor : "#eba2a3"
        },
        {
            primaryColor : "#B964F7",
            secondaryColor : "#c89be8"
        }
    ]


    const toggle = () =>{
        setModal(!modal);
    }

    const toggle2 = () => setOpenModal(!openModal);

    const updateTask = (obj) =>{
        updateListArray(obj, index);
    }

    const handleDelete =() =>{
        deleteTask(index);
        console.log("I am deleted");
    }

    return (
        <div class = "card-wrapper mr-5" draggable>
            <div class = "card-top" style={{"background-color": colors[index%5].primaryColor}}></div>
            <div class = "task-holder">
                <span class = "card-header" style={{"background-color": colors[index%5].secondaryColor , "border-radius": "5px"}}>{taskObj.name}</span>
                <p className='mt-3'>{taskObj.description}</p>

                <div style={{"position": "absolute", "right" : "20px", "bottom" : "20px"}}>
                    <i class = "far fa-edit" style={{"color" : "#5DC250", "marginRight": "15px", "cursor": "pointer"}} onClick={() => setModal(true)}></i>
                    <i class="fas fa-trash-alt " style = {{"color" : "#5DC250", "cursor": "pointer"}} onClick={toggle2}></i>
                </div>
            </div>
            <EditTask modal={modal} toggle={toggle} updateTask={updateTask} taskObj={taskObj}/>
            <DeleteAlert openModal={openModal} toggle2={toggle2} handleDelete={handleDelete}></DeleteAlert>
        </div>
        
    );
};

export default Card;