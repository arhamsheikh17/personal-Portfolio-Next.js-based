import Link from 'next/link';
import React from 'react'
import { BsFacebook } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa6";
import Image from 'next/image';
import picf from '../../../public/images/logo.png';


const Footer = () => {
  return (
    <div className='bg-blue-50'>
      <footer className="text-gray-600 body-font">
    <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
      <Image src={picf} alt="Portfolio" 
       width={100}
        height={100}
        className='w-[50px]'
        />   
        <span className="ml-3 text-xl">Arham Portfolio</span>
      </a>
      <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
        © 2024 Arham Portfolio 
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
        
        <div className="flex gap-x-2" >
        <Link 
        target='_blank'
        href={'https://www.facebook.com/profile.php?id=100011390619766&mibextid=ZbWKwL'}className="text-gray-500">

        <BsFacebook className="text-2xl hover:text-[#4267B2]  " />
        </Link>

        <Link 
        target='_blank'
        href={'https://www.instagram.com/_arhamsheikh?igsh=MWxyb3dtaHg2YXQ4bA=='}className="text-gray-500">

        <RiInstagramFill  className="text-2xl hover:text-[#C13584]  " />
        </Link>

        <Link 
        target='_blank'
        href={'https://www.linkedin.com/in/arham-sheikh-20410b279?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'}className="text-gray-500">

        <FaLinkedin className="text-2xl hover:text-[#0A66C2] rounded-full " />
        </Link>
        </div>
        
      </span>
    </div>
  </footer>
  </div>
  )
}

export default Footer