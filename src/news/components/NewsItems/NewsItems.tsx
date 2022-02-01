import { useGetAllNewsQuery } from "news/api/newsApi";
import React from "react";
import { NewsItem } from "./NewsItem";

const NewsItems = () => {
  const { data: posts, isLoading } = useGetAllNewsQuery("", {
    refetchOnMountOrArgChange: true,
  });

  return (
    <div className="flex flex-wrap mt-10 -ml-5 -mr-5">
      {!isLoading &&
        posts &&
        posts.items.map((post) => {
          const { title, link, pubDate, thumbnail } = post;
          return (
            <React.Fragment key={title}>
              <NewsItem thumbnail={thumbnail} title={title} date={pubDate} link={link} />
            </React.Fragment>
          );
        })}
    </div>
  );
};

export { NewsItems };
