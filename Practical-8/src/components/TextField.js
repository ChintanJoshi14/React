import React from 'react';
import './TextField.css';
import { ErrorMessage ,useField } from 'formik';
import {Input} from 'antd';


class TextField extends React.Component {
    

    // const [field, meta] = useField(props);
render() {
    const {field} = this.props.name;
    // console.log(this.props);
    return(
        <div className='textfield-layout'>
            <label htmlFor={this.props.name}>{this.props.label}</label>
            <br/><Input {...this.props.name === 'password' || this.props.name === 'confirmPassword' ? 'typePass' : 'typeText'} {...this.props.field} {...this.props.label}></Input><br/>
            <ErrorMessage name={this.props.name} />
        </div>
    );
}
}

export default TextField;