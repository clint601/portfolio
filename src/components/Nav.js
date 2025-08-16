import { Link } from "react-router"




const Nav =()=> {

    return (
        <nav className="nav top-nav justify-content-center justify-content-md-evenly">
            <Link className="nav-link mt-5" 
            to="/">Home</Link>
            <Link className="nav-link mt-5" 
            to="/about">About</Link>
            <Link className="nav-link mt-5" 
            to="/project">Projects</Link>
        </nav>
    )
}




export default Nav;