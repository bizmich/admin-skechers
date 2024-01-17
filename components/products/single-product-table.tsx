import { SingleProduct } from '@/types';
import EditProductAlert from './helpers/edit-product-alert';

const SingleProductTable = ({ data }: { data: SingleProduct }) => {
  return (
    <div className='grid grid-cols-3 max-w-4xl '>
      <div className='space-y-3 divide-y'>
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
        <div className='space-y-3 divide-y'>
          <div className='font-medium '>{data.title}</div>
          <div className='truncate'>{data.description}</div>
          <div className='truncate'>{data.brendId}</div>
          <div className='truncate'>{data.newProduct ? 'Да' : 'Нет'}</div>
          <div className='truncate'> {data.hit ? 'Да' : 'Нет'}</div>
          <div className='truncate'> {data.active ? 'Да' : 'Нет'}</div>
          <div className='truncate flex flex-col'>
            {data.categories?.map((cat) => (
              <span key={cat.id}>{cat.name}</span>
            ))}
            {data.categories?.length === 0 && 'Не указаны'}
          </div>
          <div>
            <div className='flex flex-col'>
              {data.technologies?.map((tech) => (
                <div key={tech.id}>{tech.title}</div>
              ))}
              {data.technologies?.length === 0 && 'Не указаны'}
            </div>
          </div>
          <div className='truncate'>{data.colors?.length}</div>
          <div className='truncate'>{data.article}</div>
        </div>
      )}
      <div>
        <EditProductAlert {...data} />
      </div>
    </div>
  );
};

export default SingleProductTable;
