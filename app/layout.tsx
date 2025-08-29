import NavBar from '@/components/ui/NavBar';
import { montserrat } from './ui/fonts';
import './ui/global.css';
import React from 'react';
import StoreProvider from './StoreProvider';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        <div className="flex flex-col gap-4">
          <StoreProvider>
            <NavBar></NavBar>
            {children}
          </StoreProvider>
        </div>
      </body>
    </html>
  );
}
