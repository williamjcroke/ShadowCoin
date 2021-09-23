import Layout from '../comps/MyLayout.js';
import HomeTableData from '../comps/functions/home-table.js';

export default function Home() {
  return (
    <Layout>
      <h2>Top 10 trending as of page load...</h2>
      <HomeTableData screen="coint-view-10" type="coins"/>
    </Layout>
  );
}