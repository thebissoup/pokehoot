import React from "react";
import { useState } from "react";
import { Form, AutoComplete, Stack, TagGroup, Tag } from "rsuite";
import DoingRoundIcon from "@rsuite/icons/DoingRound";
import { QuestionImageUpload } from "./QuestionImageUpload";
//-------------Function-------------------
export function QuestionInput({
  // re-renders a lot
  index,
  deleteQuestion,
  setQuestions,
  obj,
  pokemon,
}) {
  let pokemon_names = pokemon.map(
    (obj) => obj.name.charAt(0).toUpperCase() + obj.name.slice(1) //capitalization
  );

  const [typing, setTyping] = useState(false); // button and autocomplete controller
  const [inputValue, setInputValue] = useState(""); // for input value but onselect serves the final text for input
  const [loading, setLoading] = useState(false);
  const [disable, setDisable] = useState(false);

  const handleFileDelete = () => {
    setQuestions((questionArr) => {
      return [
        ...questionArr.slice(0, index),
        {
          image: null,
          question: questionArr[index].question,
          choices: questionArr[index].choices, // appends the selected text to the choices array in the indexth object of the question array
        },
        ...questionArr.slice(index + 1),
      ];
    });
  };
  const handleFileUpload = (obj, file) => {
    setQuestions((questionArr) => {
      return [
        ...questionArr.slice(0, index),
        {
          image: file,
          question: questionArr[index].question,
          choices: questionArr[index].choices, // appends the selected text to the choices array in the indexth object of the question array
        },
        ...questionArr.slice(index + 1),
      ];
    });
  };

  const handleTagRemove = (tag) => {
    setQuestions((questionArr) => {
      return [
        ...questionArr.slice(0, index),
        {
          image: questionArr[index].image,
          question: questionArr[index].question,
          choices: [
            ...questionArr[index].choices.filter((item) => item !== tag), // filters the tag in the choices array in the indexth object of the questionarray
          ],
        },
        ...questionArr.slice(index + 1),
      ];
    });
  };

  const handleInputConfirm = (text) => {
    setQuestions((questionArr) => {
      return [
        ...questionArr.slice(0, index),
        {
          image: questionArr[index].image,
          question: questionArr[index].question,
          choices: [...questionArr[index].choices, text], // appends the selected text to the choices array in the indexth object of the question array
        },
        ...questionArr.slice(index + 1),
      ];
    });
    setTyping(false); // returns button
  };

  const handleButtonClick = () => {
    setTyping(true); // returns autocomplete
    setInputValue(""); // resets input
  };

  const onMouseOut = () => {
    setTyping(false); // returns button
  };

  const handleInputChange = (text) => {
    setInputValue(text);
  };

  const renderInput = () => {
    if (typing) {
      return (
        <AutoComplete
          data={pokemon_names} // all possible answer choices
          renderMenuItem={(item) => {
            return (
              <div>
                <DoingRoundIcon /> {item}
              </div>
            );
          }}
          onChange={handleInputChange}
          onPressEnter={(event) => event.preventDefault()} // prevents default behavior
          onSelect={handleInputConfirm} // modifies choices property of object
          value={inputValue}
        />
      );
    }

    return (
      <button class="ui icon button" onClick={handleButtonClick}>
        <i class="plus icon"></i>
      </button>
    );
  };

  const handleQuestionChange = (text) => {
    setQuestions((questionArr) => {
      return [
        ...questionArr.slice(0, index),
        {
          image: questionArr[index].image,
          question: text,
          choices: questionArr[index].choices,
        }, // modifies text of question
        ...questionArr.slice(index + 1),
      ];
    });
  };

  const tagChoices = obj.choices.map((item, index) => (
    <Tag key={index} closable size={"lg"} onClose={() => handleTagRemove(item)}>
      {item}
    </Tag>
  ));

  //----------------------Main Render-----------------------------

  return (
    <div className="box" onMouseLeave={onMouseOut}>
      <Form.Group>
        <Form.ControlLabel>Question {index + 1}:</Form.ControlLabel>
        <Form.Control
          value={obj.question}
          name="q-1"
          onChange={handleQuestionChange}
        ></Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.ControlLabel>Answer Choice:</Form.ControlLabel>
        <Stack className={"dim-spaced"} spacing={15}>
          <TagGroup>{tagChoices}</TagGroup>
          {renderInput()}
        </Stack>
      </Form.Group>
      <Form.Group>
        <QuestionImageUpload
          disable={disable}
          loading={loading}
          setDisable={setDisable}
          setLoading={setLoading}
          handleFileUpload={handleFileUpload}
          handleFileDelete={handleFileDelete}
        />
      </Form.Group>

      <div class={`q-delete`}>
        <button
          class="ui red compact button"
          onClick={() => {
            deleteQuestion(index);
          }}
        >
          <i class="window close icon"></i>
          Remove
        </button>
      </div>
    </div>
  );
}
