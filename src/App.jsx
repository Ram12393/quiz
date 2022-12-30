import logo from './logo.svg';
import './App.css';
import dron from './assets/dron.png'
import quiz from './quiz.json'
import React, { useState, useEffect } from 'react';


function App() {
  const [currentQuestionCount, setcurrentQuestionCount] = useState(1)
  const [quizData, setQuizData] = useState(quiz[0]);
  const [counter, setCounter] = useState(5);
  const [answer, setAnswer] = useState()

  const timerAndQuestinDisplay = () => {
    return setInterval(() => {
      counter > 0 && setCounter(counter - 1);
      if (counter === 0 && currentQuestionCount < quiz.length) {
        setQuizData(quiz[currentQuestionCount])
        setCounter(5);
        setAnswer();
        setcurrentQuestionCount(currentQuestionCount + 1)
      }
    }, 1000);
  }



  const currentQuestinAnswer = (answer) => {
    setAnswer(answer)
  }

  useEffect(() => {
    const timer = timerAndQuestinDisplay();

    return () => clearInterval(timer);
  }, [counter]);

  return (
    <div className='w-full h-screen p-5 text-center bg-[#E9F0FF]'>
      <div className="inline-block bg-[#FFF] p-5 text-center rounded overflow-hidden shadow-lg">
        <div className={`border rounded-full round inline-block px-8 py-6 bg-[#ff8ea0] border-[#FDD7DF]`}>
          <p className='text-gray-700 text-4xl text-[#FFF] font-bold'>{counter}</p>
        </div>
        <div className='flex justify-center items-center m-10'>
          <img className="w-40" src={dron} alt="Dron images"></img>
        </div>
        {
          <div className="px-6 py-4 flex flex-col items-start">
            <div className="font-bold text-xl mb-2">{quizData.question}</div>
            <div className="px-6 pt-4 pb-2">
              {answer && <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{answer}</span>}
            </div>
            <div className='flex'>
              {quizData.options.map((ele, i) => {
                return (
                  <button key={i} onClick={() => currentQuestinAnswer(ele)} className={`m-3 ${answer == ele && "bg-blue-500 text-white"} bg- hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded`}>
                    {ele}
                  </button>
                )
              })}
            </div>
          </div>
        }


      </div>
    </div >
  );
}

export default App;

// className= {answer ? "bg - blue - 500" : "hover:bg-blue-500"} blue-500 text-white