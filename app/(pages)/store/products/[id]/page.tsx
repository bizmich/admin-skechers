import SlugPage from './SlugPage';

const ProductSlugPage = (req: any) => {
  console.log('params:', req);

  return (
    <div>
      <SlugPage />
    </div>
  );
};

export default ProductSlugPage;
