import React, { useEffect, useState } from 'react';
import { Form, Field, withFormik } from 'formik';
import { connect } from 'react-redux';
import * as Yup from 'yup';

// axios post action 
import { postLoginData } from '../actions/index.js';

const LoginForm = ({ errors, touched, values, handleSubmit, status, props}) => {

    // hook keeps track of login information 
    const [login, setLogin] = useState({});

    // update login if change has occured 
    useEffect(() => {
        if (status) {
            setLogin(user => ({...login, user}))
        }
    }, [status]); 

    return(
        <div className="form-container">
       
        <h1>Sign In</h1>

        <Form className="form">
            
            {/* name */}
            <Field 
                type="text" 
                name="name" 
                placeholder="Name"
                className="field" 
            />
            {touched.name && errors.name && ( <p className="error">{errors.name}</p> )}


            {/* password */}
            <Field 
                type="text" 
                name="password" 
                placeholder="Password" 
                className="field" 
            />
            {touched.name && errors.name && <p className="error">{errors.name}</p>}

            <button type="submit" className="button">Submit</button>
        </Form>

      </div>
    );
};

// using formik 
const FormikLoginForm = withFormik({
    
    // making sure each prop has a default value if given value is undefined 
    mapPropsToValues({ name, password }) {
      return {
        name: name || "",
        password: password || ""
      };
    },
    
    // use yup to enforce input requirements 
    validationSchema: Yup.object().shape({
        name: Yup
        .string()
        .required("Please Enter Your Name"),
        password: Yup
        .string()
        .required("Please Enter Your Password"),
    }),
    
    // update values and set status 
    handleSubmit(values, { resetForm, props, setStatus }) {
        
        console.log("values, props", values, props)

        props.postLoginData(values);

        resetForm(); 
    }

})(LoginForm); // currying functions
  
const mapStateToProps = state => {
    return {
        credIsLoading: state.credIsLoading,
        credentials: state.login
        };
    };
    
    export default connect(
        mapStateToProps,
        { postLoginData }
)(FormikLoginForm);