'use client';

import React from 'react';
import OutlineArrow from '../OutlineArrow/page';
import Link from 'next/link';

interface Props {
  buttonTitle: string;
}

export const MainButton = (props: Props) => {
  return (
    <button className="rounded-full border-2 border-transparent bg-indigo-500 px-6 py-2 text-white transition hover:border-indigo-500 hover:bg-transparent hover:text-black ">
      {props.buttonTitle}
    </button>
  );
};

export const BackButton = (props: Props) => {
  return (
    <button className="rounded-md border-2 border-indigo-500 px-6 py-2 text-black transition hover:bg-indigo-500 hover:text-white">
      {props.buttonTitle}
    </button>
  );
};

export const ContactButton = () => {
  return <button className="rounded-lg bg-green-400 px-6 py-3 capitalize text-black">contact me</button>;
};

export const AboutButton = () => {
  return (
    <Link
      href="/about"
      className="transition duration-300 ease-in-out hover:text-white">
      <button className="flex items-center gap-x-2 px-6 py-2 outline outline-zinc-400 transition-all duration-300 hover:pl-8 ">
        About Me <OutlineArrow rotate="rotate-90" />
      </button>
    </Link>
  );
};

export const HireMe = () => {
  return (
    <Link href="/contact">
      <button className="px-5 py-1.5 text-white outline outline-1 outline-white">Hire Me!</button>
    </Link>
  );
};
