import { Icons } from '@/components/icons';
import { Kids } from '@/types/category-types';
import EditCategoryAlert from './edit-category-alert';
import DeleteCategoryAlert from './delete-category-alert';

const CategoryCard = ({ data }: { data: Kids }) => {
  return (
    <dl className='space-y-3 w-3/4'>
      {/* Title */}
      <dt className='flex gap-2 items-center font-semibold pt-5 pb-2'>
        {data.name}
        <EditCategoryAlert name={data.name} tag={data.href} />
        <DeleteCategoryAlert id={`/${data.id}`} />
      </dt>

      {/* Menu */}
      <div className='grid grid-cols-2'>
        <div>
          <dt className='pl-5 pb-2 flex gap-2 items-center  font-semibold'>
            {data.clothes.name}
            <EditCategoryAlert
              name={data.clothes.name}
              tag={data.clothes.href}
            />
            <DeleteCategoryAlert id={`/${data.id}/${data.id}`} />
          </dt>
          <dd className='pl-10 space-y-1'>
            {data.clothes.items.map((el) => {
              return (
                <p className='flex gap-2 items-center' key={el.name}>
                  {el.name}
                  <EditCategoryAlert name={el.name} tag={el.href} />
                  <DeleteCategoryAlert id={`/${data.id}/${data.id}/${el.id}`} />
                </p>
              );
            })}
          </dd>
        </div>
        <div>
          <dt className='pl-5 pb-2 flex gap-2 items-center font-semibold '>
            {data.shoes.name}
            <EditCategoryAlert name={data.shoes.name} tag={data.shoes.href} />
            <DeleteCategoryAlert id={`/${data.id}/${data.id}`} />
          </dt>
          <dd className='pl-10 space-y-1'>
            {data.shoes.items.map((el) => {
              return (
                <p className='flex gap-2 items-center' key={el.name}>
                  {el.name}
                  <EditCategoryAlert name={el.name} tag={el.href} />
                  <DeleteCategoryAlert id={`/${data.id}/${data.id}/${el.id}`} />
                </p>
              );
            })}
          </dd>
        </div>
      </div>
    </dl>
  );
};

export default CategoryCard;
