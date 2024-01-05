/* eslint-disable react/prop-types */
import { createContext, useContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState("");
  const [isLoading,setIsLoading] =useState(true);
  const [courses,setCourses] =useState([]);
  const authorizationToken =`Bearer ${token}`
  const storeTokenInLS = (serverToken) => {
    setToken(serverToken);
    return localStorage.setItem("token", serverToken);
  };

  let isloggedIn = !!token;
  //tackling the logout functionality
  const LogoutUser = () => {
    setToken("");
    return localStorage.removeItem("token");
  };

  //JWT Authentication - to get the currently loggedIn user data
  const userAuthentication = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("http://localhost:5000/api/auth/user", {
        method: "GET",
        headers: {
          Authorization: authorizationToken
        },
      });
      if (response.ok) {
        const data = await response.json();
        console.log("user data", data.userData);
        setUser(data.userData);
        setIsLoading(false);
      }else{
        console.error("Error fetching user data");
        setIsLoading(false);
      }
    } catch (error) {
      console.log("error fetching user data");
    }
  };

//fetching the services data from backend 
const getServices = async () => {
  try {
    const response = await fetch("http://localhost:5000/api/data/service", {
      method: "GET",
    });
    if (response.ok) {
      const data = await response.json();
      setCourses(data.msg);
    }
  } catch (error) {
    console.log(`services frontend error ${error}`);
  }
};
  useEffect(() => {
    getServices();
    userAuthentication();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <AuthContext.Provider
      value={{ storeTokenInLS, LogoutUser, isloggedIn, user ,courses ,authorizationToken ,isLoading}}
    >
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth used outside of the Provider");
  }
  return authContextValue;
};
