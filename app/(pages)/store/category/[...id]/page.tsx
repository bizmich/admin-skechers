import authorizedFetch from '@/services/authorizedFetch';
import SingleCategoryPage from './SingleCategoryPage';
import { notFound } from 'next/navigation';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

const SingleCategorySlugPage = async ({
  params,
}: {
  params: { id: string };
}) => {
  const response = await authorizedFetch(
    `https://365trends.tj/api/dashboard/categories/${params.id}`,
    {
      cache: 'no-cache',
    }
  );
  if (!response.ok) notFound();

  const data = await response.json();

  return <SingleCategoryPage id={params.id} initialData={data} />;
};

export default SingleCategorySlugPage;
