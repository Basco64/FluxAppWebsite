import React from 'react'
import Youtube from './Youtube'

export default function FooterHome() {
  return (
    <footer>
      <section className='mb-4'>
        <Youtube />
      </section>
      <section>
        <div className=" bg-dark d-flex pt-2 justify-content-between text-white" style={{ width: "100%" }}>
          <div className='mx-auto'>
            <p>For any suggestions/ideas, contact me on discord : Basco#6472</p>
          </div>
          <div className='mx-auto'>
            <a 
            href='https://runonflux.io/' 
            className='text-white' 
            target="blank"
            >RunOnFlux.io</a>
          </div>
          <div className='mx-auto'>
            <p>If you want tip me (Flux): t1LQe67UZDPAPFW6cQk5T1tnK7jtTe52vFW</p>
          </div>
        </div>
      </section>
    </footer>
  )
}