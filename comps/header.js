import NavList from './navlist.js';
import {DropdownButton} from 'react-bootstrap';

const Header = () => (
  <div>
  <nav className="navbar navbar-expand-lg navbar-light bg-light customNav justify-content-between">
  <img className="img-fluid img-thumbnail navbar-brand" width="100px" src={"img/sg_back.jpg"}/>
  <DropdownButton title="Menu" variant="dark" className="navbar-toggler nav-pusher">
    <NavList/>
  </DropdownButton>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <NavList/>
  </div>
</nav>
</div>
);

export default Header;