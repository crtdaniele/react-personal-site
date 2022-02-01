import React from "react";
import { Title } from "_shared/components";
import Article1 from "_shared/assets/img/article-1.jpg";

type Props = {
  title: string;
  date: string;
  link: string;
};

const NewsItem: React.FC<Props> = ({ title, date, link }) => {
  return (
    <div className='mb-10 md:flex-2 lg:flex-3 p-5'>
      <a href={link} className='card-link'>
        <img className='mb-5 rounded-2xl' src={Article1} />
        <Title Type='h3'>{title}</Title>
      </a>
      <div className='mt-2 text-lg text-gray'>{date}</div>
    </div>
  );
};

export { NewsItem };
