import React from 'react';
import './TextField.css';
import { ErrorMessage ,useField } from 'formik';

class TextField extends React.Component {
    

    // const [field, meta] = useField(props);
render() {
    const {field} = this.props.name;
    // console.log(this.props);
    return(
        <div className='textfield-layout'>
            <label htmlFor={this.props.name}>{this.props.label}</label>
            <br/><input {...this.props.name === 'password' || this.props.name === 'confirmPassword' ? 'typePass' : 'typeText'} {...this.props.field} {...this.props.label}></input><br/>
            <ErrorMessage name={this.props.name} />
        </div>
    );
}
}

export default TextField;