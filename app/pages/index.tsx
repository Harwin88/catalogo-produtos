import type { FC } from 'react';
import type { GetServerSideProps } from 'next';
import { dehydrate, QueryClient } from '@tanstack/react-query';
import Link from 'next/link';

import { getSDK } from '@/app/utils/graphqlSdk';

export interface HomePageProps {
  body: string | null;
}

export const getServerSideProps: GetServerSideProps<HomePageProps> = async (context) => {
  const SDK = getSDK(context.req);

  const homePageData = await SDK.PageById({
    id: "cG9zdDo4"
  });

  return {
    props: {
      body: homePageData.page?.content || null,
    },
  };
};

const Home: FC<HomePageProps> = ({ body }) => {
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
