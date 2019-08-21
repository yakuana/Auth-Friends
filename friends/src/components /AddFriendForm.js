import React, { useEffect, useState } from 'react';
import { Form, Field, withFormik } from 'formik';
import { connect } from 'react-redux';
import * as Yup from 'yup';

// axios post action 
import { postFriendData } from '../actions/index.js';

const AddFriendForm = ({ errors, touched, values, handleSubmit, status, props}) => {

    // hook keeps track of friend 
    const [friend, setFriend] = useState({});

    // update login if change has occured 
    useEffect(() => {
        if (status) {
            setFriend(newFriend => ({...friend, newFriend}))
        }
    }, [status]); 

    return(
        <div className="form-container">
       
        <h1>Add A Friend</h1>

        <Form className="form">
            
            {/* name */}
            <Field 
                type="text" 
                name="name" 
                placeholder="Name"
                className="field" 
            />
            {touched.name && errors.name && ( <p className="error">{errors.name}</p> )}

            {/* age */}
            <Field 
                type="text" 
                name="age" 
                placeholder="Age" 
                className="field" 
            />
            {touched.name && errors.name && <p className="error">{errors.name}</p>}

             {/* email */}
             <Field 
                type="text" 
                name="email" 
                placeholder="Email" 
                className="field" 
            />
            {touched.name && errors.name && <p className="error">{errors.name}</p>}

            <button type="submit" className="button">Submit</button>
        </Form>

      </div>
    );
};

// using formik 
const FormikAddFriendForm = withFormik({
    
    // making sure each prop has a default value if given value is undefined 
    mapPropsToValues({ name, age, email , id }) {
      return {
        name: name || "",
        age: age || "", 
        email: email || "",
        id: Date.now()
      };
    },
    
    // use yup to enforce input requirements 
    validationSchema: Yup.object().shape({
        name: Yup
        .string()
        .required("Please Enter Your Name"),
        age: Yup
        .string()
        .required("Please Enter Your Age"),
        email: Yup
        .string()
        .required("Please Enter Your Age"),
    }),
    
    // update values and set status 
    handleSubmit(values, { resetForm, props, setStatus }) {
        console.log("values, props", values, props)
        
        props.postFriendData(values);

        resetForm(); 
    }

})(AddFriendForm); // currying functions
  
const mapStateToProps = state => {
    return {
        friendIsLoading: state.friendIsLoading,
        friend: state.friend
        };
    };
    
    export default connect(
        mapStateToProps,
        { postFriendData }
)(FormikAddFriendForm);