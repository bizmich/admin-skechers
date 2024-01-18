import { SingleProduct } from '@/types';
import EditProductAlert from './helpers/edit-product-alert';
import { truncate } from '@/lib/utils';

const SingleProductTable = ({ data }: { data: SingleProduct }) => {
  return (
    <div className='grid grid-cols-[200px_500px_100px]'>
      <div className='divide-y font-semibold *:py-2'>
        <div>Название</div>
        <div>Описание</div>
        <div>Бренд</div>
        <div>Новый продукт</div>
        <div>Xит</div>
        <div>Активный</div>
        <div>Категории</div>
        <div>Технологии</div>
        <div>Цвета</div>
        <div>Артикул</div>
      </div>
      {data && (
        <div className='divide-y *:py-2'>
          <div>{data.title}</div>
          <div className='truncate'>{truncate(data.description, 50)}</div>
          <div className='truncate'>{data.brendId}</div>
          <div className='truncate'>{data.newProduct ? 'Да' : 'Нет'}</div>
          <div className='truncate'> {data.hit ? 'Да' : 'Нет'}</div>
          <div className='truncate'> {data.active ? 'Да' : 'Нет'}</div>
          <div className='truncate flex'>
            {data.categories?.map((cat) => (
              <span key={cat.id}>
                {cat.name} {', '}{' '}
              </span>
            ))}
            {data.categories?.length === 0 && 'Не указаны'}
          </div>
          <div>
            <div className='flex '>
              {data.technologies?.map((tech) => (
                <div key={tech.id}>
                  {tech.title} {', '}
                </div>
              ))}
              {data.technologies?.length === 0 && 'Не указаны'}
            </div>
          </div>
          <div className='truncate'>{data.colors?.length}</div>
          <div className='truncate'>{data.article}</div>
        </div>
      )}
    </div>
  );
};

export default SingleProductTable;
