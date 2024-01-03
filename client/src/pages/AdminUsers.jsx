import { useEffect, useState } from "react"
import { useAuth } from "../store/auth";
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
            console.log(data)
            setUsersData(data);
           
        } catch (error) {
            console.log('Error in Fetching All Users Data')
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
                    <td>Edit</td>
                    <td>Delete</td>
             
                </tr>
            ))}
        </tbody>
    </table>
        </div>
    )
}