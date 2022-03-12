import Task from "./Task";
import "./ToDo.css";
// import PlusButton from "./PlusButton";
import DateComponent from "./DateComponent";
import InputBox from "./InputBox";
import React, { useState } from "react";

function ToDo(props) {
  const [isEditing, setIsEditing] = useState(false);

  function addNewTask(enteredTaskData) {
    const taskData = {
      ...enteredTaskData,
      id: Math.random(),
    };
    props.onAddTask(taskData);
    setIsEditing(false);
  }

  function startEditingHandler() {
    setIsEditing(true);
  }

  function stopEditingHandler(event) {
      setIsEditing(false);
   
  }
  return (
    <div className="will-wrap-all-components">
      <DateComponent />
      {props.items.map((task) => (
        <Task description={task.description} key={task.id} />
      ))}

      {isEditing && <InputBox onAddNewTask={addNewTask} onCancel={stopEditingHandler}/>}
      <div className="button-layout-in-todo">
      {!isEditing && <button onClick={startEditingHandler}>+</button>}
      </div>
    </div>
  );
}

export default ToDo;
