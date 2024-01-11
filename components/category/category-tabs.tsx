import CategoryCard from '@/components/category/helpers/category-card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Category, Menu } from '@/types/category-types';
import CreateCategoryAlert from './helpers/create-category-alert';

const CategoryTabs = ({ data }: { data: Category }) => {
  const transformedObject: Menu[] = Object.values(data).filter((el) => el.name);

  return (
    <Tabs defaultValue={transformedObject[0].id} className='text-sm'>
      <TabsList>
        {transformedObject.map((el) => {
          return (
            <TabsTrigger key={el.id} value={el.id}>
              {el.name}
            </TabsTrigger>
          );
        })}

        <CreateCategoryAlert parentId={null} />
      </TabsList>
      {transformedObject.map((el) => {
        return (
          <TabsContent value={el.id} key={el.id}>
            {data && <CategoryCard data={el} />}
          </TabsContent>
        );
      })}
    </Tabs>
  );
};

export default CategoryTabs;
