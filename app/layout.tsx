import ReactQueryProvider from '@/components/provider/react-query-provider';
import { Providers } from '@/components/provider/session-provider';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import React from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Admin',
  description: 'Dashboard',
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
          </body>
        </ReactQueryProvider>
      </Providers>
    </html>
  );
}
