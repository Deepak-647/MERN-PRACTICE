import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

export const AdminUpdate = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    phne: "",
  });
  const params = useParams();
  const { authorizationToken } = useAuth();
  //get single user data
  const getSingleUserData = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/users/${params.id}`,
        {
          method: "GET",
          headers: {
            Authorization: authorizationToken,
          },
        }
      );
      const data = await response.json();
      console.log(data);
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getSingleUserData();
  }, []);
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({
      ...data,
      [name]: value,
    });
  };

  //updating data dynamically
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/users/update/${params.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: authorizationToken,
          },
          body: JSON.stringify(data),
        }
      );
      if (response.ok) {
        toast.success("User Updated Successfully");
      } else {
        toast.error("Error in Updating User");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <h1>Update User</h1>
      <br />
      <form onSubmit={handleSubmit}>
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
  );
};
