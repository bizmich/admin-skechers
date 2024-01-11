import CategoryCard from '@/components/category/helpers/category-card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Category } from '@/types/category-types';
import CreateCategoryAlert from './helpers/create-category-alert';

const CategoryTabs = ({ data }: { data: Category }) => {
  console.log('data:', data);

  const transformedObject = Object.values(data);

  return (
    <Tabs defaultValue='account' className=''>
      <TabsList>
        <TabsTrigger value={data?.kids.id}>{data?.kids.name}</TabsTrigger>
        <TabsTrigger value={data?.women.id}>{data?.women.name}</TabsTrigger>
        <TabsTrigger value={data?.men.id}>{data?.men.name}</TabsTrigger>
        <TabsTrigger value={data?.sale.id}>{data?.sale.name}</TabsTrigger>
        <CreateCategoryAlert parentId={null} />
      </TabsList>
      <TabsContent value={data?.kids.id}>
        {data && <CategoryCard data={data.women} />}
      </TabsContent>
      <TabsContent value={data?.women.id}>
        {data && <CategoryCard data={data.women} />}
      </TabsContent>
      <TabsContent value={data?.men.id}>
        {' '}
        {data && <CategoryCard data={data.men} />}
      </TabsContent>
      <TabsContent value={data?.sale.id}>{data?.sale.name}</TabsContent>
    </Tabs>
  );
};

export default CategoryTabs;
