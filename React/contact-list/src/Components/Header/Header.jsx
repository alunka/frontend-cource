import './Header.css'

import { Link } from 'react-router-dom'

const Header = () => {
    return(
        <>
        <nav class="navbar navbar-expand-lg bg-body-tertiary navbar-page">
        <div class="container-fluid">                   
        <Link className='navbar-brand active' aria-current="page" to='/'>
        Contact List
        </Link>
        <div class="navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto">
        <li class="nav-item">
        <Link className='nav-link' to='/new-contact'>
        Add contact 
        </Link>
        </li>
        <li class="nav-item">
        <Link className='nav-link' to='/update-contact'>
        Update contact 
        </Link>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
        </>
    )
}
export default Header