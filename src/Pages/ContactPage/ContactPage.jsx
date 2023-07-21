import React from 'react';
import { ContactPageContainer, ContactTitle, ContactContent } from './ContactPage.style';
import ContactForm from '../../component/ContactForm/ContactForm';

const ContactPage = () => {
  return (
    <ContactPageContainer>
      <ContactTitle>Contact Us</ContactTitle>
      <ContactContent>
        <p>
          If you have any questions, feedback, or inquiries, feel free to get in touch with us using the contact form below.
        </p>
        <ContactForm/>
        </ContactContent>
    </ContactPageContainer>
  );
};

export default ContactPage;
