import React from "react";
import { Form, Input, Stack} from "rsuite";
import { QuestionInput } from "./QuestionInput";
import { useState, useEffect } from "react";

export function QuizForm(){
        let urls = [{resource_name: "pokemon" ,url: `https://pokeapi.co/api/v2/pokemon?limit=250&offset=0`},{resource_name: "item",url: `https://pokeapi.co/api/v2/item?limit=250&offset=0`}];

        const [pokemon, setPokemons] = useState([]);

        useEffect(() =>{
            getResourceArray(urls[0]);
        },[])


        async function getResourceArray({resource_name, url}){ //needs the name of the state resource
            const response = await fetch(url);
            let data = await response.json();
            let urls = data.results.map((obj) => obj.url); // creates an array of fetch urls
            fetchAll(resource_name, urls);
        }

        async function fetchAll(resource_name, urls){
            const res = await Promise.all(urls.map((url,index) => fetch(url).catch(err => console.log(resource_name,"error at ", index))));
            const jsons = await Promise.all(res.map(response => response.json()));
            setPokemons(jsons);

        }
        
        const [title, setTitle] = useState({name: "", length: 0});
        const [description, setDescription] = useState({desc:"", length:0});
        const [questions, setQuestions] = useState([{question:""}]);
       
        
        const addQuestion = () =>{
            setQuestions(questions => [...questions, {question:""}])
        }

        const deleteQuestion = (index) => {
            setQuestions(questions => [...questions.slice(0,index), ...questions.slice(index+1,questions.length)])
        }

        const resetData = () =>{
            setTitle({...title, name:"", length:0});
            setDescription({...description, desc:"", length: 0});
            setQuestions([{question:""}]);
        }

        const handleSave = () => {
            // make post request to backend
            console.log(title);
            console.log(description);
            console.log(questions);
            resetData();
        };


        const questionList = questions.map((obj,index) => { // component list
            return <QuestionInput key={index} index={index}  deleteQuestion={deleteQuestion} setQuestions={setQuestions} obj={obj} pokemon={pokemon}></QuestionInput>
        })


    return(
        <div>
            <Stack justifyContent={"space-between"} spacing={6}>
                <h1>{(title.length < 1) ? "New Quiz": title.name}</h1>
                <button class="ui button">
                    <i class="plus icon"></i>
                    New Quiz
                </button>
            </Stack>

            <hr class="dim-spaced"/>
            <Form fluid>
                                <Form.Group>
                                    <div className="box">
                                        <Form.ControlLabel>Title: </Form.ControlLabel>
                                        <Form.Control name="title" value={title.name} maxLength={50} onChange ={(text) => {
                                            setTitle({...title,
                                                name: text,
                                                length: text.length});
                                            }}/>
                                        { (title.length > 25) ? <Form.HelpText>{50 - title.length} characters left</Form.HelpText> : null}
                                    </div>
                                </Form.Group>
                                <Form.Group>
                                    <div className="box">
                                        <Form.ControlLabel>Description: </Form.ControlLabel>
                                        <Input value={description.desc}  as="textarea" onChange={(text)=>{
                                            setDescription({...description,
                                            desc:text,
                                            length:text.length});
                                            }}/>
                                    </div>
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