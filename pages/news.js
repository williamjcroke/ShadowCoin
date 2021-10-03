import { FEEDS, getFeed } from "../comps/lib/rss.js";
import { format } from "date-fns";
import Layout from '../comps/MyLayout.js';

export default function News({ feed, items }) {
  return (
    <Layout>
    <div>
      <h1>{feed.title}</h1>
      <div>
        {items.map((item) => (
          <a
            key={item.link}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>{item.title}</div>
            <div>{format(new Date(item.isoDate), "PPP")}</div>
          </a>
        ))}
      </div>
    </div>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const feed = FEEDS.find((feed) => feed.slug === 'crypto-news');
  const detailedFeed = await getFeed(feed.url);
  console.log(feed)

  return {
    props: {
      feed,
      items: detailedFeed.items,
    },
    revalidate: 1,
  };
}
