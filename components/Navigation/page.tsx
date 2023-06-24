'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { HireMe } from '../Button/page';
import { motion } from 'framer-motion';

export const NavLink = ({ href, NavTitle }: { href: string; NavTitle: string }) => {
  const pathname = usePathname();

  return (
    <>
      <div className="group flex">
        <Link
          href={href}
          className={`transition duration-300 ease-in-out group-hover:text-white ${
            pathname === href ? 'text-white' : null
          }`}>
          {NavTitle}
        </Link>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor "
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className={`opacity-0 transition duration-300 ease-in-out ${
            pathname === href ? 'opacity-0' : 'group-hover:stroke-white group-hover:opacity-100'
          }`}>
          <line
            x1="7"
            y1="17"
            x2="17"
            y2="7"></line>
          <polyline points="7 7 17 7 17 17"></polyline>
        </svg>
      </div>
    </>
  );
};

export default function DesktopNavigation() {
  return (
    <>
      <nav className="mx-32 my-10 flex items-center justify-between capitalize tracking-wide text-zinc-400 ">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}>
          <Link
            href="/"
            className="bg-gradient-to-r font-semibold tracking-wide text-white">
            Reza Portfolio.
          </Link>
        </motion.div>
        <div className="flex gap-x-20  text-sm">
          <motion.div
            initial={{ y: -80 }}
            animate={{ y: 0 }}
            transition={{ delay: 0 }}>
            <NavLink
              href="/"
              NavTitle="Home"
            />
          </motion.div>
          <motion.div
            initial={{ y: -80 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.1 }}>
            <NavLink
              href="/about"
              NavTitle="About"
            />
          </motion.div>
          <motion.div
            initial={{ y: -80 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2 }}>
            <NavLink
              href="/work"
              NavTitle="Work"
            />
          </motion.div>
          <motion.div
            initial={{ y: -80 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.3 }}>
            <NavLink
              href="/portfolio"
              NavTitle="Portfolio"
            />
          </motion.div>
        </div>
        <div>
          <HireMe />
        </div>
      </nav>
      {/* <div className='flex py-px bg-gradient-to-r from-zinc-950 via-zinc-600 to-zinc-950 '/> */}
    </>
  );
}

export function ResponsiveNavigation() {
  return (
   <p>Responsive Navigation</p>
  );
}
