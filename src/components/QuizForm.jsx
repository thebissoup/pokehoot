import React from "react";
import { useState } from "react";
import { Form, Input } from "rsuite";
import { QuestionInput } from "./QuestionInput";

export function QuizForm(){
        
        
        const [title, setTitle] = useState({name: "", length: 0});
        const [description, setDescription] = useState({desc:"", length:0});
        const [questions, setQuestions] = useState([{question:""}]);
       
        
        const addQuestion = () =>{
            setQuestions(questions => [...questions, {question:""}])
        }

        const deleteQuestion = (index) => {
            //update questions
            setQuestions(questions => [...questions.slice(0,index), ...questions.slice(index+1,questions.length)])
        }

        const resetData = () =>{
            setTitle({...title, name:"", length:0});
            setDescription({...description, desc:"", length: 0});
            setQuestions([{question:""}]);
        }

        const handleSave = () => {
            //"saving the data"
            console.log(title);
            console.log(description);
            console.log(questions);
            resetData();
        };


        const questionList = questions.map((obj,index) => { // component list
            return <QuestionInput index={index}  deleteQuestion={deleteQuestion} setQuestions={setQuestions} obj={obj}></QuestionInput>
        })


    return(
        <div>
            <Form fluid>
                                <Form.Group>
                                    <Form.ControlLabel>Title: </Form.ControlLabel>
                                    <Form.Control name="title" value={title.name} maxLength={50} onChange ={(text) => {
                                        setTitle({...title,
                                            name: text,
                                            length: text.length});
                                        }}/>
                                    { (title.length > 25) ? <Form.HelpText>{50 - title.length} characters left</Form.HelpText> : null}
                                </Form.Group>
                                <Form.Group>
                                    <Form.ControlLabel>Description: </Form.ControlLabel>
                                    <Input value={description.desc}  as="textarea" onChange={(text)=>{
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
                        <div class="dim-spaced">
                            <button onClick={handleSave} class="ui button green">
                                Save
                            </button>
                            <button class="ui button">
                                Cancel
                            </button>
                        </div>
        </div>
        
        
    )
}