import React from "react";

export default function Form(props) {
  return (
    <div >
    <form onSubmit={props.onSubmit} style={{ paddingLeft: 40, marginTop: 16 }}>
      <input
        type="text"
        value={props.value}
        onChange={props.onChange}
        placeholder="Add any task!"
      />
      <button type="submit">Add To Do</button>
    </form>
    </div>
  );
}
