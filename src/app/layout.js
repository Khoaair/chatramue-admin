import '../styles/main.scss';
import { Inter } from 'next/font/google';
import AuthProvider from '../components/authProvider/AuthProvider';
import Navbar from '@/components/navbar/Navbar';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <AuthProvider>
          <Navbar>{children}</Navbar>
        </AuthProvider>
      </body>
    </html>
  );
}
