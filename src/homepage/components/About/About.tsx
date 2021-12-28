import { Title, Text } from "_shared/components";

type Props = {
  title: string;
  subtitle: string;
};

const About: React.FC<Props> = ({ title, subtitle }) => {
  return (
    <div className='sm:ml-5 sm:text-left text-center flex-1 self-center ml-0'>
      <Title Type='h1'>{title}</Title>
      <Text>
        Frontend Developer, React, React Native, Typescript and JavaScript
      </Text>
      <ul className='mt-3'>
        <li>
          <a className='text-red-1000' href='https://www.linkedin.com/'>
            @LinkedIn
          </a>
        </li>
        <li>
          <a className='text-red-1000' href='https://www.linkedin.com/'>
            @Github
          </a>
        </li>
      </ul>
    </div>
  );
};

export { About };
