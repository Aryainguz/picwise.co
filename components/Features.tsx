import React from 'react'
import Image from 'next/image'
import featureImg from '../public/assets/feature-illustration.png'
import { DownloadIcon, FileEdit, LucideEdit3 } from 'lucide-react'

const Features = () => {
  return (
    <>
<div className="overflow-hidden bg-white py-24 sm:py-32" id='features'>
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
      <div className="lg:pr-8 lg:pt-4">
        <div className="lg:max-w-lg">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">90% Efficient</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Effortless Image Compression & Conversion</p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Compress and convert images with ease. Resize, Convert, and Compress images in just a few clicks. PicWise is designed to make image compression and conversion better than ever.
          </p>
          <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
            <div className="relative pl-9">
              <dt className="inline font-semibold text-gray-900">
                <svg className="absolute left-1 top-1 h-5 w-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z" clipRule="evenodd" />
                </svg>
                Upload Image
              </dt>
              <dd className="inline"> Effortlessly upload images directly to our platform for instant compression or conversion.</dd>
            </div>
          </dl>
          <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
            <div className="relative pl-9">
              <dt className="inline font-semibold text-gray-900">
               <LucideEdit3 className="absolute left-1 top-1 h-5 w-5 text-indigo-600" />
                Compress/Convert Image
              </dt>
              <dd className="inline"> Compress or Converted images in just a few clicks.</dd>
            </div>
          </dl>
          <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
            <div className="relative pl-9">
              <dt className="inline font-semibold text-gray-900">
                <DownloadIcon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" />
                Download Image
              </dt>
              <dd className="inline"> Download image in seconds with just a click.</dd>
            </div>
          </dl>
        </div>
      </div>
      <Image src={featureImg} alt="feature illustration" width={450} height={450} />
    </div>
  </div>
</div>


    </>
  )
}

export default Features