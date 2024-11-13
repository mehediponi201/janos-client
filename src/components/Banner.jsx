import banner from '../assets/home-banner.png';
import './Services.css';
import React, { useEffect, useRef } from 'react';

const Banner = () => {

     // Create an array of refs for each image
     const imageRefs = [useRef()];

     useEffect(() => {
         const observerOptions = {
             threshold: 0.3, // Trigger animation when 30% of the image is visible
         };
 
         const observer = new IntersectionObserver((entries) => {
             entries.forEach((entry) => {
                 if (entry.isIntersecting) {
                     entry.target.classList.add('animate');
                 }
             });
         }, observerOptions);
 
         // Observe each image
         imageRefs.forEach((ref) => {
             if (ref.current) observer.observe(ref.current);
         });
 
         return () => observer.disconnect(); // Clean up observer on component unmount
     }, []);

    return (
        <div className='lg:flex items-center mt-12'>
            <div ref={imageRefs[0]} className='animated-image space-y-5'>
                <h3 className="text-5xl font-medium">JANOS - Your trusted Software Development Partner</h3>
                <p className='text-lg'>A top tier software development team assisting owners and decision makers to 
                implement digital initiatives to achieve lasting financial success</p>
            </div>
            <div>
                <img src={banner} alt="" />
            </div>
        </div>
    );
};

export default Banner;