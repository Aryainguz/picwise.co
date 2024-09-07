import AIPage from '@/components/AIPage'
import Dashboard from '@/components/Dashboard'
import Main from '@/components/Main';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: 'Picwise | Dashboard',
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