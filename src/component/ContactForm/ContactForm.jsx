import React, { useState } from 'react';
import { ContactFormContainer, FormTitle, FormInput, FormTextarea, SubmitButton } from './ContactForm.style';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log(formData);
    // Clear form fields after submission
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <ContactFormContainer>
      <FormTitle>Contact Us</FormTitle>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
        />
        <FormTextarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          required
        />
        <SubmitButton type="submit">Submit</SubmitButton>
      </form>
    </ContactFormContainer>
  );
};

export default ContactForm;
