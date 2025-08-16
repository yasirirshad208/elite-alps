"use client";
import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa6';

type Faq = {
  question: string;
  answer: string;
};

type FaqsProps = {
  faqs: Faq[];
};

const Faqs: React.FC<FaqsProps> = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={index}
            className="flex flex-col w-full p-3 rounded-[12px] border border-[#e3e3e3]"
          >
            {/* Question row */}
            <div className="flex justify-between items-center gap-4">
              <div className="font-medium font-[600] text-[#121212]">
                {faq.question}
              </div>
              <button
                onClick={() => toggleFaq(index)}
                className={`w-[40px] h-[40px] rounded-[12px] border flex justify-center items-center cursor-pointer transition-all duration-300 ${
                  isOpen
                    ? 'bg-white text-[#0074ec] border-[#0074ec]'
                    : 'bg-[#0074ec] text-white border-[#0074ec]'
                }`}
              >
                {isOpen ? (
                  <FaMinus className="w-[18px] h-[18px] transition-transform duration-300" />
                ) : (
                  <FaPlus className="w-[18px] h-[18px] transition-transform duration-300" />
                )}
              </button>
            </div>

            {/* Answer block */}
            <div
              className={`overflow-hidden transition-all duration-300 ${
                isOpen
                  ? 'max-h-[500px] opacity-100 mt-4'
                  : 'max-h-0 opacity-0 mt-0'
              }`}
            >
              <div className="font-regular font-[400] text-[#666D80]">
                {faq.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Faqs;
