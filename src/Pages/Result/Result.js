import { Button } from 'bootstrap';
import React, {useEffect} from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import "./Result.css";

const Result = ({name, score}) => {

  const Navigate = useNavigate();

  useEffect(() => {
    if(!name){
      Navigate('/');
    }
    
  }, [name, Navigate]);
  

  return (
    <div className='result'>
      <span className='title'> Final Score: {score}</span>
      <Button
      variant="contained"
      color="secondary"
      size="large"
      style={{alignSelf: "center", marginTop: 20}}
      href="/"
      >back to Home Page</Button>
    </div>
  )
}

export default Result;