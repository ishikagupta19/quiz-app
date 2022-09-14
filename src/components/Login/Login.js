import React, {useState} from 'react';
import swal from 'sweetalert';
import { NavLink, useNavigate } from 'react-router-dom';
import "./Login.css";

const Login = () => {

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = async(e) =>{
    e.preventDefault();
    
    const res = await fetch('/signin', {
      method:"POST",
      headers:{
        "Content-Type" : "application/json"
      },
      body:JSON.stringify({
        email,
        password
      })
    } );

    const data = res.json();
    
    if(res.status === 400 || !data){
      swal({
        title: "ERROR!",
        text: "Please enter all details",
        icon: "warning",
        dangerMode: true,
      })
      return console.error();
     
    } else{
      
      swal({
        icon: "success",
        text:"Login Successfull"
      });
      navigate("/");
    }
  }

  return ( <>
             <div class="background">
  <div class="container">
    <div class="screen">
      <div class="screen-header">
        <div class="screen-header-left">
          <div class="screen-header-button close"></div>
          <div class="screen-header-button maximize"></div>
          <div class="screen-header-button minimize"></div>
        </div>
        <div class="screen-header-right">
          <div class="screen-header-ellipsis"></div>
          <div class="screen-header-ellipsis"></div>
          <div class="screen-header-ellipsis"></div>
        </div>
      </div>
      <div class="screen-body">
        <div class="screen-body-item left">
          <div class="app-title">
            <span>SIGN</span>
            <span>IN</span>
          </div>
          <br/>
          <div className="signin-image">
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
            <NavLink to = "/signup" className="signin-img-link">Create an account</NavLink>
        </div>
          
        </div>
        <div class="screen-body-item">
          <div class="app-form" >
          <form class="app-form123" method="POST">
            <div class="app-form-group">
              <input class="app-form-control" type="email" name="email" id="email" autoComplete="off"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
                          placeholder="abcdef@abc.com" />
            </div>
            <br/>
            <div class="app-form-group">
              <input class="app-form-control" type="password" name="password" id="password" autoComplete="off"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
                          placeholder="*******" />
            </div>
           
            <div class="app-form-group buttons">
              <br/>
              <button class="btn btn-light" type="submit" name="signup" id="signup" onClick={loginUser}>Sign In</button>
              {/* <button class="app-form-button">SEND</button> */}
            </div>
            </form>
          </div>
        </div>   
      </div>
    </div>
    
  </div>
</div>

  </> 
  )
};

export default Login;
