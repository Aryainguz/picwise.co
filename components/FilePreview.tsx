"use client"
import { X } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

interface props{
    file:any
    removeFile:Function
    prev:string
}

const FilePreview:React.FC<props> = ({file,removeFile,prev}) => {
  return (
  <>
  <div className='flex justify-center'>
  <div className="file-preview gap-4 flex text-left justify-center mb-2 max-w-max border rounded-lg border-blue-200 p-2">
  <Image 
  src={prev}
  alt="file"
  width={50}
  height={60}/>
  <div>
    <h2 className='font-bold text-black'>{file.name}</h2>
    <p className='text-gray-400 text-xs'>{file?.type}/{(file.size/1024/1024).toFixed(2)} MB</p>
  </div>
  <X className='text-red-500 cursor-pointer' onClick={()=>removeFile()}/>
  </div>
  </div>

  </>
  )
}

export default FilePreview