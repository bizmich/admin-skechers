'use client';

import { ChangeEvent, useState } from 'react';
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
import { Label } from './ui/label';
import useCategory from '@/services/hooks/categories-hooks/useCategory';
import { MenuItems } from '@/types/category-types';
import { Button } from './ui/button';
import { ChevronDown } from 'lucide-react';

interface CategorySelectorProps {
  value: string[];
  onChange: (values: string[]) => void;
}

const CategorySelector = ({ value, onChange }: CategorySelectorProps) => {
  const { data } = useCategory();

  const filterCategories =
    data && Object.entries(data).map(([key, value]) => value);

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
      <AlertDialogTrigger asChild className='text-sm font-medium'>
        <div className='relative'>
          <Input
            defaultValue={
              value.length > 0
                ? `Выбрано категория: ${value.length}`
                : 'Выбрать категории'
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
      <AlertDialogContent className='max-w-6xl'>
        <AlertDialogHeader>
          <AlertDialogTitle>Выберите категории</AlertDialogTitle>
        </AlertDialogHeader>
        <div className='text-sm grid grid-cols-5 gap-3 max-h-[70dvh] overflow-auto'>
          {filterCategories?.map((el) => {
            const filtered: MenuItems[] = Object.values(el).filter((f) => {
              if (typeof f === 'object' && f !== null) {
                return f;
              }
            });

            return (
              <div key={el.id} className='space-y-2'>
                <div className='font-bold'>
                  <Label key={el.id} className='flex gap-2 items-center'>
                    <Input
                      type='checkbox'
                      className='size-3 accent-black'
                      value={el.id}
                      onChange={handleCheckBox}
                      checked={value.includes(String(el.id))}
                    />
                    <span className='font-semibold'>{el.name}</span>
                  </Label>
                </div>
                <div className='pl-3 space-y-2'>
                  {filtered.map((i) => (
                    <div key={i.id} className='space-y-2'>
                      <Label key={i.id} className='flex gap-2 items-center'>
                        <Input
                          type='checkbox'
                          className='size-3 accent-black'
                          value={i.id}
                          onChange={handleCheckBox}
                          checked={value.includes(String(i.id))}
                        />
                        <span className='font-semibold'>{i.name}</span>
                      </Label>

                      {i.items.map((item) => (
                        <Label
                          key={item.id}
                          className='flex gap-2 pl-3 items-center'
                        >
                          <Input
                            type='checkbox'
                            className='size-3 accent-black'
                            value={item.id}
                            onChange={handleCheckBox}
                            checked={value.includes(String(item.id))}
                          />
                          <span>{item.name}</span>
                        </Label>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <AlertDialogFooter>
          <AlertDialogCancel>Отмена</AlertDialogCancel>
          <AlertDialogAction>Выбрать</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default CategorySelector;
