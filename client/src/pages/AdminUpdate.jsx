import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
 import { useAuth } from "../store/auth";

export const AdminUpdate = () => {

    const [data,setData] = useState({
        username:"",
        email:"",
        phne:""
    });
 const params = useParams();
 const {authorizationToken} =useAuth();
    //get single user data
    const getSingleUserData = async () =>{
        try{
            const response = await fetch(`http://localhost:5000/api/admin/users/${params.id}`,{
                method:"GET",
                headers : {
                    Authorization : authorizationToken
                }
            })
            const data = await response.json();
            console.log(data)
             setData(data);
        }catch(error){
            console.log(error);
        }
        

    }
    useEffect(()=>{
        getSingleUserData();
    },[])
    const handleInput = () =>{}
  return ( <>
  <h1>Update User</h1>
  <br />
  <form>
                  <div>
                    <label htmlFor="username">Username</label>
                    <input
                      type="text"
                      name="username"
                      placeholder="username"
                      id="username"
                      value={data.username}
                      onChange={handleInput}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="email"
                      id="email"
                      value={data.email}
                      onChange={handleInput}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="number"
                      name="phone"
                      placeholder="phone"
                      id="phone"
                      value={data.phone}
                      onChange={handleInput}
                      required
                    />
                  </div>
                  <br />
                  <button type="submit">Update</button>
                </form>
  </>

    
  )
}

 