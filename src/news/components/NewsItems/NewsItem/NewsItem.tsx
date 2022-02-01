import dayjs from "dayjs";
import React from "react";
import { Title } from "_shared/components";

type Props = {
  title: string;
  date: string;
  link: string;
  thumbnail: string;
};

const NewsItem: React.FC<Props> = ({ title, date, link, thumbnail }) => {
  return (
    <div className='mb-10 md:flex-2 lg:flex-3 p-5'>
      <a href={link} className='card-link'>
        <img className='mb-5 rounded-2xl' src={thumbnail} alt={title} />
        <Title Type='h3' className="dark:text-white hover:opacity-100 hover:text-gray">{title}</Title>
      </a>
      <div className='dark:text-white mt-2 text-lg text-gray'>{dayjs(date).format('DD-MM-YYYY')}</div>
    </div>
  );
};

export { NewsItem };

