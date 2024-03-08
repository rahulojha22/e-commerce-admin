import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as actions from '../redux/actions';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');  
  const [password, setPassword] = useState('');    
  const navigate = useNavigate();

  const { UserDetails } = actions;

  const loginUser = ()=>{    
    const postData = {
      email: email,
      password: password
    }
    dispatch(UserDetails.UserLogin(postData)).then(res=>{      
      if(res.payload.success){        
        navigate('/user/dashboard');
      }      
    }).catch(error=>{

    });    
  }

  // useEffect(()=>{    
  //   let userDetail = {
  //       fName: 'Rahul1',
  //       lName: 'Ojha1',
  //       userEmail: 'r1@g.com',
  //       userMoNum: 2345,
  //       userPassword: 1111,
  //       isActive: true,
  //       isDeleted: false
  //   }
  //   dispatch(UserRegistraion(userDetail));
  // },[]);

  return (
    <div className='container-fluid login-style'>
        <div className='d-flex justify-content-center'>
            <div className="card col-6">
              <div className="card-header">
                <h2>Login</h2>
              </div>
              <div className="card-body">
                <div className="mb-3 row">
                  <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
                  <div className="col-sm-10">
                    <input type="text" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                  </div>
                </div>
                <div className="mb-3 row">
                  <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                  <div className="col-sm-10">
                    <input type="password" className="form-control" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                  </div>
                </div>
              </div>
              <div className="card-footer">                
                <button type="button" className="col-2 float-right btn btn-success btn-sm" onClick={loginUser}>Login</button>
              </div>
            </div>
        </div>      
    </div>
  )
}

export default Login
