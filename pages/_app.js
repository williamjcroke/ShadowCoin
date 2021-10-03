import '../comps/css/bootstrap.min.css';
import '../comps/css/bootstrap-reboot.min.css';
import '../comps/css/bootstrap-grid.min.css';
import '../comps/css/my.css';
import '../comps/Meta.js';

//Setup app for component body, importing required CSS and additional meta components

export default function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
  }