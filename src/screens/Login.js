import React, { useEffect, useState } from 'react'
import { loginUser } from '../services/login.service';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const [user,setUser] = useState({
    email: "",
    password: ""
})

const navigate = useNavigate();
// const [isSigned,setSignUp] = useState(false);

const handleChange = (e) => {
    setUser({...user,[e.target.name]:e.target.value});
}

const handleLogin = async(e) => {
   e.preventDefault();
   try {
    const response = await loginUser(user);
    console.log(response);
    if(response.status === "success"){
      navigate('/');
      localStorage.setItem("authToken",response.access_token);
    }
} catch (error) {
    console.log(error.message);
}
}

useEffect (() => {
  localStorage.removeItem("authToken");
},[])

  return (
    <div className='container'>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" name='email' value={user.email} onChange={handleChange}/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" name='password' value={user.password} onChange={handleChange}/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
  )
}

export default Login
