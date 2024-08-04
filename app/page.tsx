import { FC } from 'react';
import { getSDK } from '@/app/utils/graphqlSdk';
import { notFound } from 'next/navigation';

export interface HomePageProps {
  body: string | null;
}

const fetchHomePageData = async (): Promise<HomePageProps> => {
  const SDK = getSDK();
  const homePageData = await SDK.PageById({
    id: "cG9zdDo3"
  });
  return {
    body: homePageData.page?.content || null,
  };
};

const Home: FC = async () => {
  const { body } = await fetchHomePageData();

  if (!body) {
    notFound();
  }

  return (
    <div>
      {body ? (
        <div dangerouslySetInnerHTML={{ __html: body }} />
      ) : (
        <div>No content available</div>
      )}
      
    </div>
  );
};

export default Home;
