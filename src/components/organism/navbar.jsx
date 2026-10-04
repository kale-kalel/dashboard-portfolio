import { NavLink } from 'react-router-dom';

const NavigationBar = () => {
  const closeMenu = () => {
    const closeButton = document.querySelector('#offcanvasNavbar .btn-close');
    if (closeButton) {
      closeButton.click();
    }
  };

  return (
    <div className="nav-wrapper h-100">
      <nav className="navbar navbar-expand-md h-100 p-0">
        <div className="container-fluid h-100 p-0 m-0 align-items-stretch justify-content-end justify-content-md-center">
          <button
            className="navbar-toggler bg-white align-self-center"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="offcanvas offcanvas-end h-100"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <button
                type="button"
                className="btn-close mt-1 me-1"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>

            <div className="offcanvas-body justify-content-center align-items-center pt-5 ps-5 pt-md-0 ps-md-0">
              <div className="navbar-nav nav-pill">
                <NavLink
                  to="/"
                  end
                  className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}
                  onClick={closeMenu}
                >
                  Dashboard
                </NavLink>

                <NavLink
                  to="/experience"
                  className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}
                  onClick={closeMenu}
                >
                  Experience
                </NavLink>

                <NavLink
                  to="/projects"
                  className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}
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