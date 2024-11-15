import React from 'react'
import Banner from '../Banner/Banner'
import ProgramSection from '../ProgramSection/ProgramSection'
import ChooseUsSection from '../ChooseUsSection/ChooseUsSection'
import Educators from '../Educators/Educators'
import Testimonials from '../Testimonials/Testimonials'

const Home = () => {
  return (
    <div className=''>
      <Banner/>
      <ProgramSection/>
      <ChooseUsSection/>
      <Educators/>
      <Testimonials/>

    </div>
  )
}

export default Home