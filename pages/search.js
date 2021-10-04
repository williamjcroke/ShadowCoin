import Layout from '../comps/MyLayout.js';
import SearchData from '../comps/functions/search.js';
import {SSRProvider} from '@react-aria/ssr';

//Search page pulling from the search.js file
export default function Search() {
  return (
    <SSRProvider> {/* Ensures consistant ids are generated between the client and server */}
    <Layout>
      <SearchData screen="search-results" type="coin-search"/>
    </Layout>
    </SSRProvider>
  );
}