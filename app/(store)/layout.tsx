import NavBar from '@/components/ui/NavBar';
import { montserrat } from '../ui/fonts';
import '../ui/global.css';
import React from 'react';
import StoreProvider from '../StoreProvider';
import Footer from '@/components/ui/Footer';
import AuthProvider from '../AuthProvider';

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
            <AuthProvider>
              <NavBar></NavBar>
              <div className="flex h-screen flex-col justify-between">
                <main className="px-28 pb-16 pt-40">{children}</main>
                <Footer></Footer>
              </div>
            </AuthProvider>
          </StoreProvider>
        </div>
      </body>
    </html>
  );
}
