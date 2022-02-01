export type NewsResponse = {
  items: {
    title: string;
    description: string;
    link: string;
    pubDate: string;
    thumbnail: string;
  }[];
};
