import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Instagram } from "lucide-react"; 
import { Github } from "lucide-react";
import { X } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background/50 dark:bg-smoothBlack border-t border-gray-200 dark:border-gray-700 py-6" style={{ minHeight: '100px' }}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-lg font-bold text-gray-800 dark:text-white">
              RahimBlog
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              &copy; {new Date().getFullYear()} PixeLink. All rights reserved.
            </p>
          </div>


          <div className="flex space-x-4">
            <a
              href="https://github.com/rahim1976"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-400"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-pink-600"
            >
              <X className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;