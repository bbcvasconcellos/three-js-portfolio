import { FormEvent, useRef, useState } from "react";
import emailjs from '@emailjs/browser';

import { env } from "../../../env";

import { MapCharter } from "../Map";
import { Button, Form, Input, LeftSide, RightSide, Section, TextArea, Title } from "./styles";
import { Toast } from "../Toast";

export const Contact = () => {
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [error, setError] = useState(false);
  // create a controlled component to validate the form
  const form = useRef<HTMLFormElement>(null);  
  
  const handleSubmit = async(e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const FORM_SIZE = 3;
    const formData = new FormData(form.current!);
    let inputData = [];

    for (const value of formData.values()) {
      if (value.length) {
        inputData.push(value);
      }
    }

    if (inputData.length < FORM_SIZE) {
      setError(true);
      return;
    }
    
    emailjs
    .sendForm(
      env.REACT_APP_EMAIL_SERVICE_ID as string, 
      env.REACT_APP_EMAIL_TEMPLATE_ID as string,
      form.current as HTMLFormElement | string, 
      env.REACT_APP_EMAIL_PUBLIC_KEY as string
    )
    .then((result) => {
        console.log(result.text);
        setIsSuccessful(true);
    }, (error) => {
        console.log(error.text);
        setIsSuccessful(false);
    });
  }

  const handleOnClick = () => {
    setIsSuccessful(false);
    setError(false);
  }

  return (
    <Section>
      <LeftSide>
        <Form 
          ref={form}  
          onSubmit={handleSubmit}
          name="form"
        >
          <Title>Contact Us</Title>
          <Input 
            placeholder="Name" 
            name="name" 
            maxLength={100}
          />
          <Input 
            placeholder="Email" 
            name="email"
            maxLength={100}
          />
          <TextArea 
            placeholder="Write your message" 
            name="message"
            rows={10}
            maxLength={500}
          />
          <Button 
            type="submit" 
            onClick={handleOnClick}
          >
            Send
          </Button>
          {isSuccessful && 
            <Toast 
              duration={8} 
              message="Your email was submitted! ✅" 
            /> 
          }
          {error && 
            <Toast 
              duration={8}
              message="Please fill up all the required inputs"
            />
          }
        </Form>
      </LeftSide>
      <RightSide>
        <MapCharter />
      </RightSide>
    </Section>
)}