/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom"
const ErrorPage = () => {
  return (
    <div>
        <div>
            <h1>404</h1>
            <p>Sorry ! Page Not Found</p>
            <p>
            Oops! It seems like the page you're trying to access doesn't exist.
            If you believe there's an issue, feel free to report it, and we'll
            look into it.
          </p>
        </div>
        <div>
        <Link to="/">return home</Link>
            <Link to="/contact">report problem</Link>
        </div>
    </div>
  )
}

export default ErrorPage ;