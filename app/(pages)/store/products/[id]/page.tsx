import SlugPage from './SlugPage';

const ProductSlugPage = ({ params }: { params: { id: string } }) => {
  return (
    <div>
      <SlugPage id={params.id} />
    </div>
  );
};

export default ProductSlugPage;
