import './globals.css';
import { Inter, Montserrat, Poppins } from 'next/font/google';
import Navigation from '@/components/Navigation/page';

// const inter = Inter({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] });
const inter = Poppins({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] });


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-zinc-950 text-zinc-300`}>
        <div>
          <Navigation />
        </div>
        <div className='mx-60'>{children}</div>
      </body>
    </html>
  );
}
