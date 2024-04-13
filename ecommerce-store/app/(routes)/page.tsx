import getBillboard from '@/actions/get-billboard'
import Billboard from '@/components/ui/billboard'
import Container from '@/components/ui/container'
import React from 'react'

export const revalidate = 0

const HomePage = async () => {
  const billboard = await getBillboard("01acc5aa-1d79-4b10-828d-a17c70a5d746")
  return (
   <Container>
    <div className=' space-y-10 pb-10'>
     <Billboard data={billboard}/>
    </div>
   </Container>
  )
}

export default HomePage