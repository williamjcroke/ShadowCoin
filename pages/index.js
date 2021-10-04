import Layout from '../comps/MyLayout.js';
import HomeTableData from '../comps/functions/home-table.js';
import {SSRProvider} from '@react-aria/ssr';

//Home page, setup to query data from the home-table.js file
export default function Home() {
  return (
    <SSRProvider> {/* Ensures consistant ids are generated between the client and server */}
    <Layout>
      <h2>Top 10 trending as of page load...</h2>
      <HomeTableData screen="coint-view-10" type="coins"/>
    </Layout>
    </SSRProvider>
  );
}