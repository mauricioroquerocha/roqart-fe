import NavBar from '@/components/ui/NavBar';
import { montserrat } from '../ui/fonts';
import '../ui/global.css';
import React from 'react';
import StoreProvider from '../StoreProvider';
import Footer from '@/components/ui/Footer';

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
            <div className="flex h-screen flex-col justify-between">
              <main className="h-screen bg-background px-28 pb-0 pt-28 md:content-center md:pt-36 lg:pt-36">
                {children}
              </main>
              <Footer></Footer>
            </div>
          </StoreProvider>
        </div>
      </body>
    </html>
  );
}
