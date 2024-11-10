import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import pic0 from '../../../public/images/ama.jpg';
import pic1 from '../../../public/images/nmp.png';
import pic2 from '../../../public/images/tac.jpg';
import pic3 from '../../../public/images/pic.jpg';
import pic4 from '../../../public/images/portfolio.jpg';
const Project = () => {
  return (
    <div id='Project'>
   <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
      My projects
      </h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
      Projects that I have developed throughtout my journey where, I learned multiple technologies 
      and implement it.

      </p>
    </div>

    <div className="flex flex-wrap -m-8">

                              {/* PROJECTS */}

        {/*ptoject # 1 */}

      <div className="lg:w-1/3 sm:w-1/2 p-4">

        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src= {pic0}
            width={600}
            height={360}
          />

          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
              Amazon Website Project
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Clone
            </h1>
            <p className="leading-relaxed">
             Amazon website clone using 
             Technologies - HTML, CSS, JAVASCRIPT. 
            </p>
           
           
            <Link target="_blank" href={"https://amazon-website-clone-mauve.vercel.app/"}>
             <p className="leading-relaxed text-blue-500 hover:underline">
            View project 
           </p></Link>
          </div>
        </div>
      </div>

      {/*ptoject # 2 */}
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={pic1}
            width={601}
            height={361}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
              Command Line Projects
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Simple Calculator & Number Guessing 
            </h1>
            <p className="leading-relaxed">
             Command Line Interface based projects using technologies 
             typescript and npm.
            </p>
            <Link target="_blank" href={"https://www.npmjs.com/~arhamsheikh"}>
             <p className="leading-relaxed text-blue-500 hover:underline">
            View project 
           </p></Link>
          </div>
        </div>
      </div>
      {/*project # 3 */}
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={pic2}
            width={603}
            height={363}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
              Tic Tac Toe Game Project
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
             Tic Tac Toe
            </h1>
            <p className="leading-relaxed">
            Tic Tac Toe Game using 
            Technologies - HTML, CSS, JAVASCRIPT. 
            </p>
            <Link target="_blank" href={"https://tic-tac-toe-game-ipddit9fz-arhams-projects-b0298ffa.vercel.app/"}>
             <p className="leading-relaxed text-blue-500 hover:underline">
            View project 
           </p></Link>
          </div>
        </div>
      </div>

                  {/* project 4 */}

      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={pic3}
            width={601}
            height={361}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
              Rock paper Scissor Game Project 
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Rock Paper Scissor 
            </h1>
            <p className="leading-relaxed">
          Rock Paper Scissor Game using 
            Technologies - HTML, CSS, JAVASCRIPT.
            </p>
            <Link target="_blank" href={"https://rock-paper-scissor-game-ochre.vercel.app/"}>
             <p className="leading-relaxed text-blue-500 hover:underline">
            View project 
           </p></Link>
          </div>
        </div>
      </div>
                       {/* project 5 */}
                       <div className="lg:w-1/3 sm:w-1/2 p-4">

        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center border border-black  "
            src= {pic4}
            width={600}
            height={360}
          />

          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
              Personal Portfolio Project
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Portfolio
            </h1>
            <p className="leading-relaxed">
             Personal portfolio using 
             Technologies - HTML, CSS, JAVASCRIPT. 
            </p>
           
           
            <Link target="_blank" href={"https://personal-portfolio-eight-khaki.vercel.app/"}>
             <p className="leading-relaxed text-blue-500 hover:underline object-fit object-center">
            View project 
           </p></Link>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>


   </div>
  )
}

export default Project