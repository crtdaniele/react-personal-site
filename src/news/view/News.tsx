import { PageBase } from "_shared/layouts";
import { NewsItems } from "news/components/NewsItems";
import { Title } from "_shared/components";

const News = () => {
  return (
    <PageBase>
      <Title Type='h1'>News</Title>
      <NewsItems />
    </PageBase>
  );
};

export { News };
