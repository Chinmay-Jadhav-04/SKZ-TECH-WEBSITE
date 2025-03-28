'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const SocialMedia = () => {
  const [isOpen, setIsOpen] = useState(false);

  const socialLinks = [
    {
      name: 'Instagram',
      icon: '/instagram.svg',
      url: 'https://www.instagram.com/skz.tech?igsh=Z3A4MXFia2IzYnU4'
    },
    {
      name: 'Facebook',
      icon: '/facebook.svg',
      url: 'https://facebook.com'
    },
    {
      name: 'Youtube',
      icon: '/youtube-svgrepo-com.svg',
      url: 'https://youtube.com'
    },
    {
      name: 'Email Us',
      icon: '/GmailLogo.jpg', // Updated to use JPG file
      url: "mailto:admin@skztech.in" // Updated to use Google Mail
    },
    {
      name: 'LinkedIn',
      icon: '/LinkedinLogo.png',
      url: 'https://linkedin.com/company/your-company'
    },
    {
      name: 'Twitter',
      icon: '/XLogo.jpg',
      url: 'https://twitter.com/your_handle'
    }
  ];

  return (
    <nav className="fixed top-0 w-full z-[50] px-5 py-5 flex justify-between items-center">
      {/* Logo/Text on the left */}
      <Link href="/">
        <h1 className="text-2xl font-bold cursor-pointer gradient-text">
          SKZ TECH
        </h1>
      </Link>

      {/* Social Media Button on the right */}
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-center w-[50px] h-[50px] rounded-full 
          bg-[#0300145e] backdrop-blur-md border border-[#7042f861] transition-all 
          duration-300 hover:bg-[#0300149d] hover:border-[#7042f8]"
        >
          <Image
            src="/sidebar.svg"
            alt="social media"
            width={20}
            height={20}
            className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          />
        </button>

        {/* Dropdown Menu */}
        <div
          className={`absolute top-[60px] right-0 bg-[#0300145e] backdrop-blur-md 
          border border-[#7042f861] rounded-lg p-2 transition-all duration-300
          ${isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}
        >
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 p-2 rounded-lg hover:bg-[#7042f81c] 
              transition-all duration-300 w-full min-w-[150px]"
            >
              <Image
                src={social.icon}
                alt={social.name}
                width={20}
                height={20}
              />
              <span className="text-white text-sm">{social.name}</span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default SocialMedia;
