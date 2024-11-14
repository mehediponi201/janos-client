import { TbBrandKickstarter } from "react-icons/tb";
import { MdOutlineHighQuality } from "react-icons/md";
import { FaCalendarDays } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import '../components/Services.css';
import React, { useEffect, useRef } from 'react';

const BenefitWork = () => {

    // Animation Card 
     // Create an array of refs for each image
     const imageRefs = [useRef(), useRef(), useRef(), useRef()];

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
        <div className="mt-40">
            <h3 className="text-center text-4xl font-bold text-red-600">BENEFITS OF WORKING WITH JANOS</h3>

            {/* Benefit card */}
            <div className='flex justify-center items-center min-h-screen mt-30 pt-20'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-40'>
                    {/* 1st card */}
                    <div ref={imageRefs[0]} className="card animated-image">
                        <figure>
                        <TbBrandKickstarter className='w-[250px] h-[100px]'></TbBrandKickstarter>
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-red-600 font-bold text-4xl">Kick Start</h2>
                            <p>Our teams can be ramped up quickly and managed autonomously to implement and execute agreed plans.</p>
                        </div>
                    </div>
                    {/* 2nd card */}
                    <div ref={imageRefs[1]} className="animated-image card ">
                        <figure>
                            <MdOutlineHighQuality className='w-[250px] h-[100px]'></MdOutlineHighQuality>
                            {/* <img className='w-[400px] h-[300px]' src={pic2} alt="Shoes" /> */}
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-red-600 font-bold text-4xl">Top Quality Engineers</h2>
                            <p>Our hiring process is constantly active to ensure your access to the best IT professionals in the market.</p>
                        </div>
                    </div>
                    {/* 3rd card */}
                    <div ref={imageRefs[2]} className="animated-image card">
                        <figure>
                          <FaCalendarDays className='w-[250px] h-[100px]'></FaCalendarDays>
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-red-600 font-bold text-4xl">End to End Management</h2>
                            <p>We are responsible for your project completion and team management from start to end, guaranteeing quality product output.</p>
                        </div>
                    </div>
                    {/* 4th card */}
                    <div ref={imageRefs[3]}  className="animated-image card">
                        <figure>
                           <IoSettingsOutline className='w-[250px] h-[100px]'></IoSettingsOutline>
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-red-600 font-bold text-4xl">Operational Efficiency</h2>
                            <p>Our cost effective services help reduce your costs to remain competitive without compromising quality.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BenefitWork;