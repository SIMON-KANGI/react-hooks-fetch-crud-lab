import React from "react";

function QuestionItem({ question }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));
  function handleDelete(questionId){
    fetch(`http://localhost:4000/questions/${questionId}`,{
      method:"Delete"
    }).then(res=>res.json())
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={()=>handleDelete(id)}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
