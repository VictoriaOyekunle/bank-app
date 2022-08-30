import {Link} from "react-router-dom"

const NavBar = () => {
  return (
    <>
     <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/"> <span className="brandLogo">O</span>nlyn Banking</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
        <li className="nav-item">
            <Link className="nav-link active brandLink" to ="/">Home</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link active brandLink" to ="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active brandLink" to ="/contact">Contact Us</Link>
        </li>
      </ul>

        <ul className="d-flex navbar-nav mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" to ="/signup">
            <button className="btn btn-sm text-white">Sign Up</button>
            </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to ="/signin">
            <button className="btn btn-sm text-white">Sign In</button>
          </Link>
        </li>
        </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default NavBar