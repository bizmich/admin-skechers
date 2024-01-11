import { Women } from '@/types/category-types';
import DeleteCategoryAlert from './delete-category-alert';
import EditCategoryAlert from './edit-category-alert';
import CreateCategoryAlert from './create-category-alert';

const CategoryCard = ({ data }: { data: Women }) => {
  return (
    <div className='space-y-3 w-full'>
      {/* Level 1 */}
      <div className='flex gap-2 items-center font-semibold pt-5 pb-2'>
        {data.name}
        <EditCategoryAlert
          name={data.name}
          tag={data.href}
          parentId={null}
          id={data.id}
        />
        <DeleteCategoryAlert id={data.id} />
      </div>

      {/* Menu */}
      <div className='grid grid-cols-3 *:border-r *:px-5 w-full *:max-h-96 *:overflow-y-auto'>
        {data?.clothes && (
          <div>
            <div className='pb-2 flex gap-2 items-center  font-semibold'>
              {data.clothes.name}
              <EditCategoryAlert
                parentId={`${data.clothes.parentId}`}
                id={data.clothes.id}
                name={data.clothes.name}
                tag={data.clothes.href}
              />
              <DeleteCategoryAlert id={data.clothes.id} />
            </div>
            <ul className='space-y-1 list-disc'>
              {data.clothes.items.map((el) => {
                return (
                  <li
                    className='flex gap-2 justify-between items-center '
                    key={el.name}
                  >
                    {el.name}
                    <div className='flex gap-2 items-center'>
                      <EditCategoryAlert
                        parentId={`${el.parentId}`}
                        id={el.id}
                        name={el.name}
                        tag={el.href}
                      />
                      <DeleteCategoryAlert id={el.id} />
                    </div>
                  </li>
                );
              })}
              <CreateCategoryAlert parentId={data.clothes.id} />
            </ul>
          </div>
        )}
        {data?.shoes && (
          <div>
            <div className='pb-2 flex gap-2 items-center font-semibold '>
              {data.shoes.name}
              <EditCategoryAlert
                name={data.shoes.name}
                tag={data.shoes.href}
                parentId={`${data.shoes.parentId}`}
                id={data.shoes.id}
              />
              <DeleteCategoryAlert id={data.shoes.id} />
            </div>
            <div className=' space-y-1'>
              {data.shoes.items.map((el) => {
                return (
                  <p
                    className='flex gap-2 items-center justify-between'
                    key={el.name}
                  >
                    {el.name}
                    <div className='flex gap-2 items-center'>
                      <EditCategoryAlert
                        parentId={`${el.parentId}`}
                        id={el.id}
                        name={el.name}
                        tag={el.href}
                      />
                      <DeleteCategoryAlert id={el.id} />
                    </div>
                  </p>
                );
              })}
              <CreateCategoryAlert parentId={data.shoes.id} />
            </div>
          </div>
        )}
        <div>
          <CreateCategoryAlert parentId={data.id} />
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
