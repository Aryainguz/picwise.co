import AIPage from '@/components/AIPage'
import Dashboard from '@/components/Dashboard'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: 'PicWise AI Enhancer',
};

const page = () => {
  return (
    <>
     <Dashboard>
     <AIPage/>
     </Dashboard>
    </>
  )
}

export default page