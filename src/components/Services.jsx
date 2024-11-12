import img1 from '../assets/s-1.png';
import img2 from '../assets/s-2.png';
import img3 from '../assets/s-3.png';
import img4 from '../assets/s-4.png';
import './Services.css';
import React, { useEffect, useRef } from 'react';

const Services = () => {

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
        <div className="mt-40 pt-10">
            <div className="space-y-2">
                <h3 className="text-5xl text-center font-semibold">OUR SERVICES</h3>
                <p className=" text-center">
                    We build software development teams that grow with our clients, from the early stages to whatever they <br /> aspire to be.
                    Our expertise includes front-end, backend, database, and server solutions for mobile, web, <br /> and desktop applications.
                    Our purpose is to provide our clients with expert guidance and to build <br /> software vital to their organizations.
                </p>
            </div>
            {/* services card */}
            <div className='mt-8'>
                {/* 1st card */}
                <div className='lg:flex items-center'>
                    <img ref={imageRefs[0]} className='animated-image w-[500px] h-[450px]' src={img1} alt="" />
                    <div className='space-y-2'>
                        <h3 className='text-4xl font-semibold text-red-500 text-center'>Software Development</h3>
                        <p className='text-center'>
                            Janos helps you create diverse and complex software solutions for your business needs. Listening to your ideas, we implement and
                            create custom software solutions from scratch, designed especially for your business. With Janos, you get quality software and
                            perfect service every time.
                        </p>
                    </div>
                </div>
                {/* 2nd card */}
                <div className='lg:flex items-center'>
                    <div className='space-y-2'>
                        <h3 className='text-4xl font-semibold text-red-500 text-center'>Web Application Development</h3>
                        <p className='text-center'>
                            Janos looks beyond conventional solutions to develop disruptive web products.
                            Our skilled and dedicated web development team understands your needs and leverage the dynamism of modern web frameworks to
                            create business valued web applications.
                        </p>
                    </div>
                    <img ref={imageRefs[1]} className='animated-image w-[500px] h-[450px]' src={img2} alt="" />
                </div>
                {/* 3rd card */}
                <div className='lg:flex items-center'>
                    <img ref={imageRefs[2]} className='animated-image w-[500px] h-[450px]' src={img3} alt="" />
                    <div className='space-y-2'>
                        <h3 className='text-4xl font-semibold text-red-500 text-center'>Mobile Application Development</h3>
                        <p className='text-center'>
                            Our expertise in custom mobile app development gives our clients the opportunity to pack incredible functionality into their customer’s hands.
                            We develop apps that perform across different mobile devices and operating systems.
                            We are experts at Swift/Objective-C to build native iOS apps and Java/Kotlin for native Android app development.
                            For cross-platform and hybrid development our expertise include, but are not limited to, Ionic, Xamarin, and React Native.
                        </p>
                    </div>
                </div>
                {/* 4th card */}
                <div className='lg:flex items-center'>
                    <div className='space-y-2'>
                        <h3 className='text-4xl font-semibold text-red-500 text-center'>Quality Assurance & Testing Development</h3>
                        <p className='text-center'>
                            Treading on Agile development methodologies and Rational Unified Process practices in testing,Janos ensures highest
                            quality of software solutions to you. Our software testing strategy ensures every component of your software are free of bugs and issues.
                        </p>
                    </div>
                    <img ref={imageRefs[3]} className='animated-image  w-[500px] h-[450px]' src={img4} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Services;