import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import pic from '../../../public/images/pic.jpg';

const Hero = () => {
  return (
    <section className="text-gray-400 bg-gray-200 body-font">
    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">
        Welcome to My Portfolio,  
        </h1>
        <div className='w-[100px] h-[2px] bg-blue-700'></div>
        <p className="mb-8 leading-relaxed">
          A showcase of my skills, projects, and experiences.
          Each project reflects my dedication to learning and growth in the field, blending creativity with technical expertise. From front-end design to back-end functionality, I aim to build efficient, user-friendly solutions. Here, you will find a collection of my work, highlighting my journey through problem-solving, collaboration, and the continuous pursuit of innovation in web development.
        </p>
        <div className="flex justify-center">
          <Link href={"#Contact"}>
          <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
            Contact
          </button>
          </Link>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Image
          className="object-cover object-center rounded mx-auto w-[15rem] p-2 border-4 border-black-900 rounded-full"
          alt="hero"
          width={500}
          height={500}
          src={pic}
        />
      </div>
    </div>
  </section>
  
  )
}

export default Hero