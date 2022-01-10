import { useGetAllNewsQuery } from "news/api/newsApi";
import { PageBase } from "_shared/layouts";
import { Text } from "_shared/components";

const News = () => {
  const {
    data: posts,
    error,
    isLoading,
  } = useGetAllNewsQuery("", { refetchOnMountOrArgChange: true });

  return (
    <PageBase>
      <div className='flex flex-wrap'>
        {!isLoading &&
          posts &&
          posts.map((post) => {
            return (
              <div className='mb-10 md:flex-2 lg:flex-3'>
                <h5>{post.title}</h5>
                <Text>
                  <>{post.body}</>
                </Text>
              </div>
            );
          })}
      </div>
    </PageBase>
  );
};

export { News };
