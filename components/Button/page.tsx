'use client';

import React from 'react';
import OutlineArrow from '../OutlineArrow/page';
import Link from 'next/link';
import { motion } from 'framer-motion';

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
      className="group transition duration-300 ease-in-out hover:text-white">
      <button className="flex items-center gap-x-2  ">
        More About Me <OutlineArrow className="rotate-90" />
      </button>
    </Link>
  );
};

export const HireMe = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, color: 'white' }}
      transition={{ delay: 0.5 }}
      >
      <Link href="/contact">Hire Me!</Link>
    </motion.div>
  );
};
