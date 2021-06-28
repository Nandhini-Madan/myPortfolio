import React from "react";
import { Form, Input, Button, Space } from 'antd';
import "../components/Contact.css";
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
/* eslint-disable no-template-curly-in-string */

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
/* eslint-enable no-template-curly-in-string */

const scriptURL = 'https://script.google.com/macros/s/AKfycbyhNxMos2ipjVhT7xtbmsMjEu9SFpvFCmV0bBp_FMhEf38LSEb4cB7l_onDsTtpWQl_bQ/exec'
const form = document.forms['submit-to-google-sheet']

const Contact = () => {

  const addEventListener = e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  };
  /*
  const SubmitForm = event => {
    event.preventDefault();
    console.log("Formdata", FormState);
    axios.post("https://silent-auction-kb.herokuapp.com/api/auth/register", FormState, {withCredentials: true})
    .then(res => {
        console.log(res);
        history.push("/login");
      })
      .catch(err => {
          console.log("invalid login.", err);
      })    
}*/
  return (
    <div>

      <Form name="submit-to-google-sheet" >
        <input name="email" type="email" placeholder="Email" required />
        <input name="firstName" type="text" placeholder="First Name" />
        <input name="lastName" type="text" placeholder="Last Name" />
        <button type="submit" onClick={addEventListener}>Send</button>
      </Form>
    </div>
  )
}
export default Contact;