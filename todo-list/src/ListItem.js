import React from "react";

export default function ListItem(props) {
  const { name, done } = props.todo;
  return (
    <div class="container">
    <li style={{ textDecoration: done ? "line-through" : "" }}>
      {name}
      {!done ? <button onClick={props.completed}>Completed</button> : ""}
      <button onClick={props.remove}>Remove</button>
    </li>
    </div>
  );
}
