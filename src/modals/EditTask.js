import React, { useEffect, useState } from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

const EditTask = ({modal, toggle, updateTask, taskObj}) => {
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');
    
    const handleChange = (e) =>{
        const {name, value} = e.target

        if(name === "taskName"){
            setTaskName(value);
        }else{
            setDescription(value);
        }
    }

    useEffect(() =>{
        setTaskName(taskObj.name);
        setDescription(taskObj.description);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);



      
    const handleUpdate = (e) =>{
       e.preventDefault();
       let tempObj = {};
       tempObj["name"] = taskName;
       tempObj["description"] = description;
       updateTask(tempObj);
    }

 

    return (   
      <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Update Task</ModalHeader>
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
                <Button color="primary" onClick={handleUpdate}>
                    Update
                </Button>{' '}
                <Button color="secondary" onClick={toggle}>
                    Cancel
                </Button>
                </ModalFooter>
      </Modal>

    );
};

export default EditTask;