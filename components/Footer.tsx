import React from 'react'

function Footer() {
  return (
    <div>
      <footer className='bg-base-800 footer footer-center rounded p-10 text-slate-400'>
        <div className='grid grid-flow-col gap-4'>
          <a href='#about' className='link link-hover'>Home</a>
          <a href='#services' className='link link-hover'>SERVICES</a>
          <a href='#pricelist' className='link link-hover'>PRICE LIST</a>
        </div>

        <div>
          <p>
            Copyright © 2022 - Made with love by
            <a className='text-blue-400' href='https://github.com/sacsbrainz'>
              SACS INC
            </a>
            All right reserved
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Footer
