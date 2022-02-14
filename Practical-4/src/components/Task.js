import React, { useState } from 'react';
import "./Task.css";
function Task(props) {
  const [checked, setChecked] = useState(false);

    function changeStatus() {
        setChecked(!checked);
    }
  return (
    <div className="task-item">
      <div className={checked ? 'strike' : 'task-item-description'}>{props.description}</div>
      <div className="task-item-checkbox-button">
          <input type="checkbox" name="key" value="value" onClick={changeStatus}/>
      </div>
    </div>
  );
}

export default Task;
