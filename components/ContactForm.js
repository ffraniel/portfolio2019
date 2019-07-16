import { useState } from "react";
import useInputValue from "../components/hooks/useInputValue.js";

function ContactForm (props) {
  const { selection, setShowForm } = props;

  const name = useInputValue("");
  const phone = useInputValue("");
  const email = useInputValue("");
  const notes = useInputValue("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const form = {
      name: name.value,
      email: email.value,
      phone: phone.value,
      notes: notes.value
    };
    console.log(form);
    setShowForm(false);
  };

  return (
  <form onSubmit={handleFormSubmit}>
    <label htmlFor="name" >Name</label>
    <input className="text-input" type="text" name="name" {...name} />
    <label htmlFor="phone">Phone</label>
    <input className="text-input" type="text" name="phone" {...phone} />
    <label htmlFor="email">Email</label>
    <input className="text-input" type="text" title="email" {...email}/>
    <label htmlFor="notes">Notes</label>
    <input className="text-input" type="textarea" title="notes" {...notes} />
    <input className="basic-button submit-button" type="submit" value="Submit" />
    <style jsx>{`
          .form-container {
            padding: var(--section-padding);
            text-align: center;
            color: var(--main-text-colour);
          }
          form {
            width: 80%;
            margin: 0 auto;
            text-align: center;
          }
          form input {
            width: 80%;
            border: white solid 3px;
            min-height: 1.75rem;
            border-radius: var(--soft-radius);
            font-size: 22px;
            font-color: white;
          }
          .text-input {
            background-color: #ecb4e500;
            margin: 10px;
          }
          label {
            display: block;
          }
          .submit-button {
            display: block;
            margin: 20px auto;
            background-color: var(--positive-green);
          }
        `}</style>
  </form>
  );
}

export default ContactForm;
