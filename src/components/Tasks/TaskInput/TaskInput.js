import React, { useState } from "react";
import styled from "styled-components";
import Button from "../../UI/Button/Button";
import styles from "./TaskInput.module.css";

// Использование динамических классов при использовании styled component
// const FormControl = styled.div`
//   margin: 0.5rem 0;

//   & label {
//     font-weight: bold;
//     display: block;
//     margin-bottom: 0.5rem;
//     // Можно использовать функции, которые получают по умолчанию props компонента
//     // В данном случае получаем props, и устанавливаем стили по определенному условию
//     color: ${props => props.invalid ? "red" : "black"}
//   }

//   & input {
//     display: block;
//     width: 100%;
//     border: 1px solid ${props => props.invalid ? "red" : "#ccc"};
//     background: ${props => props.invalid ? "rgb(243, 157, 157)" : "transparent"};
//     font: inherit;
//     line-height: 1.5rem;
//     padding: 0 0.25rem;
//   }

//   & input:focus {
//     outline: none;
//     background: #c8e1e4;
//     border-color: #00358b;
//   }
// `;

const TaskInput = (props) => {
  const [inputText, setInputText] = useState("");
  const [isInputValid, setIsInputValid] = useState(true);

  const taskInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsInputValid(true);
    }
    setInputText(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (inputText.trim().length === 0) {
      setIsInputValid(false);
      return;
    }
    props.onAddTask(inputText);

  };

  return (
    <form onSubmit={formSubmitHandler}>
      {/* Установка динамических стилей */}
      {/* <div className={`form-control ${!isInputValid ? "invalid" : ""}`}> */}
      {/* Установка inline стилей в компонент, отображение стилей по условию */}
      {/* <label style={{ color: !isInputValid ? "red" : "black" }}>Задачи</label>
        <input
          style={{
            borderColor: !isInputValid ? "red" : "black",
            backgroundColor: !isInputValid ? "salmon" : "transparent"
          }}
          type="text"
          onChange={taskInputChangeHandler}
        /> */}
      {/* <label>Задачи</label>
        <input type="text" onChange={taskInputChangeHandler} />
      </div> */}

      {/* Установка динамических классов с помощью styled component */}
      {/* <FormControl className={!isInputValid && "invalid"}> */}
      {/* <FormControl invalid={!isInputValid}>
        <label>Задачи</label>
        <input type="text" onChange={taskInputChangeHandler} />
      </FormControl> */}
      <div className={`${styles["form-control"]} ${!isInputValid && styles.invalid}`}>
        <label>Задачи</label>
        <input type="text" onChange={taskInputChangeHandler} />
      </div>
      <Button type="submit">Добавить Задачу</Button>
    </form>
  );
};

export default TaskInput;
