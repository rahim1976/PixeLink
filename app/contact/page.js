"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const ContactPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Hero Section */}
      <motion.section
        className="text-center mb-12 p-8 md:p-12 lg:p-16 dark:bg-smoothBlack border-2 rounded-lg bg-gradient-to-r dark:from-gray-900 dark:to-smoothBlack"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)" }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">Contact Us</h1>
        <p className="mt-4 text-base md:text-lg text-gray-600">
          We'd love to hear from you! Please fill out the form below or reach out to us using the contact details provided.
        </p>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {/* Contact Form Card */}
        <motion.div
          className="border-2 shadow-lg rounded-lg overflow-hidden bg-gradient-to-r dark:from-gray-900 dark:to-smoothBlack"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)" }}
          transition={{ duration: 0.3 }}
        >
          <div className="p-4">
            <h2 className="text-lg md:text-xl font-semibold ">Get in Touch</h2>
            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium " htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  required
                  placeholder="Your Name"
                  className="mt-1 block w-full p-2 border dark:bg-gray-900 border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium " htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  required
                  placeholder="Your Email" 
                  className="mt-1 block w-full p-2 border dark:bg-gray-900 border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium " htmlFor="message">Message</label>
                <textarea
                  id="message"
                  required
                  rows="4"
                  placeholder="Your Message" 
                  className="mt-1 block w-full p-2 border dark:bg-gray-900 border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                ></textarea>
              </div>
              <Button
                type="submit"
                className="w-full py-2 mt-4 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              >
                Send Message
              </Button>
            </form>
          </div>
        </motion.div>

        {/* Contact Details Card */}
        <motion.div
          className="border-2 shadow-lg rounded-lg overflow-hidden bg-gradient-to-r dark:from-gray-900 dark:to-smoothBlack"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)" }}
          transition={{ duration: 0.3 }}
        >
          <div className="p-4">
            <h2 className="text-lg md:text-xl font-semibold dark:">Office Details</h2>
            <p className="dark:text-gray-300 py-4">
            <strong>Email:</strong> PixeLink@business.com
            </p>
            <p className="dark:text-gray-300 py-4">
              <strong>Phone:</strong> +1 (234) 567-890
            </p>
            <p className="dark:text-gray-300 py-4">
              <strong>Address:</strong> 5th Building, Downtown LA, Los Angless, USA
            </p>
            <p className="dark:text-gray-300 py-4">
              <strong>Office Hours:</strong> Mon - Fri, 9 AM - 5 PM
            </p>
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default ContactPage;