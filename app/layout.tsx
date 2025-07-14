import '../styles/globals.css';
import DarkToggle from './components/DarkToggle';

export const metadata = {
  title: 'Portfolio | Dương Bá Quyết',
  description: 'Portfolio của Dương Bá Quyết - Lập trình viên Web & IoT',
  keywords: 'Dương Bá Quyết, portfolio, web developer, IoT, Next.js, React',
  openGraph: {
    title: 'Portfolio | Dương Bá Quyết',
    description: 'Khám phá các dự án và kỹ năng của tôi trong lập trình web và IoT.',
    url: 'https://duongbaquyet.com',
    type: 'website',
    images: [
      {
        url: '/images/avatar.png',
        width: 200,
        height: 200,
        alt: 'Avatar of Dương Bá Quyết',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className="scroll-smooth">
      <body className="bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300 min-h-screen">
        <DarkToggle />
        {children}
      </body>
    </html>
  );
}