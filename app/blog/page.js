import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import fs from 'fs';
import path from 'path';

const Blog = () => {
  const filepath = path.join(process.cwd(), 'content', 'posts.json');
  const fileContent = fs.readFileSync(filepath, 'utf-8');
  const blogs = JSON.parse(fileContent); 

  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-4xl font-bold text-center mb-8'>Blog</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {blogs.map(blog => (
          <div
            key={blog.slug}
            className='shadow-lg rounded-lg overflow-hidden duration-500 transition-transform hover:scale-105 dark:border-2'
          >
           <Image
              src={blog.image}
              alt={blog.title}
              width={300}
              height={200}
              className='w-full h-64 object-cover'
            /> 
            <div className='p-4'>
              <h2 className='text-xl font-bold mb-2'>{blog.title}</h2>
              <p className='mb-4'>{blog.description}</p>
              <div className='flex justify-between items-center text-gray-600 dark:text-gray-400 text-sm'>
                <span>
                  by {blog.author} | {new Date(blog.date).toLocaleDateString()}
                </span>
              </div>

              <Link
                href={`/blogpost/${blog.slug}`}
                className={`${buttonVariants({ variant: 'outline' })} m-2`}
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;