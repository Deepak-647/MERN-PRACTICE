import { useEffect, useState } from "react"
import { useAuth } from "../store/auth";
import {Link} from 'react-router-dom';
export const AdminUsers = () =>{
    const {authorizationToken} = useAuth();
    const [usersData,setUsersData] =useState([]);
    const getAllUsersData =async ()=>{
        try {
            const response = await fetch('http://localhost:5000/api/admin/users',{
               headers : {
                Authorization : authorizationToken
               } 
            });
            const data = await response.json();
            // console.log(data)
            setUsersData(data);
           
        } catch (error) {
            console.log('Error in Fetching All Users Data')
        }
    }

    //delete the user 
    const deleteUser = async (id) =>{
        try{
            const response = await fetch(`http://localhost:5000/api/admin/users/delete/${id}`,{
                method:"DELETE",
                headers : {
                    Authorization : authorizationToken
                }
            })
            const data = await response.json();
            console.log(data)
            if(response.ok){
                getAllUsersData();
            }
        }catch(error){
            console.log(error);
        }
        

    }
    useEffect(()=>{
        getAllUsersData();
    },[])
    return (
        <div>
            <h1>User List</h1>
            <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
              
                <th>Update</th>
                <th>Delete</th>
            </tr>
        </thead>
        <tbody>
            {usersData.map((user) => (
                <tr key={user._id}>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td><Link to={`/admin/users/${user._id}/edit`}>Edit</Link></td>
                    <td><button onClick={()=> deleteUser(user._id)}>Delete</button></td>
             
                </tr>
            ))}
        </tbody>
    </table>
        </div>
    )
}