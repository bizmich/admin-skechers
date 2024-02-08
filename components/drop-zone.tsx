'use client';

import { cn } from '@/lib/utils';
import { UseMutationResult } from '@tanstack/react-query';
import React, { useCallback, useEffect } from 'react';
import {
  Accept,
  useDropzone,
  type FileRejection,
  type FileWithPath,
} from 'react-dropzone';
import { FieldPath, FieldValues, UseFormSetValue } from 'react-hook-form';
import { Icons } from './icons';

export type FileWithPreview = FileWithPath & {
  preview: string;
};

interface FileDialogProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> extends React.HTMLAttributes<HTMLDivElement> {
  name: TName;
  setValue?: UseFormSetValue<TFieldValues>;
  maxSize?: number;
  accept?: Accept;
  maxFiles?: number;
  files: FileWithPreview[] | null;
  setFiles: React.Dispatch<React.SetStateAction<FileWithPreview[] | null>>;
  isUploading?: boolean;
  disabled?: boolean;
  upload: UseMutationResult<any, Error, any>;
}

const Dropzone = <TFieldValues extends FieldValues>({
  name,
  setValue,
  accept = {
    'image/*': [],
  },
  maxSize = 1024 * 1024 * 2,
  maxFiles = 1,
  files,
  setFiles,
  isUploading = false,
  disabled = false,
  className,
  upload,
  ...props
}: FileDialogProps<TFieldValues>) => {
  const onDrop = useCallback(
    (acceptedFiles: FileWithPath[], rejectedFiles: FileRejection[]) => {
      const formData = new FormData();
      acceptedFiles.forEach((file) => {
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        });

        formData.append('image', file);

        // setFiles((prev) => [...(prev ?? []), fileWithPreview]);
      });
      upload.mutate(formData);

      if (rejectedFiles.length > 0) {
        rejectedFiles.forEach(({ errors }) => {
          if (errors[0]?.code === 'file-too-large') {
            alert(`File is too large`);
            return;
          }
          errors[0]?.message && alert(errors[0].message);
        });
      }
    },

    [upload]
  );

  // in case i need directly to put in useForm hook

  // React.useEffect(() => {
  //   setValue(name, files as PathValue<TFieldValues, Path<TFieldValues>>);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [files]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept,
    maxSize,
    maxFiles,
    multiple: maxFiles > 1,
    disabled,
  });

  useEffect(() => {
    // Revoke the data uris to avoid memory leaks
    return () => files?.forEach((file) => URL.revokeObjectURL(file.preview));
  }, [files]);

  return (
    <div>
      <div {...getRootProps()}>
        <input {...getInputProps({ name: 'file' })} />
        <div
          className={cn(
            'flex h-16 w-full text-sm  text-center outline-dashed  outline-primary outline-1 flex-col items-center justify-center gap-4',
            className,
            disabled && 'pointer-events-none opacity-60'
          )}
          {...props}
        >
          {isDragActive ? (
            <p>Перетащите файлы сюда</p>
          ) : !upload.isPending ? (
            <p>Перетащите файлы сюда или нажмите, чтобы выбрать</p>
          ) : (
            <Icons.spinner />
          )}
        </div>
      </div>
    </div>
  );
};

export default Dropzone;
