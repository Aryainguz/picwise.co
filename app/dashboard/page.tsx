import Dashboard from '@/components/Dashboard'
import DropBox from '@/components/DropBox'
import React from 'react'

const page = () => {
  return (
    <>
    <Dashboard children={<DropBox/>}/>
    </>
  )
}

export default page