import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className='mb-8 flex items-center gap-2'>
      <Link to="/"><img src="/favicon.png" alt="Favicon" className='w-10' /></Link>
      <p className='font-bold'>untitled-ui</p>
    </header>
  )
}

export default Header