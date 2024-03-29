import Dashboard from '@/components/Dashboard'
import DropBox from '@/components/DropBox'
import React from 'react'
import type { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'PicWise | Dashboard',
};

const page = () => {
  return (
    <>
    <Dashboard children={<DropBox/>}/>
    </>
  )
}

export default page