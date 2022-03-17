import React from 'react'

export default function Footer() {
    return (
        <footer>
            <div className=" bg-dark d-flex justify-content-around pt-2 text-white" style={{width : "100%"}}>
                    <p>For any suggestions/ideas, contact me on discord : Basco#6472</p>
                    <a 
                    href='https://runonflux.io/' 
                    className='text-white' 
                    target="_blank"
                    rel="noreferrer"
                    >RunOnFlux.io</a>
                <div className='text-end'>
                    <p>If you want tip me (Flux): t1LQe67UZDPAPFW6cQk5T1tnK7jtTe52vFW</p>
                </div>
            </div>
        </footer>
    )
}