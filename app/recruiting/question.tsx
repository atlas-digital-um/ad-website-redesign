import { useState, useRef, useEffect } from "react";
import { arrow_down } from "../svg";

type FAQ = {
  question: string;
  answer: string;
};

export const Question = ({ faq }: { faq: FAQ }) => {
  const [isOpen, setIsOpen] = useState(false);
  const question = faq.question;
  const [answerHeight, setAnswerHeight] = useState(0);
  const answer = faq.answer;

  const answerRef = useRef<HTMLDivElement>(null);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const updateHeight = () => {
      if (answerRef.current) {
        setAnswerHeight(answerRef.current.scrollHeight + 24);
      }
    };

    updateHeight();

    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);

  }, [answer]);

  return (
    <div
      className="group cursor-pointer rounded-xl overflow-hidden bg-ad-dark bg-opacity-50 shadow-glow"
      onClick={toggleOpen}
    >
      <div className="p-6 pb-4 flex justify-between items-center space-x-8">
        <h3 className={`text-lg ${isOpen ? "font-semibold" : ""}`}>{question}</h3>
        <div className={`transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}>{arrow_down}</div>
      </div>
      <div
        className={`py-0 overflow-hidden transition-all duration-300 ease-out ${isOpen ? 'opacity-100' : 'opacity-0'}`}
        style={{ height: isOpen ? `${answerHeight}px` : '8px' }}
      >
        <div className="px-6"><div ref={answerRef} className="mb-6">{answer}</div></div>
      </div>


    </div>
  );
};

export default Question;