'use client';

import React from 'react';
import { sidebarLinks } from '@/constants';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface SidebarProps {
  user: { firstName: string; lastName: string }; // Define the user prop type
}

export const Sidebar: React.FC<SidebarProps> = ({ user }) => {
  const pathname = usePathname(); // Get the current path

  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-4">
        {/* Logo and Home Link */}
        <Link href="/" className="mb-12 cursor-pointer flex items-center gap-2">
          <Image
            src="/icons/logo.svg"
            width={34}
            height={34}
            alt="Horizon logo"
            className="size-[24px] max-xl:size-14"
          />
          <h1 className="sidebar-logo">Vpay</h1>
        </Link>

        {/* Sidebar Links */}
        {sidebarLinks.map((item) => {
          // Check if the current link is active
          const isActive =
            pathname === item.route || pathname.startsWith(`${item.route}/`);

          return (
            <Link
              href={item.route}
              key={item.label}
              className={cn('sidebar-link', { 'bg-bank-gradient': isActive })}
            >
              {/* Icon */}
              <div className="relative size-6">
                <Image
                  src={item.imgURL}
                  alt={item.label}
                  fill
                  className={cn({
                    'brightness-[3] invert-0': isActive,
                  })}
                />
              </div>

              {/* Label */}
              <p className={cn('sidebar-label', { '!text-white': isActive })}>
                {item.label}
              </p>
            </Link>
          );
        })}
      </nav>
    </section>
  );
};

export default Sidebar;
