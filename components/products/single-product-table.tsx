import { SingleProduct } from '@/types';

const SingleProductTable = ({ data }: { data: SingleProduct }) => {
  return (
    <div className='max-w-3xl'>
      <div className='divide-y font-semibold *:py-2 '>
        <div className='grid grid-cols-2 gap-5'>
          <div>Название</div>
          <div>{data.title}</div>
        </div>
        {/* <div className='grid grid-cols-2 gap-5'>
          <div>Описание</div>
          <div className='truncate'>{truncate(data.description, 50)}</div>
        </div> */}
        <div className='grid grid-cols-2 gap-5'>
          <div>Бренд</div>
          <div className='truncate'>{data.brendId}</div>
        </div>
        <div className='grid grid-cols-2 gap-5'>
          <div>Новый продукт</div>
          <div className='truncate'>{data.newProduct ? 'Да' : 'Нет'}</div>
        </div>
        <div className='grid grid-cols-2 gap-5'>
          <div>Xит</div>
          <div className='truncate'> {data.hit ? 'Да' : 'Нет'}</div>
        </div>
        <div className='grid grid-cols-2 gap-5'>
          <div>Активный</div>
          <div className='truncate'> {data.active ? 'Да' : 'Нет'}</div>
        </div>
        <div className='grid grid-cols-2 gap-5'>
          <div>Категории</div>
          <div className='truncate flex'>
            {data.categories?.map((cat) => (
              <div key={cat.id}>
                {cat.name} {', '}{' '}
              </div>
            ))}
            {data.categories?.length === 0 && 'Не указаны'}
          </div>
        </div>
        <div className='grid grid-cols-2 gap-5'>
          <div>Технологии</div>
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
        </div>
        <div className='grid grid-cols-2 gap-5'>
          <div>Цвета</div>
          <div className='truncate'>{data.colors?.length}</div>
        </div>
        <div className='grid grid-cols-2 gap-5'>
          <div>Артикул</div>
          <div className='truncate'>{data.article}</div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductTable;
