import React from "react";
import { useState } from "react";
import { Form, Modal, Input } from "rsuite";
import { QuestionInput } from "./QuestionInput";

export function QuizForm({open, handleClose}){
        
        
        const [title, setTitle] = useState({title: "", length: 0});
        const [description, setDescription] = useState({desc:"", length:0});
        const [questions, setQuestions] = useState([{}]);
       
        
        const addQuestion = () =>{
            setQuestions(questions => [...questions, {}])
        }

        const deleteQuestion = (index) => {
            console.log(index);
        }

        const resetData = () =>{
            setTitle({...title, title:"", length:0});
            setDescription({...description, desc:"", length: 0});
            setQuestions([{}]);
        }

        const handleSave = () => {
            //"saving the data"
            console.log(title);
            console.log(description);
            console.log(questions);
            handleClose();
            resetData();
        };

        const handleExit = () =>{
            handleClose();
            resetData();
        }

        const questionList = questions.map((obj,index) => { // component list
            return <QuestionInput index={index}  deleteQuestion={deleteQuestion} setQuestions={setQuestions}></QuestionInput>
        })


    return(
        <Modal open={open} onClose={handleExit} backdrop={'static'} size={'lg'} overflow={false}>
                   <Modal.Header>
                       <Modal.Title>New Quiz</Modal.Title>
                   </Modal.Header>
                   <Modal.Body>
                        <Form fluid>
                                <Form.Group>
                                    <Form.ControlLabel>Title: </Form.ControlLabel>
                                    <Form.Control name="title" maxLength={50} onChange ={(text) => {
                                        setTitle({...title,
                                            title: text,
                                            length: text.length});
                                        }}/>
                                    { (title.length > 25) ? <Form.HelpText>{50 - title.length} characters left</Form.HelpText> : null}
                                </Form.Group>
                                <Form.Group>
                                    <Form.ControlLabel>Description: </Form.ControlLabel>
                                    <Input  as="textarea" onChange={(text)=>{
                                        setDescription({...description,
                                        desc:text,
                                        length:text.length});
                                        }}/>
                                    
                                </Form.Group>
                                {questionList}
                                <Form.Group>
                                    <button class="ui button" onClick={addQuestion} >
                                        <i class="plus icon"/>
                                        Add Question
                                    </button>
                                </Form.Group>
                        </Form>
                   </Modal.Body>
                   <Modal.Footer>
                        <button onClick={handleSave} class="ui button green">
                            Save
                        </button>
                        <button onClick={handleExit} class="ui button">
                            Cancel
                        </button>
                   </Modal.Footer>
               </Modal>
        
    )
}