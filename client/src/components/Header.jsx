import { GiAtomicSlashes } from 'react-icons/gi'

function Header() {
  return (
    <nav className='navbar bg-support mb-4 p-0'>
      <div className='container'>
        <a
          href='/'
          className='navbar-brand'
        >
          <div className='d-flex align-items-center gap-1'>
            <GiAtomicSlashes className='text-main' />         
            <div className='logo'>
              Ensi
            </div>
          </div>
        </a>
      </div>
    </nav>
  )
}

export default Header
