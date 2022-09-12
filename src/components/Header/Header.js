import React from 'react';
import {Link}from 'react-router-dom';
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="title">Welcome to Test round</Link>
      <hr className='separate'/>
    </div>
  )
}

export default Header