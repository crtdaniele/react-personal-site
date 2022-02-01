import { useGetAllNewsQuery } from "news/api/newsApi";
import { NewsItem } from "./NewsItem";

const NewsItems = () => {
  /* const { data: posts, isLoading } = useGetAllNewsQuery("", {
    refetchOnMountOrArgChange: true,
  });*/

  const isLoading = false;
  const posts = [
    {
      title: "Github Actions: How to deploy a React Application to Netlify",
      date: "11/01/2022 - 2 minuti",
      link: "https://www.google.it",
    },
    {
      title: "Github Actions: How to deploy a React Application to Netlify",
      date: "11/01/2022 - 2 minuti",
      link: "https://www.google.it",
    },
    {
      title: "Github Actions: How to deploy a React Application to Netlify",
      date: "11/01/2022 - 2 minuti",
      link: "https://www.google.it",
    },
  ];

  return (
    <div className='flex flex-wrap mt-10 -ml-5 -mr-5'>
      {!isLoading &&
        posts &&
        posts.map((post) => {
          const { title, date, link } = post;
          return <NewsItem title={title} date={date} link={link} />;
        })}
    </div>
  );
};

export { NewsItems };
