'use client';
import { Editor } from '@tinymce/tinymce-react';

interface EditorInputProps {
  value: string;
  onChange: (value: string) => void;
}

export default function EditorInput({ onChange, value }: EditorInputProps) {
  return (
    <>
      <Editor
        apiKey={process.env.NEXT_PUBLIC_EDITOR_API_KEY}
        onEditorChange={(newValue, editor) => onChange(newValue)}
        value={value}
        init={{
          height: 500,
          menubar: false,
          plugins: [
            'advlist',
            'autolink',
            'lists',
            'link',
            'image',
            'charmap',
            'preview',
            'anchor',
            'searchreplace',
            'visualblocks',
            'code',
            'fullscreen',
            'insertdatetime',
            'media',
            'table',
            'code',
            'help',
            'wordcount',
          ],
          toolbar:
            'undo redo | blocks | ' +
            'bold italic forecolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help',
          content_style:
            'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
        }}
      />
    </>
  );
}
