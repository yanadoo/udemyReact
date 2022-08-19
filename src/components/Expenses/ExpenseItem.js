import React, { useState } from "react";

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  // useState() -> 괄호 () 내 초깃값 할당
  const [title, setTitle] = useState(props.title);
  console.log("ExpenseItem evaluated by React");
  // let title = props.title;

  const clickHandler = () => {
    setTitle("Updated!");
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <div>
        <ExpenseDate date={props.date} />
      </div>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>ChangeTitle</button>
    </Card>
  );
};

export default ExpenseItem;
