import React, {useState} from 'react';
import swal from 'sweetalert';
import { NavLink, useNavigate } from 'react-router-dom';
import "./Signup.css";


const Signup = () => {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "", email:"", phone:"",work:"", password:"", cpassword:""
  });
  
  let name, value;
  
  const handleInputs = (e) =>{
    console.log(e);
    name = e.target.name;
    value = e.target.value;
  
    setUser({...user, [name] : value});
  }

  const PostData =  async(e) => {
      e.preventDefault();

      const {name, email, phone, work, password, cpassword} = user;

      const res = await fetch("/register", {
        method:"POST",
        headers: {
          "Content-Type" : "application/json"
        },
        body: JSON.stringify({
          name, 
          email, 
          phone, 
          work, 
          password, 
          cpassword
        })
      });

      const data = res.json();

      if (res.status === 422 || !data) {
        swal({
          title: "ERROR!",
          text: "Please enter all details",
          icon: "warning",
          dangerMode: true,
        })
        console.log("Invalid Registration");

      }else{
        
        swal({
          icon: "success",
          text:"Registeration Successfull"
        });

        navigate(`/login`);
      }
  };
 

  return <>
  
  <div class="background">
  <div class="container">
    <div class="screen">
      <div class="screen-header mt-5">
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
            <span>UP</span>
          </div>
          <div className="signup-image">
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/><br/>
           <br/>
           <br/>
           <br/>
           <br/>
            <NavLink to = "/login" className="signup-img-link">I am already Registered</NavLink>
        </div>
        
        </div>
        <div class="screen-body-item1">
        <form method="POST" className='register-form' id='register-form'>
          <div class="app-form">
            <div class="app-form-group1">
                  <label htmlFor="name">
                      <i class="zmdi zmdi-account zmdi-hc-lg"></i>
                  </label>
              <input class="app-form-control" type="text" name="name" id="name" autoComplete="off" value={user.name} onChange={handleInputs} placeholder="Your Name" />
            </div>
           
            <div class="app-form-group1">
            <label htmlFor="email">
                          <i class="zmdi zmdi-email material-icons-name"></i>
                          </label>
              <input class="app-form-control" type="text" name="email" id="email" autoComplete="off" value={user.email} onChange={handleInputs}
                          placeholder="email" />
            </div>
            
            <div class="app-form-group1">
            <label htmlFor="phone">
                          <i class="zmdi zmdi-phone-in-talk material-icons-name"></i>
                          </label>
              <input class="app-form-control" placeholder="CONTACT NO" type="phone" name="phone" id="phone" autoComplete="off" value={user.phone} onChange={handleInputs} />
            </div>
         
            <div class="app-form-group1">
            <label htmlFor="work">
                          <i class="zmdi zmdi-slideshow material-icons-name"></i>
                          </label>
              <input class="app-form-control" type="text" name="work" id="work" autoComplete="off" value={user.work} onChange={handleInputs}
                          placeholder="Your Profession" />
            </div>
            
            <div class="app-form-group1">
            <label htmlFor="password">
                          <i class="zmdi zmdi-lock material-icons-name"></i>
                          </label>
              <input class="app-form-control" type="password" name="password" id="password" autoComplete="off" value={user.password} onChange={handleInputs}
                          placeholder="Your Password" />
            </div>
       
            <div class="app-form-group1">
            <label htmlFor="cpassword">
                          <i class="zmdi zmdi-lock material-icons-name"></i>
                          </label>
              <input class="app-form-control" type="password" name="cpassword" id="cpassword" autoComplete="off" value={user.cpassword} onChange={handleInputs}
                          placeholder="Confirm Password" />
            </div>
            <div class="app-form-group buttons">
              
              <br/>
              <button class="btn btn-light" type="submit" name="signup" id="signup" value="Register" onClick={PostData}>Sign In</button>
              {/* <button class="app-form-button">SEND</button> */}
            </div>
           
          </div>
          </form>
        </div>   
        
      </div>
    </div>
   
  </div>
</div>
  
  

</>

};

export default Signup;
