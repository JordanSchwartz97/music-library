import React from 'react'
import './Navbar.css'
function Navbar() {
    return (
        <div>
        <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">Jordan's Music Library</a>
          </div>
          <form className="navbar" action="/action_page.php">
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Search"/>
            </div>
            <button type="submit" className="btn btn-default">Submit</button>
          </form>
        </div>
      </nav>
      </div>
    )
}

export default Navbar