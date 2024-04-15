import React from "react";
import Data from "./Data";

const Accordion = () => {
  const data = [
    {
        question: "What is your company's name?",
        answer: "Our company's name is Reusable Function Component."
      },
      {
        question: "What services does your company provide?",
        answer: "We provide a wide range of services including web development, mobile app development, and consulting."
      },
      {
        question: "How long has your company been in business?",
        answer: "Our company has been in business for over 10 years."
      },
      {
        question: "What sets your company apart from competitors?",
        answer: "We prioritize customer satisfaction and strive to deliver innovative solutions tailored to our clients' needs."
      },
      {
        question: "Can you provide an example of a successful project your company has completed?",
        answer: "One of our successful projects involved developing a custom e-commerce platform for a client, resulting in a significant increase in online sales and customer engagement."
      }
  ];

  return <>
  
       {
        data.map((item)=>{
            return <Data item={item} />
        })
       }
  
        </>;
};

export default Accordion;
