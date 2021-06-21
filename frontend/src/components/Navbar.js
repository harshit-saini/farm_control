import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { UserContext } from '../contexts/userContext'

const Navbar = () => {

  const { user, isAuthenticated } = useContext(UserContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">Farm Control</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto d-flex align-items-center">
            <NavLink className="nav-link ms-2" activeclassname="active" to="/" exact>Home</NavLink>

            {
              !isAuthenticated &&
              <a className="nav-link  ms-2" href="/auth/google">
                <button className="btn btn-primary">Login</button>
              </a>
            }
            {
              isAuthenticated &&
              <>
                <NavLink className="nav-link ms-2" activeClassName="active" to="/profile">Profile</NavLink>
                <NavLink className="nav-link ms-2" activeClassName="active" to="/my-farm">My Farm</NavLink>
                <a className="nav-link ms-2" href="/auth/logout">
                  <button className="btn btn-secondary">Logout
                <span className="mx-1">{`(${user.name})`}</span>
                  </button>
                </a>
              </>
            }
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
