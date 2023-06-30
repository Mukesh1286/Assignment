import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify'
import { register } from '../features/auth/authSlice'
import Spinner from '../components/Spinner';







const Register = () => {

const dispatch = useDispatch();
const navigate = useNavigate()

const [user, setUser] = useState({
       
    FirstName: "",
    LastName: "",
    email: "",
    Phone: "",
      });
//   console.log("user:",user)
 useEffect(()=>{

//   if (isError) {
//     toast.error(message)
//   }
    // if(isSuccess){
    //   toast.success("Login Success")
    //   navigate("/Dashboard")
    // }
    // return () => {
    //   dispatch(reset())
    // }
 },[ navigate, dispatch]);



const handleSubmit = (e) =>{
  e.preventDefault();

  dispatch(register(user))
  toast.success("Login Success")
      navigate("/Dashboard")
}

// if(isLoading){
//   return <Spinner/>
// }

  return (
    <div className='adminlogin'>
        <div className="m-5 container1 pt-3 pb-4">
          <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            
            <div className="form-control1 mt-2">
              <input type="userName" required 
              placeholder='Enter First Name'
              onChange={(e) => setUser({ ...user, FirstName: e.target.value })}
              />
              
            </div>
            <div className="form-control1 mt-2">
              <input type="userName" required
              placeholder='Enter Last Name' 
              onChange={(e) => setUser({ ...user, LastName: e.target.value })}
              />
              
            </div>
            <div className="form-control1 mt-2">
              <input type="email" required 
              placeholder='Enter Email'
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
              
            </div>
            <div className="form-control1 mt-2">
              <input type="Phone" required
              placeholder='Enter Phone Number' 
              onChange={(e) => setUser({ ...user, Phone: e.target.value })}
              />
              
            </div>
            
            
            
           
            <div className="add mt-2">
              <button type="submit" className="addUser p-2 ps-4 pe-4 button-section">
             Register
              </button>
             
            </div>
          </form>
         
        </div>
        
    </div>
    
  )
}

export default Register