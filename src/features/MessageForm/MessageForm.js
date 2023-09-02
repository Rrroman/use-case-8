import React, { useState } from 'react';
import Label from '../../components/UI/Label/Label';
import { useDispatch } from 'react-redux';
import { addMessage } from './messageFormSlice';
import classes from './messageForm.module.css';
import isEmail from 'validator/es/lib/isEmail';

const MIN_FIRST_NAME_LENGTH = 3;
const MIN_SECOND_NAME_LENGTH = 3;
const MIN_MESSAGE_LENGTH = 20;

export default function MessageForm() {
  const [firstName, setFirstName] = useState('');
  const [secondName, setSecondName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [firstNameError, setFirstNameError] = useState(false);
  const [secondNameError, setSecondNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const dispatch = useDispatch();

  function saveHandler(e) {
    e.preventDefault();

    if (!isFormValid()) {
      return;
    }

    dispatch(addMessage({ firstName, secondName, email, message }));
  }

  function isFormValid() {
    const isFirstNameValid = isTextValid(firstName, MIN_FIRST_NAME_LENGTH);
    const isSecondNameValid = isTextValid(secondName, MIN_SECOND_NAME_LENGTH);
    const isEmailValid = isEmail(email);
    const isMessageValid = isTextValid(message, MIN_MESSAGE_LENGTH);

    if (
      isFirstNameValid &&
      isSecondNameValid &&
      isEmailValid &&
      isMessageValid
    ) {
      return true;
    }

    if (!isFirstNameValid) {
      setFirstNameError(true);
    }
    if (!isSecondNameValid) {
      setSecondNameError(true);
    }
    if (!isEmailValid) {
      setEmailError(true);
    }
    if (!isMessageValid) {
      setMessageError(true);
    }

    return false;
  }

  function isTextValid(text, minCharacters) {
    return text.trim().length > minCharacters;
  }

  return (
    <form onSubmit={(e) => saveHandler(e)}>
      <fieldset>
        <legend>Write message.</legend>
        <Label
          text="First name:"
          isError={firstNameError}
          errorMessage={'Name should have more than 3 characters.'}
        >
          <input
            type="text"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
              setFirstNameError(false);
            }}
            placeholder="Enter first name"
          />
        </Label>
        <Label
          text="Second name:"
          isError={secondNameError}
          errorMessage={'Second name should have more than 3 characters.'}
        >
          <input
            type="text"
            value={secondName}
            onChange={(e) => {
              setSecondName(e.target.value);
              setSecondNameError(false);
            }}
            placeholder="Enter second name"
          />
        </Label>
        <Label
          text="Email:"
          isError={emailError}
          errorMessage={'Please recheck your email'}
        >
          <input
            type="text"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailError(false);
            }}
            placeholder="Enter email name"
          />
        </Label>
        <Label
          text="Message:"
          isError={messageError}
          errorMessage={'Message should have at least 20 characters'}
        >
          <textarea
            type="text"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
              setMessageError(false);
            }}
            placeholder="Enter your message"
          />
        </Label>
      </fieldset>
      <button className={classes.button} type="submit">
        Save
      </button>
    </form>
  );
}
