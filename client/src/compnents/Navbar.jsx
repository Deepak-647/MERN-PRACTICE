import { Link } from "react-router-dom";
import { useAuth } from "../store/auth";

const Navbar = () => {
  const { isloggedIn } = useAuth();
  return (
    <div>
      <header>
        <div className="container">
          <div className="logo-brand">
            <Link to="/">Beyond Tech</Link>
          </div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              {isloggedIn ? (
                <li>
                  <Link to="/logout">Logout</Link>
                </li>
              ) : (
                <>
                  <li>
                    <Link to="/register">Register</Link>
                  </li>
                  <li>
                    <Link to="/login">Log In</Link>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
