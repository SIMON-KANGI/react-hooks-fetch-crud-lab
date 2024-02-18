import React, { useEffect, useState } from "react";

function QuestionList() {
  const [questions, getQuestions]=useState([])
console.log(questions)
  useEffect(()=>{
    fetch('http://localhost:4000/questions')
    .then(res=>res.json())
    .then(data=>getQuestions(data))
  },[])
  console.log(questions)
  function handleDelete(id){
    fetch(`http://localhost:4000/questions/${id}`,{
      method:"Delete"
    }).then(res=>res.json())
    getQuestions(questions.filter(question=>question.id !==id))

  }
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
      {
        questions.map((question)=>{
          return(
            <div key={question.id}>
             <li >{question.prompt}</li>
             <ul>
              {question.answers.map((answer,index)=><li key={index}>{answer}</li>)}
              
             </ul>
             <button onClick={()=>handleDelete(question.id)}>Delete Question</button>
             </div>
           
            
          )
        })
      }
      </ul>
    </section>
  );
}

export default QuestionList;



