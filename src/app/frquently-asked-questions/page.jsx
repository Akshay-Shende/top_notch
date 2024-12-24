import React from 'react'
import FAQSection from '../components/FAQSection';
const Page = () => {
  const FAQs = [
    {
      question: 'What is the first question?',
      answer: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    },
    {
      question: 'What is the second question?',
      answer: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam quasi laboriosam, sit distinctio culpa magni.',
    },
  ];

  return <FAQSection faqs={FAQs} />
}

export default Page
