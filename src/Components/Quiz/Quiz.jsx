import React from 'react'
import './Quiz.css';
import { data } from '../../data';

import { useState } from 'react'
export default function Quiz() {
  const [isLast, setisLast] = useState(false);
  const [index, setIndex] = useState(0)
  const [question, setQuestion] = useState(data[index])
  const [score, setScore] = useState(0)
  const [lock, setlock] = useState(false)
  const [lc,setLc]=useState(false);


  function checkAswer(e,ans)
  {
    if(lock===false)
    {
      if(lc===false)
        {
    if(ans === question.ans)
    {
      setScore(score+1);
      e.target.classList.add('correct');
      
    }
    else{
      e.target.classList.add('incorrect');
    }
    setlock(true);
    
  }
  setLc(true);
  }
}

  
  const inc=()=>
    {
      setlock(false);
      setLc(false);
      if(index<data.length-1)
      {
      setIndex(index+1);
      setQuestion(data[index+1]);
    
      }
      else{
        setisLast(true)
      }
      
    }
    if(isLast===true)
    {
      return(
        <h1> Quioz score ={score} </h1>
      )
    }

  return (
    <div className='quiz'>
      <h1>Kod Quiz</h1>
      <h3>{question.question}</h3>
      <ul>
        <li onClick={(e) => {checkAswer(e,'1')}}>{question.opton1}</li>
        <li onClick={(e) => {checkAswer(e,'2')}}>{question.opton2}</li>
        <li onClick={(e) => {checkAswer(e,'3')}}>{question.opton3}</li>
        <li onClick={(e) => {checkAswer(e,'4')}}>{question.opton4}</li>
      </ul>
      <button onClick={inc}>Next</button>
      <div>Question {index+1} of {data.length}</div>
      

    </div>
  )
}
