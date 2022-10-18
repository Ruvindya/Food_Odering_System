import React from 'react'


const Navbar = () => {
  return (

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
  <a className="navbar-brand" href="#">PICKMeal</a>

  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ms-auto">

      <li className="nav-item active">
        <a className="nav-link" href="/home">Home </a>
      </li>

      <li className="nav-item">
        <a className="nav-link" href="#">Menu</a>
      </li>

      {/* <li className="nav-item">
        <a className="nav-link" href="#">Notifications</a>
      </li> */}

      <li className="nav-item">
        <a className="nav-link" href="#">Place Oder</a>
      </li>

    

      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          You
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">

          <a className="dropdown-item" href="/user">Your Order</a>
          <a className="dropdown-item" href="#">Your Details</a>


          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">New Order</a>
        </div>   
      </li>
     
    </ul>
   
  </div>
</nav>
  )
}

export default Navbar