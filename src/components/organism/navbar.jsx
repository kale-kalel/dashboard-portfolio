import { NavLink } from 'react-router-dom';

const NavigationBar = () => {

  // This safely closes the offcanvas without blocking React Router
  const closeMenu = () => {
    const closeButton = document.querySelector('#offcanvasNavbar .btn-close');
    if (closeButton) {
      closeButton.click();
    }
  };

  return (
    <div className="nav-wrapper">
      <nav className="navbar navbar-expand-md">
        <div className="container-fluid justify-content-end justify-content-md-center">

          {/* Hamburger Button */}
          <button
            className="navbar-toggler bg-white"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Offcanvas Wrapper */}
          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >

            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>

            <div className="offcanvas-body justify-content-center">
              <div className="navbar-nav nav-pill">

                {/* Notice we removed data-bs-dismiss and added onClick={closeMenu} */}
                <NavLink
                  to="/"
                  end
                  className={({ isActive }) => isActive ? "nav-link nav-item active" : "nav-link nav-item"}
                  onClick={closeMenu}
                >
                  Dashboard
                </NavLink>

                <NavLink
                  to="/experience"
                  className={({ isActive }) => isActive ? "nav-link nav-item active" : "nav-link nav-item"}
                  onClick={closeMenu}
                >
                  Experience
                </NavLink>

                <NavLink
                  to="/projects"
                  className={({ isActive }) => isActive ? "nav-link nav-item active" : "nav-link nav-item"}
                  onClick={closeMenu}
                >
                  Projects
                </NavLink>

              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavigationBar;