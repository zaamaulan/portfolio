import { AboutButton } from '@/components/Button/page';
import React from 'react';

export const metadata = {
  title: 'Reza Portfolio',
};

export default function Home() {
  return (
    <>
      <div className="my-52 text-zinc-300 ">
        <div className='text-7xl font-semibold mb-10'>
          <p>
            Hey, I&apos;m {' '}
            <span className="bg-gradient-to-r from-indigo-400 to-green-500 bg-clip-text text-transparent">
              Reza Maulana
            </span>
          </p>
          <p>
            a{' '}
            <span className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
              Front-End {' '}
            </span>
            Developer
          </p>
        </div>
        <AboutButton />
      </div>
    </>
  );
}
