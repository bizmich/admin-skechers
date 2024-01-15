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
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from './ui/alert-dialog';
import { Input } from './ui/input';
import { ChevronDown } from 'lucide-react';
import { Label } from './ui/label';
import { ChangeEvent } from 'react';

interface BrandsSelectorProps {
  value: string;
  onChange: (values: string) => void;
}
export const BrandsSelector = ({ value, onChange }: BrandsSelectorProps) => {
  const { data } = useBrands();

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

interface BrandsMultiSelectProps {
  value: string[];
  onChange: (values: string[]) => void;
}

export const BrandMultiSelect = ({
  value,
  onChange,
}: BrandsMultiSelectProps) => {
  const { data } = useBrands();

  const handleCheckBox = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;

    if (!inputValue) return;

    let updatedPeople: string[];

    if (value.includes(inputValue)) {
      updatedPeople = value.filter((el) => el !== inputValue);
    } else {
      updatedPeople = [...value, inputValue];
    }

    onChange(updatedPeople);
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild className='text-sm font-medium mt-0'>
        <div className='relative'>
          <Input
            defaultValue={
              value.length > 0
                ? `Выбрано бренд: ${value.length}`
                : 'Выбрать бренд'
            }
            readOnly
            type='button'
            className='cursor-pointer w-full pr-10'
          />
          <span className='absolute inset-y-0 px-2 right-0 flex items-center justify-center'>
            <ChevronDown className='h-4 w-4' />
          </span>
        </div>
      </AlertDialogTrigger>
      <AlertDialogContent className=''>
        <AlertDialogHeader>
          <AlertDialogTitle>Выберите технологию</AlertDialogTitle>
        </AlertDialogHeader>
        {data &&
          data.map((t) => (
            <Label key={t.id} className='flex gap-2 items-center'>
              <Input
                type='checkbox'
                className='size-3 accent-black'
                value={t.id}
                onChange={handleCheckBox}
                checked={value.includes(String(t.id))}
              />
              <span className='font-semibold'>{t.title}</span>
            </Label>
          ))}

        <AlertDialogFooter>
          <AlertDialogCancel>Отмена</AlertDialogCancel>
          <AlertDialogAction>Выбрать</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
