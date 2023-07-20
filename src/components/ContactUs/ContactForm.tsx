import React, { useState } from 'react';
import {
  FormEmailDiv,
  FormMessageDiv,
  FormMessageText,
  FormNameDiv,
  FormSubmitbutton,
  Input,
  Label,
} from './ContactUs.styled';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Perform any necessary form submission logic here
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormNameDiv>
        <Label htmlFor='name'>Name:</Label>
        <Input
          type='text'
          id='name'
          name='name'
          value={formData.name}
          onChange={handleChange}
          required
          placeholder='Name'
        />
      </FormNameDiv>
      <FormEmailDiv>
        <Label htmlFor='email'>Email:</Label>
        <Input
          type='email'
          id='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
          required
          placeholder='Email'
        />
      </FormEmailDiv>
      <FormMessageDiv>
        <Label htmlFor='message'>Message:</Label>
        <FormMessageText
          id='message'
          name='message'
          value={formData.message}
          onChange={handleChange}
          required
          placeholder='Message'
        />
      </FormMessageDiv>
      <FormSubmitbutton type='submit'>Send Message</FormSubmitbutton>
    </form>
  );
};

export default ContactForm;
