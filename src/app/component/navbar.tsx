import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import pic from '../../../public/images/logo.png';
import { MdOutlineFileDownload } from "react-icons/md";

const Navbar = () => {
  return (
    <div className='bg-white z-50 sticky top-0'>
    <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-2 bg-gray-80 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-blue-600 mb-4 md:mb-0">
      <Image src={pic} alt="Portfolio" 
       width={100}
        height={100}
        className='w-[50px]'
        />   
       
      <span className="ml-3 text-xl">Arham Portfolio</span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <Link href={"/"} className="mr-5 hover:text-blue-600">
      Home
      </Link>
       <Link href={"#About"} className="mr-5 hover:text-blue-600">
      About
      </Link>
      <Link href={"#skill"} className="mr-5 hover:text-blue-600">
      Skills
      </Link>
      <Link href={"#Project"} className="mr-5 hover:text-blue-600">
      Projects
      </Link>
      <Link href={"#Contact"} className="mr-5 hover:text-blue-600">
      Contact
      </Link> 
    </nav>

    <a href="/assests/picture/cv.pdf">
    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
     Download CV
     <MdOutlineFileDownload className="ml-2 text-xl" />
    </button>
    </a>

  </div>
</header>
</div>
  )
}

export default Navbar