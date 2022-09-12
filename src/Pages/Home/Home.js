import {React, useState} from 'react';
import './Home.css';
import {MenuItem, TextField, Button} from '@mui/material';
import Categories from '../../Data/Categories';
import {useNavigate} from "react-router-dom";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";


const Home = ({name, setName, fetchQuestions}) => {

  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleSubmit =() =>{
    if(!name || !category ||!difficulty ){
      setError(true);
      return;
    }
    else{
      setError(false);
      fetchQuestions(category, difficulty);
      navigate("/quiz");
    }
  };

  return (
    <div className='content'>
    <div className='settings'>
    <span style={{fontSize: 25}}>Quiz Settings</span>
      <div className='select_settings'>
      {error && <ErrorMessage>Fill all the fields!</ErrorMessage>}
        <TextField 
        style={{marginBottom: 25}}
        label='Enter your Name'
        variant='outlined'
        onChange={(e) => setName(e.target.value)}  
        />

        <TextField select label = "Select Category"
        variant='outlined'
        style={{marginBottom: 25}}
        onChange={(e) => setCategory(e.target.value)}
        value={category}
        >
        {
          Categories.map((cat ,i) => (
            <MenuItem key={i} value={cat.value}>
                {cat.category}
            </MenuItem>
          ))
        }
          
        </TextField>

        <TextField select 
        label = "Select difficulty "
        variant='outlined'
        style={{marginBottom: 25}}
        onChange={(e) => setDifficulty(e.target.value)}
        value={difficulty}
        >
        
          
            <MenuItem key="Easy" value="easy">
                Easy
            </MenuItem>
            <MenuItem key="Medium" value="medium">
                Medium
            </MenuItem>
            <MenuItem key="Difficult" value="difficult">
                Difficult
            </MenuItem>
          
        
          
        </TextField>

        <Button variant="contained" color ="primary" size='large'
        onClick={handleSubmit}>
          Start Quiz
        </Button>
      </div>
    </div>

    <img src='/quiz.svg' className='banner' alt='quiz_image'/>
    </div>
  )
}

export default Home;