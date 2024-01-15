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
import useTechnologies from '@/services/hooks/technology-hooks/useTechnologies';
import { ChevronDown } from 'lucide-react';

interface TechnologiesSelectorProps {
  value: string[];
  onChange: (values: string[]) => void;
}

const TechnologiesSelector = ({
  value,
  onChange,
}: TechnologiesSelectorProps) => {
  const { data } = useTechnologies();

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
                ? `Выбрано технологии: ${value.length}`
                : 'Выбрать технологию'
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

export default TechnologiesSelector;
