import React from 'react';
import './TextField.css';
import { ErrorMessage ,useField } from 'formik';

function TextField(props) {

    const [field, meta] = useField(props);

    return(
        <div className='textfield-layout'>
            <label htmlFor={props.name}>{props.label}</label>
            <br/><input type='text' {...field}{...props.label}></input><br/>

            <ErrorMessage name={props.name} />
        </div>
    );
}

export default TextField;