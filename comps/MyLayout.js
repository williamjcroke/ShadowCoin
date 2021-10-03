import Header from './header.js';
import Footer from './footer.js';

//Header and footer setup for body response on pages

const Layout = props => (
  <div>
  	<Header />
  		<div className="body">
    		{props.children}
  		</div>
  	<Footer/>
  </div>

);

export default Layout;