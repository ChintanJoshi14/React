import React from 'react';
import './TextField.css';
import { ErrorMessage ,useField } from 'formik';
import {Input} from 'antd';


class TextField extends React.Component {
    constructor(props) {
        super(props)
        this.state= {
            name: [this.props.name]

        }
        //to check if data is coming from the parent component:
        console.log(this.state.name);
    }
    
render() {
    const {name} = this.state;
    return(
        <div className='textfield-layout'>
            <label htmlFor={this.state.name}>{this.props.label}</label>
            <br/><Input {...this.state.name === 'password' || this.state.name === 'confirmPassword' ? 'typePass' : 'typeText'} 
            {...this.props.field} 
            {...this.state.label}>
                </Input><br/>
            <ErrorMessage name={this.state.name}/>
        </div>
    );
}
}

export default TextField;