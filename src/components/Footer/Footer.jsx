import React from 'react';
import "./Footer.css";

const Footer = () => {

    let date = new Date();

  return (
    <footer className='footer bg-black flex flex-center' id = "footer">
        <div className='container flex flex-center w-100'>
            <div className='grid footer-content text-center'>
                <p className='text'>Created by PUCCHAGINJALA LAKSHMI NIRANJAN from VELLORE INSTITUTE OF TECHNOLOGY(Vellore).</p>
                <span className='text'>Copyright &copy; {date.getFullYear().toString()} AMEDAUS Theme</span>
            </div>
        </div>
    </footer>
  )
}

export default Footer
