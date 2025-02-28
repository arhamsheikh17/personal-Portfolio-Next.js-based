import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import picab from '../../../public/images/pic.jpg';
const About = () => {
  return (
    <div id="About">
      <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <Image
        className="object-cover object-center rounded-[4rem]  mx-auto mr-4"
        alt="hero"
        width={400}
        height={250}
        src={picab}
      />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-2 font-medium text-gray-900">
        About Me
      </h1>
      <p className="mb-2 leading-relaxed ">
       Hi! I am Arham student of Bachelor of Science in Software Engineering from UBIT.
       Currently I am working on website development with technologies HTML, CSS, JS, TS, NEXT.JS, MYSQL
      </p>
      <div className="flex justify-center">
        <Link href={"/assests/picture/cv.pdf"}>
        <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
        View CV
        </button>
        </Link>
      </div>
    </div>
  </div>
</section>



    </div>
  )
}

export default About