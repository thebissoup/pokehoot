import React from "react";
import {Form} from "rsuite";


export function QuestionInput({index, deleteQuestion, setQuestions, obj}){
   
    return(
        <Form.Group>
            <Form.ControlLabel>Question {index+1}:</Form.ControlLabel>
            <Form.Control value={obj.question} name="q-1" onChange={text => {
                setQuestions( questionArr => {
                    return [...questionArr.slice(0,index),
                    {question:text},
                    ...questionArr.slice(index +1)
                    ]
                });
            }} ></Form.Control>
            <div class={`q-delete`} >
                <button class ="ui red compact button" onClick={() => {
                deleteQuestion(index);
            }}>
                    <i class="window close icon"></i>
                    Remove</button>
            </div>
            
            
        </Form.Group>
        
    )
}