import React from "react";
import { useState } from "react";
import { Form, AutoComplete, Stack, TagGroup, Tag } from "rsuite";
import DoingRoundIcon from "@rsuite/icons/DoingRound";

export function QuestionInput({
  index,
  deleteQuestion,
  setQuestions,
  obj,
  pokemon,
}) {
  let pokemon_names = pokemon.map(
    (obj) => obj.name.charAt(0).toUpperCase() + obj.name.slice(1)
  );

  const [typing, setTyping] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleTagRemove = (tag) => {
    setQuestions((questionArr) => {
      return [
        ...questionArr.slice(0, index),
        {
          question: questionArr[index].question,
          choices: [
            ...questionArr[index].choices.filter((item) => item !== tag),
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
          question: questionArr[index].question,
          choices: [...questionArr[index].choices, text],
        },
        ...questionArr.slice(index + 1),
      ];
    });

    setTyping(false);
  };

  const handleButtonClick = () => {
    setTyping(true);
    setInputValue("");
  };

  const onMouseOut = () => {
    setTimeout(setTyping(false), "1000");
  };

  const renderInput = () => {
    if (typing) {
      return (
        <AutoComplete
          data={pokemon_names}
          renderMenuItem={(item) => {
            return (
              <div>
                <DoingRoundIcon /> {item}
              </div>
            );
          }}
          onChange={(text) => {
            setInputValue(text);
          }}
          onPressEnter={(event) => event.preventDefault()}
          onSelect={handleInputConfirm}
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

  return (
    <div className="box" onMouseLeave={onMouseOut}>
      <Form.Group>
        <Form.ControlLabel>Question {index + 1}:</Form.ControlLabel>
        <Form.Control
          value={obj.question}
          name="q-1"
          onChange={(text) => {
            setQuestions((questionArr) => {
              return [
                ...questionArr.slice(0, index),
                { question: text },
                ...questionArr.slice(index + 1),
              ];
            });
          }}
        ></Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.ControlLabel>Answer Choice:</Form.ControlLabel>
        <Stack className={"dim-spaced"} spacing={15}>
          <TagGroup>
            {obj.choices.map((item, index) => (
              <Tag
                key={index}
                closable
                size={"lg"}
                onClose={() => handleTagRemove(item)}
              >
                {item}
              </Tag>
            ))}
          </TagGroup>
          {renderInput()}
        </Stack>

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
      </Form.Group>
    </div>
  );
}
