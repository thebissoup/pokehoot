import React from "react";
import {Form, AutoComplete, Stack} from "rsuite";
import DoingRoundIcon from '@rsuite/icons/DoingRound';


export function QuestionInput({index, deleteQuestion, setQuestions, obj, pokemon}){
    let pokemon_names = pokemon.map((obj) => obj.name);
    

    return(
        <div className="box">
            
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

                <Stack className={"dim-spaced"} spacing={15}>
                    <AutoComplete
                        data={pokemon_names}
                        renderMenuItem={item => {
                        return (
                            <div>
                            <DoingRoundIcon /> {item}
                            </div>
                        );
                        }}
                    />
                </Stack>

                
                

                <div class={`q-delete`} >
                    <button class ="ui red compact button" onClick={() => {
                    deleteQuestion(index);
                }}>
                        <i class="window close icon"></i>
                        Remove</button>
                </div>
                
                
            </Form.Group>

        </div>
        
    )
}