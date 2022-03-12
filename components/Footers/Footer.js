import React from 'react'

export default function Footer() {
    return (
        <footer>
            <div className=" bg-dark d-flex pt-2 justify-content-between text-white" style={{width : "100%"}}>
                <div className='mx-auto'>
                    <p>For any suggestions/ideas, contact me on discord : Basco#6472</p>
                </div>
                <div className='mx-auto'>
                    <a 
                    href='https://runonflux.io/' 
                    className='text-white' 
                    target="_blank"
                    rel="noreferrer"
                    >RunOnFlux.io</a>
                </div>
                <div className='mx-auto'>
                    <p>If you want tip me (Flux): t1LQe67UZDPAPFW6cQk5T1tnK7jtTe52vFW</p>
                </div>
            </div>
        </footer>
    )
}