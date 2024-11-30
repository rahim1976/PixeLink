'use client'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Typed from 'typed.js'
import React, { useRef, useEffect } from 'react'

export default function Home () {
  const el = useRef(null)

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        'React.Js',
        'Next.Js',
        'Laravel',
        'Framer',
        'Web-Flow',
        'Wordpress',
        'Figma'
      ],
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 1000,
      loop: true
    })

    return () => {
      typed.destroy()
    }
  }, [])

  return (
    <main>
      {/* Hero Section Start */}
      <section className='container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center'>
        <div className='w-full text-center lg:text-left lg:w-1/2 lg:-mt-8'>
          <h1 className='text-3xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl'>
            Supercharge Your Business with <br className='hidden lg:block' />{' '}
            <span className='font-semibold'>PixeLink</span> in Web Development,{' '}
            <br className='hidden lg:block' /> Including{' '}
            <span className='font-semibold underline decoration-primary'>
              <span ref={el} />
            </span>
          </h1>
          <p className='mt-4 text-lg text-gray-500 dark:text-gray-300'>
            No matter if you're a startup, freelancer, or established business,{' '}
            <br className='hidden lg:block' /> we provide tailored resources to
            help you thrive. <br className='hidden lg:block' /> Join our
            community and start building your future today!
          </p>
          <div className='mt-6 bg-transparent border rounded-lg dark:border-gray-700 lg:w-2/3 focus-within:border-primary focus-within:ring focus-within:ring-primary dark:focus-within:border-primary focus-within:ring-opacity-20'>
            <form
              action='https://www.creative-tim.com/twcomponents/search'
              className='flex flex-wrap justify-between md:flex-row'
            ></form>
          </div>
        </div>
        <div className='w-full mt-4 lg:mt-0 lg:w-1/2'>
          <img
            src='https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg'
            alt='tailwind css components'
            width={600}
            height={400}
            className='w-full h-full max-w-md mx-auto'
          />
        </div>
      </section>
      {/* Hero Section End */}

      {/* Pricing Section Start */}
      <section className='py-12 '>
        <div className='container px-4 mx-auto '>
          <div className='text-center mb-12'>
            <h2 className='text-4xl font-bold text-gray-800 dark:text-gray-200'>
              Pricing Plans
            </h2>
            <p className='mt-4 text-lg text-gray-500 dark:text-gray-300'>
              Choose the plan that suits you best
            </p>
          </div>

          <div className='flex flex-wrap justify-center'>
            {/* Basic Plan */}
            <div className='w-full sm:w-1/2 lg:w-1/3 p-4'>
              <div className='p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 text-center transform transition duration-500 hover:scale-105'>
                <h3 className='text-2xl font-semibold text-gray-800 dark:text-gray-200'>
                  Basic
                </h3>
                <p className='mt-4 text-gray-500 dark:text-gray-300'>
                  $20/weekly
                </p>
                <ul className='mt-6 mb-6 space-y-4'>
                  <li className='text-gray-600 dark:text-gray-400'>
                    ✔️ 1 Custom Website Design
                  </li>
                  <li className='text-gray-600 dark:text-gray-400'>
                    ✔️ Basic SEO Optimization
                  </li>
                  <li className='text-gray-600 dark:text-gray-400'>
                    ✔️ Email Support
                  </li>
                  <li className='text-gray-600 dark:text-gray-400'>
                    ✔️ 1 Domain Name Registration
                  </li>
                  <li className='text-gray-600 dark:text-gray-400'>
                    ✔️ Monthly Backups
                  </li>
                </ul>
                <Button variant='outline' className='mx-1'>
                  Get Started
                </Button>
              </div>
            </div>

            {/* Standard Plan */}
            <div className='w-full sm:w-1/2 lg:w-1/3 p-4'>
              <div className='p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center border-2 border-purple-500'>
                <h3 className='text-2xl font-semibold text-gray-800 dark:text-gray-200'>
                  Standard
                </h3>
                <p className='mt-4 text-gray-500 dark:text-gray-300'>
                  $99/weekly
                </p>
                <span className='inline-block px-3 py-1 text-sm font-semibold text-white bg-purple-500 rounded-full'>
                  Best Seller
                </span>
                <ul className='mt-6 mb-6 space-y-4'>
                  <li className='text-gray-600 dark:text-gray-400'>
                    ✔️ 3 Custom Website Designs
                  </li>
                  <li className='text-gray-600 dark:text-gray-400'>
                    ✔️ Advanced SEO Optimization
                  </li>
                  <li className='text-gray-600 dark:text-gray-400'>
                    ✔️ Priority Email Support
                  </li>
                  <li className='text-gray-600 dark:text-gray-400'>
                    ✔️ 1 Year Domain Name Registration
                  </li>
                  <li className='text-gray-600 dark:text-gray-400'>
                    ✔️ Weekly Backups
                  </li>
                </ul>
                <Button variant='outline' className='mx-1'>
                  Get Started
                </Button>
              </div>
            </div>

            {/* Premium Plan */}
            <div className='w-full sm:w-1/2 lg:w-1/3 p-4'>
              <div className='p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-300 hover:scale-105 text-center'>
                <h3 className='text-2xl font-semibold text-gray-800 dark:text-gray-200'>
                  Premium
                </h3>
                <p className='mt-4 text-gray-500 dark:text-gray-300'>
                  $139/weekly
                </p>
                <ul className='mt-6 mb-6 space-y-4'>
                  <li className='text-gray-600 dark:text-gray-400'>
                    ✔️ Unlimited Custom Website Designs
                  </li>
                  <li className='text-gray-600 dark:text-gray-400'>
                    ✔️ Comprehensive SEO Services
                  </li>
                  <li className='text-gray-600 dark:text-gray-400'>
                    ✔️ 24/7 Priority Support
                  </li>
                  <li className='text-gray-600 dark:text-gray-400'>
                    ✔️ 2 Years Domain Name Registration
                  </li>
                  <li className='text-gray-600 dark:text-gray-400'>
                    ✔️ Daily Backups
                  </li>
                </ul>
                <Button variant='outline' className='mx-1'>
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Pricing Section End */}

      {/* Testominals Section Start */}
      <section className='py-12 '>
        <div className='container px-4 mx-auto'>
          <div className='text-center mb-12'>
            <h2 className='text-4xl font-bold text-gray-800 dark:text-gray-200'>
              Testimonials
            </h2>
            <p className='mt-4 text-lg text-gray-500 dark:text-gray-300'>
              What our customers say about us
            </p>
          </div>

          <div className='flex flex-wrap justify-center'>
            {/* Testimonial 1 */}
            <div className='w-full sm:w-1/2 lg:w-1/3 p-4'>
              <div className='p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 flex items-center'>
                <Image
                  src='/manjeet.jpg'
                  alt='Manjeet'
                  width={60}
                  height={60}
                  className='w-16 h-16 rounded-full mr-4'
                />
                <div>
                  <p className='text-gray-600 dark:text-gray-400 mb-4 italic'>
                    "This service has truly transformed my life! I feel more
                    empowered and capable than ever. I can't imagine going back
                    to how things were before!"
                  </p>
                  <h3 className='text-lg font-semibold text-gray-800 dark:text-gray-200'>
                    Manjeet Singh
                  </h3>
                  <p className='text-sm text-gray-500 dark:text-gray-300'>
                    Entrepreneur
                  </p>
                  <div className='flex mt-2'>
                    <span className='text-yellow-500 mr-1'>★</span>
                    <span className='text-yellow-500 mr-1'>★</span>
                    <span className='text-yellow-500 mr-1'>★</span>
                    <span className='text-yellow-500 mr-1'>★</span>
                    <span className='text-yellow-500 mr-1'>★</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className='w-full sm:w-1/2 lg:w-1/3 p-4'>
              <div className='p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 flex items-center'>
                <Image
                  src='/iman.jpg'
                  alt='Iman Gadzhi'
                  width={60}
                  height={60}
                  className='w-16 h-16 rounded-full mr-4'
                />
                <div>
                  <p className='text-gray-600 dark:text-gray-400 mb-4 italic'>
                    "My experience with this team has been nothing short of
                    amazing! They are always available to assist and provide the
                    support needed to succeed."
                  </p>
                  <h3 className='text-lg font-semibold text-gray-800 dark:text-gray-200'>
                    Iman Gadzhi
                  </h3>
                  <p className='text-sm text-gray-500 dark:text-gray-300'>
                    CEO @ BIGDAY
                  </p>
                  <div className='flex mt-2'>
                    <span className='text-yellow-500 mr-1'>★</span>
                    <span className='text-yellow-500 mr-1'>★</span>
                    <span className='text-yellow-500 mr-1'>★</span>
                    <span className='text-yellow-500 mr-1'>★</span>
                    <span className='text-yellow-500 mr-1'>★</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className='w-full sm:w-1/2 lg:w-1/3 p-4'>
              <div className='p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 flex items-center'>
                <Image
                  src='/luke.jpg'
                  alt='Luke'
                  width={60}
                  height={60}
                  className='w-16 h-16 rounded-full mr-4'
                />
                <div>
                  <p className='text-gray-600 dark:text-gray-400 mb-4 italic'>
                    "This tool has been a game changer for my workflow! It's
                    incredibly user-friendly and efficient."
                  </p>
                  <h3 className='text-lg font-semibold text-gray-800 dark:text-gray-200'>
                    Luke Belmar
                  </h3>
                  <p className='text-sm text-gray-500 dark:text-gray-300'>
                    Real-State Investor
                  </p>
                  <div className='flex mt-2'>
                    <span className='text-yellow-500 mr-1'>★</span>
                    <span className='text-yellow-500 mr-1'>★</span>
                    <span className='text-yellow-500 mr-1'>★</span>
                    <span className='text-yellow-500 mr-1'>★</span>
                    <span className='text-yellow-500 mr-1'>★</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testomonals Section End */}

      {/* Blog Section Start */}
      <section className='py-12 '>
        <div className='container px-4 mx-auto'>
          <div className='text-center mb-12'>
            <h2 className='text-4xl font-bold text-gray-800 dark:text-gray-200'>
              Discover Our Top Blogs
            </h2>
            <p className='mt-4 text-lg text-gray-500 dark:text-gray-300'>
              Dive into our latest insights and articles that inspire and
              inform.
            </p>
          </div>

          <div className='flex flex-wrap justify-center'>
            {/* Blog 1 */}
            <div className='w-full sm:w-1/2 lg:w-1/3 p-4'>
              <div className=' rounded-lg shadow-lg  transform transition duration-500 hover:scale-105 dark:border-2'>
                <Image
                  src='/blog8.jpg'
                  alt='Blog 1'
                  width={300}
                  height={200}
                  className='rounded-t-lg w-full h-64 object-cover'
                />
                <div className='p-6'>
                  <h3 className='text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2'>
                    Emerging Trends in Artificial Intelligence for 2025
                  </h3>
                  <p className='text-gray-600 dark:text-gray-400 mb-4'>
                    Explore the latest trends in artificial intelligence that
                    are set to shape industries in 2025. This blog delves into
                    advancements in machine learning, natural language
                    processing, and ethical AI.
                  </p>
                  <Link href='/blog'>
                    <Button variant='outline' className='mx-auto'>
                      All Blogs
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Blog 2 */}
            <div className='w-full sm:w-1/2 lg:w-1/3 p-4'>
              <div className=' rounded-lg shadow-lg  transform transition duration-500 hover:scale-105 dark:border-2'>
                <Image
                  src='/blog6.jpg'
                  alt='Blog 2'
                  width={300}
                  height={200}
                  className='rounded-t-lg w-full h-64 object-cover'
                />
                <div className='p-6'>
                  <h3 className='text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2'>
                    Top Cybersecurity Practices for 2025
                  </h3>
                  <p className='text-gray-600 dark:text-gray-400 mb-4'>
                    As cyber threats become more sophisticated, it's crucial for
                    businesses to adopt robust cybersecurity practices. This
                    blog outlines the top strategies to protect your digital
                    assets in 2025.
                  </p>
                  <Link href='/blog'>
                    <Button variant='outline' className='mx-auto'>
                      All Blogs
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Blog 3 */}
            <div className='w-full sm:w-1/2 lg:w-1/3 p-4'>
              <div className=' rounded-lg shadow-lg  transform transition duration-500 hover:scale-105 dark:border-2'>
                <Image
                  src='/blog7.jpg'
                  alt='Blog 3'
                  width={300}
                  height={200}
                  className='rounded-t-lg w-full h-64 object-cover'
                />
                <div className='p-6'>
                  <h3 className='text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2'>
                    The Rise of Remote Work Technologies
                  </h3>
                  <p className='text-gray-600 dark:text-gray-400 mb-4'>
                    Explore how remote work technologies are reshaping the
                    workplace. This blog discusses the tools and practices that
                    are driving the future of work in a remote environment.
                  </p>
                  <Link href='/blog'>
                    <Button variant='outline' className='mx-auto'>
                      All Blogs
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className='text-center mt-8'>
            <Link href='/blog'>
              <Button variant='outline' className='mx-auto'>
                More Blogs
              </Button>
            </Link>
          </div>
        </div>
      </section>
      {/* Blog Section End */}
    </main>
  )
}
