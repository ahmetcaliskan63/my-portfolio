import './globals.css';
import type { Metadata } from 'next';
import Header from './components/Header';
import Footer from './components/Footer';
import AnimatedLayout from './components/AnimatedLayout';

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Kişisel portfolyo websitesi',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container mx-auto px-4 pt-24 pb-12">
          <AnimatedLayout>{children}</AnimatedLayout>
        </main>
        <Footer />
      </body>
    </html>
  );
}
