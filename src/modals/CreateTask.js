import React, { useState } from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

const CreateTask = ({modal, toggle, save}) => {
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');
    // const [giveInfo, setGiveInfo] = useState('');
    
    const handleChange = (e) =>{
        const {name, value} = e.target

        if(name === "taskName"){
            setTaskName(value);
        }else{
            setDescription(value);
        }
    }
      //creating the object
    const handleSave = () =>{

        let taskObj = {};
        taskObj["name"] = taskName;
        taskObj["description"] = description;

        if(taskName === "" || description === ""){
            alert("PLease give your information!")
            console.log(taskName, description)
        }else{
            save(taskObj);
            // console.log(taskName, description)
        }

        // save(taskObj);
        
        setTaskName("");
        setDescription("");
    }
 
    return (   
      <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Create Task</ModalHeader>
                <ModalBody>
                    <from>
                          <div className="form-group">
                              <label>Task Name</label>
                              <input type="text" className='form-control' value={taskName} onChange={handleChange} name='taskName'/>
                          </div>
                          <div className="form-group">
                            <label>Description</label>
                              <textarea rows = "5" className='form-control mt-1' value={description} onChange={handleChange} name='description'></textarea>
                          </div>
                    </from>
                </ModalBody>
                <ModalFooter>
                <Button color="primary" onClick={handleSave}>
                    Create
                </Button>{' '}
                <Button color="secondary" onClick={toggle}>
                    Cancel
                </Button>
                </ModalFooter>
      </Modal>

    );
};

export default CreateTask;