import React from 'react';
import {
  ContactUsContainer,
  DesktopSideDiv,
  DesktopSideDivHeader,
  DesktopSideDivSubtext,
  FormContainer,
  FormHeader,
} from './ContactUs.styled';
import ContactForm from './ContactForm';

const ContactUs = () => {
  return (
    <div style={{ width: '100%', backgroundColor: '#ffffff' }}>
      <ContactUsContainer>
        <DesktopSideDiv>
          <DesktopSideDivHeader>Contact Us</DesktopSideDivHeader>
          <DesktopSideDivSubtext>
            Get in touch with us to experience our amazing services and great user experience.
          </DesktopSideDivSubtext>
        </DesktopSideDiv>
        <FormContainer>
          <FormHeader>Get in touch with us</FormHeader>
          <ContactForm />
        </FormContainer>
      </ContactUsContainer>
    </div>
  );
};

export default ContactUs;
