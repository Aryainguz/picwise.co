"use client"
import React, { ReactNode } from 'react'
import {File, X}  from 'lucide-react'

interface props{
    file:any
    removeFile:Function
}

const FilePreview:React.FC<props> = ({file,removeFile}) => {
  return (
  <>
  <div className='flex justify-center'>
  <div className="file-preview gap-4 flex text-left justify-center my-4 max-w-max border rounded-lg border-blue-200 p-2">
  <File size={40}/>
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