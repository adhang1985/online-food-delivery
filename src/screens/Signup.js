import React, { useState } from 'react'
import { createUser } from '../services/user.service';
import { Link } from 'react-router-dom';

const Signup = () => {

    const [user,setUser] = useState({
        name : "",
        location : "",
        email: "",
        password: ""
    })
    const [isSigned,setSignUp] = useState(false);

    const handleChange = (e) => {
        setUser({...user,[e.target.name]:e.target.value});
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log(user);
        try {
            const response = await createUser(user);
            console.log(response);
            response.success === true ? setSignUp(true) : setSignUp(false);
            //setSignUp(true);
        } catch (error) {
            console.log(error.message);
            setSignUp(false);
        }
    }

  return (
    <div className='container'>
        {!isSigned ? 
            <>
                <h2>Sign up</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" name='name' value={user.name} onChange={handleChange}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="location" className="form-label">Location</label>
                        <input type="text" className="form-control" id="location" name='location' value={user.location} onChange={handleChange}/>
                    </div>
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
            </>
            :
            <div>
                <h3>Thank You {user.name}</h3>
                <p>Your registration is done successfully</p>
                <div>Click <Link to={'/login'}>here</Link> to login.</div>
            </div>
        }
    </div>
  )
}

export default Signup
