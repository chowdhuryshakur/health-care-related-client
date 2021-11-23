import React from 'react';
import { Facebook, Twitter, Youtube, Linkedin } from 'react-feather';
import './footer.css'

const Footer = () => {

    const footerStyle = {
        height : '150px',
        backgroundColor: '#176ABD'
    }

    return (
        <div  style = {footerStyle} className="d-flex flex-column justify-content-center align-items-center">
            <p className='footer text-white fw-bold fs-3'>MediSha</p>
            <div>
                <Facebook fill='white' className='me-3'></Facebook>
                <Twitter fill='white' className='me-3'></Twitter>
                <Youtube fill='white' className='me-3'></Youtube>
                <Linkedin fill='white' className='me-3'></Linkedin>
            </div>
        </div>
    );
};

export default Footer;