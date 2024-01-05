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
      // console.log(data)
      setContacts(data);
    } catch (error) {
      console.log("Error in Fetching All Users Data");
    }
  };
  useEffect(() => {
    getAllContactsData();
  }, []);
  return (
    <>
      <h1>AdminContacts</h1>
      <div>
        {contacts.map((contact) => (
          <>
            <p>{contact.username}</p>
            <p>{contact.email}</p>
            <p>{contact.message}</p>
          </>
        ))}
      </div>
    </>
  );
};
