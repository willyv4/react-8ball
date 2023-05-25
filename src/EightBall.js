import { useState } from "react";
import "./EightBall.css";

const EightBall = ({ answers }) => {
  const shuffle = (answers) => {
    const rand = Math.floor(Math.random() * answers.length);
    return answers[rand];
  };

  const question = "Think of a Question";
  const [currAnswer, setCurrAnswer] = useState(question);
  const color = currAnswer.color ? currAnswer.color : "bg-slate-500";
  const msg = currAnswer.msg ? currAnswer.msg : currAnswer;

  return (
    <div
      onClick={() => setCurrAnswer(shuffle(answers))}
      className={`rounded-full w-96 h-96 ${color} ml-auto mr-auto mt-20 shadow-[20px_135px_120px_-55px_rgba(0,0,0,1)] relative overflow-hidden`}
    >
      <div className="rounded-full w-full h-full bg-gradient-to-b from-gray-300 via-white to-gray-300 opacity-10 absolute top-0"></div>
      <div className="rounded-full w-full h-full bg-gradient-to-t from-gray-700 via-black to-gray-700 opacity-80 absolute bottom-0"></div>
      <div className="text-white font-bold absolute bottom-44 right-24 flex justify-center items-center w-48 h-12">
        {msg}
      </div>
      <div className="glare"></div>
    </div>
  );
};

export default EightBall;
