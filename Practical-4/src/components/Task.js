import "./Task.css";
function Task(props) {
  
  return (
    <div className="task-item">
      <div className="task-item-description">{props.description}</div>
      <div className="task-item-checkbox-button">
          <input type="checkbox" name="key" value="value" />
      </div>
    </div>
  );
}

export default Task;
