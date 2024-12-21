import Image from 'next/image'
import React from 'react'

function ContactBanner() {
  return (
    <section className="relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-400 dark:bg-gradient-to-br dark:from-blue-900 dark:to-purple-900" />
    <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
    <div className="relative container mx-auto px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
          Contact Us
        </h1>
        <p className="mt-6 text-lg text-indigo-100 max-w-prose mx-auto">
        We're here to help! Whether you have questions, need assistance, or just want to share your thoughts, feel free to reach out to us. Our dedicated team is ready to assist you and ensure you have the best experience possible. Use the contact form below, drop us an email, or connect with us on social media—we’d love to hear from you! Let’s make things simple and straightforward, together.
        </p>

      </div>
    </div>
    <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white dark:from-gray-900" />
  </section>  
  )
}

export default ContactBanner










