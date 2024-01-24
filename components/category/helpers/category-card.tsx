import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { Menu, MenuItems } from '@/types/category-types';
import Link from 'next/link';
import CreateCategoryAlert from './create-category-alert';
import DeleteCategoryAlert from './delete-category-alert';

const CategoryCard = ({ data }: { data: Menu }) => {
  const filtered: MenuItems[] = Object.values(data).filter((el) => {
    if (typeof el === 'object' && el !== null) {
      return el;
    }
  });

  if (!data) return null;
  return (
    <div className='space-y-3 w-full'>
      {/* Level 1 */}
      <div className='flex gap-2 items-center font-semibold pt-5 pb-2'>
        {data.name}
        <Button size='icon' variant='ghost'>
          <Link href={`/store/category/${data.id}`} prefetch={false}>
            <Icons.edit className='size-5' />
            <span className='sr-only'>Edit</span>
          </Link>
        </Button>

        <DeleteCategoryAlert id={data.id} />
      </div>

      {/* Menu */}
      <div className='grid grid-cols-3 gap-5 *:border gap-y-5 *:p-5 w-full *:max-h-96 *:overflow-y-auto'>
        {data &&
          filtered &&
          filtered.map((el) => (
            <div key={el.id}>
              <div className='pb-2 flex gap-2 items-center font-semibold'>
                <p className='text-base'>{el.name}</p>
                <Button size='icon' variant='ghost'>
                  <Link href={`/store/category/${el.id}`} prefetch={false}>
                    <Icons.edit className='size-5' />
                    <span className='sr-only'>Edit</span>
                  </Link>
                </Button>

                <DeleteCategoryAlert id={el.id} />
              </div>
              <ul className='space-y-2 pl-2'>
                {el.items.map((i) => {
                  return (
                    <li
                      className='flex  justify-between items-center '
                      key={i.name}
                    >
                      {i.name}
                      <div className='flex gap-2 items-center'>
                        <Button size='icon' variant='ghost'>
                          <Link
                            href={`/store/category/${i.id}`}
                            prefetch={false}
                          >
                            <Icons.edit className='size-5' />
                            <span className='sr-only'>Edit</span>
                          </Link>
                        </Button>

                        <DeleteCategoryAlert id={i.id} />
                      </div>
                    </li>
                  );
                })}
                <CreateCategoryAlert parentId={el.id} />
              </ul>
            </div>
          ))}

        <div>
          <CreateCategoryAlert parentId={data.id} />
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
