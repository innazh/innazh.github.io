import './styles/NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" >
      <div className="container">
        <a className="navbar-brand" href="#abt-me-main" style={{ fontWeight: 'bold' }}>Inna Zhogova</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#education-main">Education</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#exp-main">Experience</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Hackathons</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Projects
          </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                {/* <li><hr className="dropdown-divider"/></li> */}
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>)
}
export default NavBar;