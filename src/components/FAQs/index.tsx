import React from 'react';
import Accordion from './Accordion';
import { FAQAccordionContainer, FAQContainer, SectionTagLine } from './FAQs.styled';

const faqItems = [
  {
    question: 'What is Crestbase?',
    answer: 'Crestbase offers a range of pricing plans to suit your needs and budget.',
  },
  {
    question: 'How do I get started with Crestbase? ',
    answer:
      'To get started with Crestbase, simply create an account on our website and start outlining your values and setting goals. From there, you can set tasks for yourself and track your progress along the way.',
  },
  {
    question: 'How does Crestbase serve you best?',
    answer:
      'To get started with Crestbase, simply create an account on our website and start outlining your values and setting goals. From there, you can set tasks for yourself and track your progress along the way. To get started with Crestbse, simply create an account on our website and start outlining your values and setting goals. From there, you can set tasks for yourself and track your progress along the way. To get started with Crestbase, simply create an account on our website and start outlining your values and setting goals. From there, you can set tasks for yourself and track your progress along the way.',
  },
  {
    question: 'What is our value proposition?',
    answer:
      'To get started with Crestbase, simply create an account on our website and start outlining your values and setting goals. From there, you can set tasks for yourself and track your progress along the way. To get started with Crestbase, simply create an account on our website and start outlining your values and setting goals. From there, you can set tasks for yourself and track your progress along the way. To get started with Crestbase, simply create an account on our website and start outlining your values and setting goals. From there, you can set tasks for yourself and track your progress along the way.',
  },
];

const FAQs = () => {
  return (
    <FAQContainer>
      <SectionTagLine>Frequently Asked Questions</SectionTagLine>
      <FAQAccordionContainer>
        <Accordion items={faqItems} />
      </FAQAccordionContainer>
    </FAQContainer>
  );
};

export default FAQs;
