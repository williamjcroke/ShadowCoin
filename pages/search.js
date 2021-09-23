import Layout from '../comps/MyLayout.js';
import SearchData from '../comps/functions/search.js';

export default function Search() {
  return (
    <Layout>
      <SearchData screen="search-results" type="coin-search"/>
    </Layout>
  );
}