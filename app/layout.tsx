import NavBar from '@/components/ui/NavBar';
import { montserrat } from './ui/fonts';
import './ui/global.css'

export default function RootLayout({
  children, 
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        <NavBar></NavBar>
        {children}
      </body>
    </html>
  );
}
