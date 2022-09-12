import React from 'react';
import { useState } from 'react';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import './Question.css';

const Question = ({
        currQues,
        setCurrQues,
        questions,
        options,
        correct,
        score,
        setScore,
        setQuestions,
            
})=>{

    const [selected, setSelected] = useState();
    const [error, setError] = useState(false);

    const handleSelect = (i) =>{
        if(selected===i && selected===correct){
            return "select";
        }
        else if(selected===i && selected!==correct){
            return "Wrong!";
        }
        else if(i===correct){
            return "select";
        }
    };

    const handleCheck =(i) => {
        setSelected(i);
        if(i===correct) setScore(score+1);
        setError(false);
    };

  return (
    <div className='question'>
    <h1>Question {currQues+1}</h1>
    <div className='singleQuestion'>
        <h2>{questions[currQues].question}</h2>
        <div className='options'>
            {error && <ErrorMessage>{error}</ErrorMessage>}

                {
                    options &&
                    options.map((i) => (
                        <button 
                    onClick={() => handleCheck(i)}
                    className={`singleOption ${selected && handleSelect(i)}`}
                    key={i}
                    disabled={selected }
                    >
                    {i}
                    </button>
                    )
                )}

        </div>
    </div>
    </div>

  )
}

export default Question