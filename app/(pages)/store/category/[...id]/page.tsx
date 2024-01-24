import SingleCategoryPage from './SingleCategoryPage';

export const revalidate = 0; // revalidate at most every hour
const SingleCategorySlugPage = ({ params }: { params: { id: string } }) => {
  return <SingleCategoryPage id={params.id} />;
};

export default SingleCategorySlugPage;
