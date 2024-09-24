const Header = () => {
    return <>
    {/* Navbar */}
    <nav className="navbar navbar-expand-lg">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" style={{ color: 'white', textAlign: 'left' }}>Pizza House</a>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Contact</a>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2 search-bar"
                type="text"
                placeholder="Search"
              />
              <button
                className="btn btn-danger"
                type="button"
                style={{ width: '50px', alignItems: 'center', padding: 0, height: '40px' }}
              >
                <i className="fa fa-search"></i>
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
}
export default Header;