import React from 'react'


function Header() {
  return (
   <header className='mb-8 flex items-center gap-2'>
     <img src="/favicon.png" alt="Favicon" className='w-10' />
     <p className='font-bold'>untitled-ui</p>
   </header>
  )
}

export default Header