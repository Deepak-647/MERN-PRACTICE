import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div>
        <header>
            <div className="container">
                <div className="logo-brand">
                    <Link to="/">Beyond Tech</Link>
                </div>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/register">Register</Link></li>
                        <li><Link to="/login">Log In</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    </div>
  )
}

export default Navbar