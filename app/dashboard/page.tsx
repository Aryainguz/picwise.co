import AIPage from '@/components/AIPage'
import Dashboard from '@/components/Dashboard'
import Main from '@/components/Main';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: 'picwise | Dashboard',
};

const page = () => {
  return (
    <>
     <Dashboard>
      <Main/>
     </Dashboard>
    </>
  )
}

export default page