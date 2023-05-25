import { useState } from "react";
import { EightBallData, eightBallQuestions } from "./ballData";

const EightBall = () => {
  const shuffle = (data) => {
    const rand = Math.floor(Math.random() * data.length);
    return data[rand];
  };

  const [question, setQuestion] = useState(shuffle(eightBallQuestions));

  return (
    <div className="{rounded-full w-96 h-96 bg-amber-500 ml-auto mr-auto mt-20}">
      <div
        onClick={() => setQuestion(EightBallData)}
        className="rounded-full w-56 h-56 bg-slate-100 justify-center ml-20 mt-20 text-center"
      >
        {question}
      </div>
    </div>
  );
};

export default EightBall;
