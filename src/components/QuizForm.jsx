import React from "react";
import { useState } from "react";
import { Form, Modal, Input } from "rsuite"

export function QuizForm({open, handleClose}){
        const [title, setTitle] = useState({title: "", length: 0});
        const [description, setDescription] = useState({desc: "", length: 0})
        const handleSave = () => {
            console.log(title);
            handleClose();
        
        };

    return(
        <Modal open={open} onClose={handleClose} backdrop={'static'} size={'lg'}>
                   <Modal.Header>
                       <Modal.Title>New Quiz</Modal.Title>
                   </Modal.Header>
                   <Modal.Body>
                        <Form fluid>
                                <Form.Group>
                                    <Form.ControlLabel>Title</Form.ControlLabel>
                                    <Form.Control name="title" maxLength={50} onChange ={(text) => {
                                        setTitle({...title,
                                            title: text,
                                            length: text.length});
                                        }}/>
                                    { (title.length > 25) ? <Form.HelpText>{50 - title.length} characters left</Form.HelpText> : null}
                                </Form.Group>
                                <Form.Group>
                                    <Form.ControlLabel>Description</Form.ControlLabel>
                                    <Form.Control name="desc" rows={5}></Form.Control>
                                </Form.Group>
                        </Form>
                   </Modal.Body>
                   <Modal.Footer>
                        <button onClick={handleSave} class="ui button green">
                            Save
                        </button>
                        <button onClick={handleClose} class="ui button">
                            Cancel
                        </button>
                   </Modal.Footer>
               </Modal>
        
    )
}