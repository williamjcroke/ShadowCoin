import {Button} from 'react-bootstrap';
import Link from 'next/link';

//Navigation list for header

const NavList = () => (
  <div>
    {}
    <ul className="navbar-nav">
      
      {/* Home link */}
      <li className="nav-item">
        <Link href="/"><Button variant="dark" className="customNavHome"><a>Home</a></Button></Link>
      </li>

    {/* Link to News page */}
      <li className="nav-item, customNavLink" >
        <Link href="/news"><Button variant="light"><a>News</a></Button></Link>
      </li>

      {/* Link to Help page */}
      <li className="nav-item, customNavLink" >
        <Link href="/help"><Button variant="light"><a>Help</a></Button></Link>
      </li>

      {/* Search field */}
      <li className="nav-item, customNavLink">
      <form action="/search" className="form-inline my-2 my-lg-0">
       <input className="form-control mr-sm-2" type="search" size="12" maxLength="10" name="ticker" placeholder="Ticker Search" aria-label="Search"/>
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
      </li>

    </ul>

  </div>
);

export default NavList;