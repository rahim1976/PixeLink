'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { buttonVariants } from '@/components/ui/button'

const projects = [
  {
    id: 1,
    title: 'Gamers Paradise',
    description: 'Gamers Paradise is a vibrant online community dedicated to all things gaming. Built with Next.js, our platform offers insightful articles, reviews, and guides tailored for gamers of all levels. Whether youre a casual player or a hardcore enthusiast, youll find engaging content that keeps you updated on the latest trends, game releases, and industry news. Join us as we explore the exciting world of gaming together',
    image: '/project1.jpg',
    date: '2024-10-11',
    developer: 'Rahim Ali'
  },
  {
    id: 2,
    title: 'JetSet Courier',
    description: 'JetSet Courier is a robust full-stack web application designed for efficient courier management. Developed using core PHP, this platform streamlines the process of sending and tracking packages, providing users with real-time updates and a user-friendly interface. With features like order management, route optimization, and customer notifications, JetSet Courier is your reliable solution for all your delivery needs. Experience seamless logistics and enhanced productivity with our innovative application!',
    image: '/project2.jpg',
    date: '2023-12-14',
    developer: 'Rahim Ali'
  },
  {
    id: 3,
    title: 'Ryana Calendars',
    description: 'Ryana Calendars is a visually appealing web application that helps users manage their schedules and events with ease. Built using HTML, CSS, and Bootstrap, this project showcases a responsive and user-friendly interface that adapts to any device. With features such as customizable calendar views, event reminders, and intuitive navigation, Ryana Calendars is designed to enhance productivity and keep your life organized. Experience the perfect blend of functionality and design with our sleek calendar solution!',
    image: '/project3.jpg',
    date: '2023-05-14',
    developer: 'Rahim Ali'
  },
  {
    id: 4,
    title: 'Extreme Computers',
    description: 'Extreme Computers is a comprehensive full-stack web application developed with Laravel PHP, offering a complete solution for managing computer-related services. This project features a robust backend and a sleek frontend, ensuring that every aspect of the application functions seamlessly. With capabilities such as user management, service booking, and real-time data processing, Extreme Computers is designed to enhance efficiency and streamline operations. Experience the power of Laravel and the convenience of a fully operational platform tailored to meet your computing needs.',
    image: '/project4.jpg',
    date: '2023-09-28',
    developer: 'Rahim Ali'
  },
  {
    id: 5,
    title: 'Soccer Club',
    description: 'Soccer Club is an engaging sports website developed as a full-stack application using PHP Laravel. This platform serves as a hub for soccer enthusiasts, offering features such as team management, match schedules, player statistics, and live updates. With a user-friendly interface and responsive design, Soccer Club provides an immersive experience for fans and players alike. Whether you’re looking to follow your favorite team or manage a local league, this application delivers all the tools you need to stay connected to the world of soccer!',
    image: '/project5.jpg',
    date: '2022-12-05',
    developer: 'Rahim Ali'
  },
  {
    id: 6,
    title: 'Mobile App',
    description: 'Mobile App is an e-commerce store dedicated to mobile devices, crafted with core HTML and CSS to provide a seamless shopping experience. This project features a clean and modern UI design that allows users to browse, compare, and purchase the latest mobile phones effortlessly. With responsive layouts and intuitive navigation, Mobile App ensures that customers can access the store from any device. Whether you’re looking for the newest releases or popular models, this application is designed to meet all your mobile shopping needs.',
    image: '/project6.jpg',
    date: '2022-05-22',
    developer: 'Rahim Ali'
  }
]

const AboutPage = () => {
  return (
    <div className='max-w-7xl mx-auto px-4 py-10'>
      {/* Hero Section */}
      <motion.section
        className='text-center mb-12 p-8 md:p-12 lg:p-16 dark:bg-smoothBlack border-2 rounded-lg bg-gradient-to-r dark:from-gray-900 dark:to-smoothBlack'
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{
          scale: 1.05,
          boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)'
        }}
        transition={{ duration: 0.5 }}
      >
        <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold'>About Us</h1>
        <p className='mt-4 text-base md:text-lg '>
          I am an experianced Front-End Developer, Passionate and results-driven
          with over two years of hands-on experience in building dynamic,
          responsive, and user-friendly websites. I specialize in HTML, CSS,
          JavaScript, Typescript & frameworks like React & Next.js.
        </p>
        <p className='mt-4 text-base md:text-lg '>
          I am constantly evolving and learning new technologies to stay at the
          forefront of the ever-changing web development landscape. Currently, I
          am delving into Web3 development and improving my expertise in
          frontend frameworks.
        </p>
        <p className='mt-4 text-base md:text-lg '>
          I am confident in my ability to contribute effectively to any team or
          project.
        </p>
      </motion.section>

      {/* Projects Section */}
      <motion.section className='container mx-auto p-4'>
        <h1 className='text-4xl font-bold text-center mb-8'>Projects</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {projects.map(project => (
            <motion.div
              key={project.id}
              className='shadow-lg rounded-lg overflow-hidden duration-500 transition-transform hover:scale-105 dark:border-2'
            >
              <img
                src={project.image}
                alt={project.title}
                className='w-full h-64 object-cover' // Adjusted height for a consistent card size
              />
              <div className='p-4'>
                <h2 className='text-xl font-bold mb-2'>{project.title}</h2>
                <p className='mb-4'>{project.description}</p>
                <div className='flex justify-between items-center text-gray-600 dark:text-gray-400 text-sm'>
                  <span>
                    by {project.developer} | {project.date}{' '}
                    {/* Directly using the date from the data */}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  )
}

export default AboutPage
