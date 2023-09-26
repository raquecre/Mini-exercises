import { Link } from "react-router-dom"

const NavBar = () => {


    return (
        <nav title="índice" className=" ">
            <ul className="navul">
                <Link to="/">
                    <li className="navbarli"> Home </li>
                </Link>

                <Link to="/BizzBuzz">
                    <li className="navbarli"> BizzBuzz </li>
                </Link>

                <Link to="/PasswordGenerator">
                    <li className="navbarli"> Password Generator </li>
                </Link>
            </ul>
        </nav>

    )
}

export default NavBar