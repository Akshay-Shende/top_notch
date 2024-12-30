import React from 'react'
import FAQSection from '../components/FAQSection';
const Page = () => {
  const FAQs = [
    {
      question: 'How long does a typical car repair take?',
      answer: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    },
    {
      question: 'Do you provide warranty for your repairs?',
      answer: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam quasi laboriosam, sit distinctio culpa magni.',
    },
    {
      question: 'Can I get an estimate for auto repairs before I book an appointment?',
      answer: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam quasi laboriosam, sit distinctio culpa magni.',
    }
  ];

  return <FAQSection faqs={FAQs} />
}

export default Page
