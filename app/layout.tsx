import NavBar from '@/components/ui/NavBar';
import { montserrat } from './ui/fonts';
import './ui/global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        <div className="gap-4 flex flex-col">
          <NavBar></NavBar>
          {children}
        </div>
      </body>
    </html>
  );
}
