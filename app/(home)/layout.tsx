import NavBar from '@/components/ui/NavBar';
import { montserrat } from '../ui/fonts';
import '../ui/global.css';
import React from 'react';
import StoreProvider from '../StoreProvider';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        <div className="flex flex-col">
          <StoreProvider>
            <NavBar></NavBar>
            <main className="bg-background pt-28">{children}</main>
          </StoreProvider>
        </div>
      </body>
    </html>
  );
}
