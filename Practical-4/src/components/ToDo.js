import Task from './Task';
import './ToDo.css';
import PlusButton from './PlusButton';
import Date from './Date';

function ToDo(props) {
    return(
        <div className="will-wrap-all-components">
            <Date />
        <Task description={props.items[0].description}/>
        <Task description={props.items[1].description}/>
        <Task description={props.items[2].description}/>
        <Task description={props.items[3].description}/>
        <Task description={props.items[4].description}/>
        <Task description={props.items[5].description}/>
        <Task description={props.items[6].description}/>
        <PlusButton />

        </div>
        
    );
}

export default ToDo;