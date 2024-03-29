import Image from 'next/image'
import React from 'react'
import aiIllustration from '../public/assets/Saly-13.png'

const AIPage = () => {
  return (
    <>
    <div className="mt-32 sm:mt-12 p-6">
        
<div>
  <h1 className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-4xl dark:text-white">Coming <mark className="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">Soon</mark> in Pro Plan</h1>
  <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Enhance, Edit and Compress your images with AI to pixel perfection.</p>
</div>


    <Image src={aiIllustration} alt=''height={450} width={450}/>

    </div>
    </>
  )
}

export default AIPage