import React from "react";
import { Form, Input, Stack, Modal, Button, Placeholder } from "rsuite";
import { QuestionInput } from "./QuestionInput";
import { useState, useEffect } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

let urls = [
  {
    resource_name: "pokemon",
    url: `https://pokeapi.co/api/v2/pokemon?limit=250&offset=0`,
  },
  {
    resource_name: "item",
    url: `https://pokeapi.co/api/v2/item?limit=250&offset=0`,
  },
];

export function QuizForm() {
  const [setHidden] = useOutletContext();
  const [pokemon, setPokemons] = useState([]);
  const [open, setOpen] = useState(false);
  const [edited, setEdit] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    getResourceArray(urls[0]);
  }, []);

  //fetch array of url from object url and pass resource name
  async function getResourceArray({ resource_name, url }) {
    const response = await fetch(url);
    let data = await response.json();
    let urls = data.results.map((obj) => obj.url);
    fetchAll(resource_name, urls);
  }
  //fetch json data from array of urls
  async function fetchAll(resource_name, urls) {
    const res = await Promise.all(
      urls.map((url, index) =>
        fetch(url).catch((err) =>
          console.log(resource_name, "error at ", index)
        )
      )
    );
    const jsons = await Promise.all(res.map((response) => response.json()));
    setPokemons(jsons); //sets pokemons from resource here.
  }

  const [title, setTitle] = useState({ name: "", length: 0 }); // form title
  const [description, setDescription] = useState({ desc: "", length: 0 }); // form description
  const [questions, setQuestions] = useState([
    // form questions
    { question: "", choices: [], image: null },
  ]);

  const addQuestion = () => {
    setQuestions((questions) => [...questions, { question: "", choices: [] }]); //adds questions
  };

  const deleteQuestion = (index) => {
    setQuestions((questions) => [
      // delete question at index
      ...questions.slice(0, index),
      ...questions.slice(index + 1, questions.length),
    ]);
    setEdit(true);
  };

  //resets the data
  const resetData = () => {
    setTitle({ ...title, name: "", length: 0 });
    setDescription({ ...description, desc: "", length: 0 });
    setQuestions([]);
  };

  //make post request to backend
  const handleSave = () => {
    const formData = { title, description, questions };
    console.log(formData);
    resetData();
  };

  //handle modal
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //handle back out
  const handleBackButton = () => {
    if (!edited) {
      navigate(-1);
    } else {
      setOpen(true);
    }
  };

  const handleExit = () => {
    handleClose();
    navigate(-1);
  };

  //render list of questions
  const questionList = questions.map((obj, index) => {
    return (
      <QuestionInput
        key={index}
        index={index} // identifier
        deleteQuestion={deleteQuestion} // ability to delete themselves
        setQuestions={setQuestions} // ability to modify their input
        setEdit={setEdit}
        obj={obj} // access to their json data
        pokemon={pokemon} // access to pokemon resource
      ></QuestionInput>
    );
  });

  return (
    <div className={"page-width"}>
      <Stack justifyContent={"space-between"} spacing={6}>
        <h1 className="ui header">New Quiz</h1>
        <button class="ui button" onClick={handleBackButton}>
          <i class="left arrow icon"></i>
          Back
        </button>
      </Stack>

      <hr class="dim-spaced" />
      <Form fluid>
        <Form.Group>
          <div className="box">
            <Form.ControlLabel>Title: </Form.ControlLabel>
            <Form.Control
              name="title"
              value={title.name}
              maxLength={50}
              onChange={(text) => {
                setTitle({ ...title, name: text, length: text.length });
                setEdit(true);
              }}
            />
            {title.length > 25 ? (
              <Form.HelpText>{50 - title.length} characters left</Form.HelpText>
            ) : null}
          </div>
        </Form.Group>
        <Form.Group>
          <div className="box">
            <Form.ControlLabel>Description: </Form.ControlLabel>
            <Input
              value={description.desc}
              as="textarea"
              onChange={(text) => {
                setDescription({
                  ...description,
                  desc: text,
                  length: text.length,
                });
                setEdit(true);
              }}
            />
          </div>
        </Form.Group>
        {questionList}
        <Form.Group>
          <button class="ui button" onClick={addQuestion}>
            <i class="plus icon" />
            Add Question
          </button>
        </Form.Group>
      </Form>
      <div class="dim-spaced box">
        <button onClick={handleSave} class="ui button green">
          Save
        </button>
        <button class="ui button">Cancel</button>
      </div>
      <Modal
        backdrop="static"
        role="alertdialog"
        open={open}
        onClose={handleClose}
        size="xs"
      >
        <Modal.Body>
          Are you sure you want leave this page? Your progress will not be
          saved.
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose} appearance="subtle">
            Cancel
          </Button>
          <Button onClick={handleExit} appearance="primary">
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
