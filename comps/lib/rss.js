import Parser from "rss-parser";

//RSS feed setup for news page

export const FEEDS = [
    {
      slug: "crypto-news",
      title: "Crypto News",
      url: "https://www.cryptoninjas.net/feed/",
    }
  ];

export async function getFeed(feedUrl) {
   let parser = new Parser();
   let feed = await parser.parseURL(feedUrl);
   return feed;
}