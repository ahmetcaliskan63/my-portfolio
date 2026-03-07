// my-portfolio/app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from './components/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ahmet Çalışkan | Full Stack Developer & Yazılım Mühendisi',
  description: 'Modern web ve mobil teknolojilerinde uzmanlaşmış Full Stack Developer Ahmet Çalışkan\'ın portfolyosu. React, Next.js, .NET Core ve daha fazlası.',
  keywords: ['Ahmet Çalışkan', 'Full Stack Developer', 'Yazılım Mühendisi', 'Portfolio', 'React Developer', 'Next.js', 'Blockchain', '.NET Core'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen bg-gray-900">
          {children}
        </main>
      </body>
    </html>
  );
}