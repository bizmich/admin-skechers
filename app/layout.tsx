import ReactQueryProvider from '@/components/provider/react-query-provider';
import { Providers } from '@/components/provider/session-provider';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import React from 'react';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Панель управление',
  description: 'Панель управление skechers в Душанбе.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <Providers>
        <ReactQueryProvider>
          <body className={`${inter.className} h-screen overflow-hidden`}>
            {children}
            <Toaster />
          </body>
        </ReactQueryProvider>
      </Providers>
    </html>
  );
}
