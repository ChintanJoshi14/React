import './InputBox.css';
import { useState } from 'react';


function InputBox(props) {
    const [enteredTask, setEnteredTask] = useState('');
    
  // function inputFieldHandler(event) {
  //   useState();
  //   //call inpput text component:
  //   <InputBox />
  // }
  function taskHandler(event) {
      setEnteredTask(event.target.value);
}

  function submitHandler(event) {
      event.preventDefault();
    //   if(event.key == 'Enter' && event.target.value == '') {
    //     alert("please type something!!");

    // }
      setEnteredTask(event.target.value);
        const taskData = {
            description: enteredTask
        };
        props.onAddNewTask(taskData);
        setEnteredTask('');
    
    // alert("working");
    
    // else 
    // if(event.key == 'Enter' && event.target.value != '') {
        // console.log(enteredTask);
        

    }

  
    return (
        <div className="input-box">
            <form onSubmit={submitHandler}>
            <input type="textarea" size="40" id="textbox" value={enteredTask} placeholder='Type something' onChange={taskHandler} required min="1"/>
            <div className="add-task-button-layout">
                <div><button type='button' onClick={props.onCancel}>Cancel</button></div>
                <div><button type='submit'>Add task</button></div>
            </div>
            </form>

        </div>
    );

}

export default InputBox;