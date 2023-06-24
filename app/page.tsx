import { AboutButton } from '@/components/Button/page';
import Image from 'next/image';
import React from 'react';
import Sky from '../public/images/sky.jpg';

export const metadata = {
  title: 'Reza Portfolio',
};

export default function Home() {
  return (
    <>
      <div className="my-52 text-zinc-300 ">
        <div className="flex items-center justify-center gap-x-32">
          <div className="mb-10 text-5xl font-semibold ">
            <p className="">Hey, I&apos;m </p>
            <p className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-7xl text-transparent">
              Reza Maulana
            </p>
            <p className="text-5xl">
              a{' '}
              <span className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-7xl text-transparent">
                Front-End{' '}
              </span>
              Developer
            </p>
          </div>
          <div>
            <p className="mb-2 flex items-center gap-x-2 text-2xl font-medium capitalize text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round">
                <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path>
                <line
                  x1="16"
                  y1="8"
                  x2="2"
                  y2="22"></line>
                <line
                  x1="17.5"
                  y1="15"
                  x2="9"
                  y2="15"></line>
              </svg>
              about me
            </p>
            <p className="w-96 mb-10">
              I am a beginner Frontend Developer who is keen to learn and improve my skills. I have a passion for
              creating visually appealing and user-friendly websites. I am always open to new challenges. I am willing
              to work hard to achieve my goals.
            </p>
            <AboutButton />
          </div>
        </div>
        {/* <Image
          src={Sky}
          alt=""
          className="flex rounded-2xl object-cover h-[40rem] "
        /> */}
      </div>
    </>
  );
}
