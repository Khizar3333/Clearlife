import React from 'react';
import whatsapp from "../images/whatsapp-logo.svg"
import Image from 'next/image';

const WhatsAppIcon = () => {
    return (
        <Image className='ml-7 absolute top-4 -right-20 '
            src={whatsapp} // Replace with your icon path
            alt="WhatsApp"
            width={40} // Adjust width and height as needed
            height={40}
        />
    );
};

export default WhatsAppIcon;