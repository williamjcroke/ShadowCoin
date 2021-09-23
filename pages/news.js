import Layout from '../comps/MyLayout.js';
import NewsData from '../comps/functions/news.js';

export default function News() {
  return (
    <Layout>
      <NewsData screen="news-results" type="news-search"/>
    </Layout>
  );
}