import React from "react";
import {Form, Stack} from "rsuite";
import { useEffect } from "react";

export function QuestionInput({index, deleteQuestion, setQuestions}){
    useEffect(() =>{
        setTimeout(() => {
            console.log("hi")
        }, 1000);
    })
    return(
        <Form.Group>
            <Form.ControlLabel>Question {index+1}:</Form.ControlLabel>
            <Form.Control name="q-1" onChange={text => {
                setQuestions( questionArr => {
                    return [...questionArr.slice(0,index),
                    {question:text},
                    ...questionArr.slice(index +1)
                    ]
                });
            }} ></Form.Control>
            <div class={`q-delete`} id ={`${index}`}>
                <button class ="ui red compact button" >
                    <i class="window close icon"></i>
                    Remove</button>
            </div>
            
            
        </Form.Group>
        
    )
}