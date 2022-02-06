// Использование css файла как модуля, за место styles может быть любое другое название
// styles название объекта, в котором находятся классы компонента, установка классов дял элементов происходит так - styles.button и т.д.
import styles from "./Button.module.css";
// Использование styled components для создания динамических классов, которое будет генерировать уникальные классы для компонента
import styled from "styled-components";

// const Button = styled.button`
//   width: 100%;
//   font: inherit;
//   padding: 0.5rem 1.5rem;
//   color: white;
//   background: #00358b;
//   border-radius: 4px;
//   box-shadow: 0 0 4px rgba(50, 50, 50, 0.25);
//   cursor: pointer;

//   @media (min-width: 700px) {
//     width: auto;
//   }

//   &:focus {
//     outline: none;
//   }

//   &:hover,
//   &:active {
//     background: #245fbd;
//     box-shadow: 0 0 8px rgba(50, 50, 50, 0.25);
//   }
// `;

const Button = (props) => {
  return (
    <div>
      <button type={props.type} className={styles.button}>
        {props.children}
      </button>
    </div>
  );
};

export default Button;
