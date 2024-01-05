import { Navigate, Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import {useAuth} from "../../store/auth"; 

export const AdminLayout = () => {
  const {user,isLoading} = useAuth();
  console.log("admin layoutt",user)

  if(isLoading){
    return <h1>Loading ...</h1>
  }
  if(!user.isAdmin){
    return <Navigate to="/"/>
  }
  return (
    <>
      <header>
        <div className="container">
          <nav>
            <ul>
              <li>
                <Link to="/admin/users">Users</Link>
              </li>
              <li>
                <Link to="/admin/contacts">Contacts</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/">Home</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <Outlet />
    </>
  );
};
