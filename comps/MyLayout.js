import Header from './header.js';
import Footer from './footer.js';

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