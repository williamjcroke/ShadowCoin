import Layout from '../comps/MyLayout.js';
import {SSRProvider} from '@react-aria/ssr';

//Help page response
export default function Help() {
  return (
    <SSRProvider> {/* Ensures consistant ids are generated between the client and server */}
    <Layout>
      <h3>Help</h3>
      <hr/>
      <p>Unfortunitly this page has not yet been completed.<br/>
      If using the search box, try entering known tickets. i.e. BTC</p>
    </Layout>
    </SSRProvider>
  );
}