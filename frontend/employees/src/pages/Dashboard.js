import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify'
import { getalluser } from '../features/auth/authSlice'
import Spinner from '../components/Spinner';


const Dashboard = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const {user, isError, isSuccess, isLoading, message} = useSelector((state) => state.auth)



    useEffect(()=>{

        
              dispatch(getalluser())
            
         },[ navigate, dispatch]);

  return (
    <>
    <h3>Employes Details</h3>
   <div>
             <table className="table border shadow">
                 <thead className='thead-dark'>
                     <tr>
                         <th scope="col">#</th>
                         <th scope="col">FirstName</th>
                         <th scope="col">LastName</th>
                         <th scope="col">Email</th>
                         <th scope="col">Phone</th>
                        
                     </tr>
                 </thead>
                 <tbody>
                    {
                      Object.values(user?.users).map((users, index) => (
                        <tr key={index}>
                          <th scope="row" >{index +1}</th>
                         <td >{users.FirstName}</td>
                         <td>{users.LastName}</td>
                         <td>{users.email}</td>
                         <td>{users.Phone}</td>
                         
                        </tr>
                     ))
                    }
                 </tbody>
             </table>
         </div>
    
    </>
  )
}

export default Dashboard