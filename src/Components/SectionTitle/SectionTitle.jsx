import React from 'react'

const SectionTitle = ({heading, subHeading}) => {
  return (
    <div className='text-center md:w-4/12 mx-auto mb-16 mt-16'>
      <p className=' text-[#D99904] font-semibold text-xl p-5'>---{subHeading}---  </p>
      <h3 className='border-y-4 uppercase font-semibold p-5 text-4xl'>{heading}</h3>
    </div>
  )
}

export default SectionTitle
