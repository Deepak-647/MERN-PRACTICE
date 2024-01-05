import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";

export const AdminContacts = () => {
  const { authorizationToken } = useAuth();
  const [contacts, setContacts] = useState([]);
  const getAllContactsData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/admin/contacts", {
        headers: {
          Authorization: authorizationToken,
        },
      });
      const data = await response.json();
    //   console.log(data)
      setContacts(data);
    } catch (error) {
      console.log("Error in Fetching All Users Data");
    }
  };

      //delete the user 
      const deleteContact = async (id) =>{
        try{
            const response = await fetch(`http://localhost:5000/api/admin/contacts/delete/${id}`,{
                method:"DELETE",
                headers : {
                    Authorization : authorizationToken
                }
            })
            const data = await response.json();
            console.log(data)
            if(response.ok){
                getAllContactsData();
            }
        }catch(error){
            console.log(error);
        }
        

    }

  useEffect(() => {
    getAllContactsData();
  }, []);
  return (
    <>
      <h1>AdminContacts</h1>
      
        {contacts.map((contact) => (
         
            <div key={contact._id}>
              <p>{contact.username}</p>
              <p>{contact.email}</p>
              <p>{contact.message}</p>
              <button onClick={()=> deleteContact(contact._id)}>Delete</button>
            </div>
          
        ))}
      
    </>
  );
};
