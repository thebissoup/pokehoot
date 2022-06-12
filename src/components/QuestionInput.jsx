import React from "react";
import {Form} from "rsuite"

export function QuestionInput({index, setQuestions}){
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
        </Form.Group>
    )
}