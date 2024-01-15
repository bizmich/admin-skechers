'use client';

import useBrands from '@/services/hooks/brand-hooks/useBrands';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';

interface BrandsSelectorProps {
  value: string;
  onChange: (values: string) => void;
}
const BrandsSelector = ({ value, onChange }: BrandsSelectorProps) => {
  const { data } = useBrands();

  console.log('brands:', data);

  return (
    <Select onValueChange={onChange} defaultValue={value}>
      <SelectTrigger className='w-[180px]'>
        <SelectValue placeholder='Выбрать бренд' />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {data &&
            data.map((b) => (
              <SelectItem key={b.id} value={b.id}>
                {b.title}
              </SelectItem>
            ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default BrandsSelector;
