import pic1 from '../assets/offer/home-team.png';
import pic2 from '../assets/offer/home-supervision.png';
import pic3 from '../assets/offer/home-engineers.png';
import pic4 from '../assets/offer/home-collaboration.png';
import pic5 from '../assets/offer/offer-5.png';
import pic6 from '../assets/offer/offer-6.png';
import './Services.css';
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const OfferPage = () => {

    const imageRefs = [useRef(), useRef(), useRef(), useRef(), useRef(), useRef()];

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

        return () => observer.disconnect();
    }, []);


    // Read More Text Logic
    const [showFullText, setShowFullText] = useState(false);

    const toggleText = () => {
        setShowFullText(!showFullText);
    };

    const fullText1 = "Shares Management of public limited company with core functionalities";
    const previewText1 = fullText1.split(' ').slice(0, 20).join(' ') + (fullText1.split(' ').length > 20 ? '...' : '');

    const fullText2 = "Hybrid Virtual Annual General Meeting of Public Limited Company";
    const previewText2 = fullText2.split(' ').slice(0, 20).join(' ') + (fullText2.split(' ').length > 20 ? '...' : '');

    const fullText3 = "Change how a firm declares and distributes its dividends.";
    const previewText3 = fullText3.split(' ').slice(0, 20).join(' ') + (fullText3.split(' ').length > 20 ? '...' : '');

    const fullText4 = "Right Shares Issue Processing of Public Limited Company";
    const previewText4 = fullText4.split(' ').slice(0, 20).join(' ') + (fullText4.split(' ').length > 20 ? '...' : '');

    const fullText5 = "HUMAN RESOURCES as the CAPITAL like other capital resources deployed";
    const previewText5 = fullText5.split(' ').slice(0, 20).join(' ') + (fullText5.split(' ').length > 20 ? '...' : '');

    const fullText6 = "Ensuring security for networks and software both before and after the creation of networks and software. An expert in cyber security looks for dangers in software and hardware systems. ";
    const previewText6 = fullText6.split(' ').slice(0, 20).join(' ') + (fullText6.split(' ').length > 20 ? '...' : '');





    return (
        <div className="mt-40 pt-10">
            <div className="space-y-5">
                <h3 className="text-5xl text-center font-semibold">WHAT WE OFFER</h3>
                <p className="text-center">
                    Janos works as an extension of your development and testing team. We will work  together to solve your <br /> business
                    cases and get the maximum value of your budget. One of our differentiating qualities is that we <br /> take the time
                    to understand the particular challenges, difficulties, and needs of your business.
                </p>
            </div>
            {/* Offer card div */}
            <div className='flex justify-center items-center min-h-screen mt-30 pt-20'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-40'>
                    {/* 1st card */}
                    <div ref={imageRefs[0]} className="animated-image card">
                        <figure>
                            <img className=' w-[400px] h-[300px]' src={pic1} alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-red-600 font-bold text-3xl">EasyAM-SMS Share Management Systems</h2>
                            <p>{showFullText ? fullText1 : previewText1}</p>
                            <button onClick={toggleText} className="text-blue-500 text-left text-lg">
                                <Link to={'/card1'}>
                                    {showFullText ? "Show Less" : "Read More.."}
                                </Link>
                            </button>
                        </div>
                    </div>
                    {/* 2nd card */}
                    <div ref={imageRefs[1]} className="animated-image card ">
                        <figure>
                            <img className='w-[400px] h-[300px]' src={pic2} alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-red-600 font-bold text-4xl">EasyAM-AGM Annual General Meeting</h2>
                            <p>{showFullText ? fullText2 : previewText2}</p>
                            <button onClick={toggleText} className="text-blue-500 text-left text-lg">
                                <Link to={'/card2'}>
                                    {showFullText ? "Show Less" : "Read More.."}
                                </Link>
                            </button>
                        </div>
                    </div>
                    {/* 3rd card */}
                    <div ref={imageRefs[2]} className="animated-image  card">
                        <figure>
                            <img className='w-[400px] h-[300px]' src={pic3} alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-red-600 font-bold text-4xl">EasyAM-DPS Dividend Processing Services</h2>
                            <p>{showFullText ? fullText3 : previewText3}</p>
                            <button onClick={toggleText} className="text-blue-500 text-left text-lg">
                                <Link to={'/card3'}>
                                    {showFullText ? "Show Less" : "Read More.."}
                                </Link>
                            </button>
                        </div>
                    </div>
                    {/* 4th card */}
                    <div ref={imageRefs[3]} className="animated-image card">
                        <figure>
                            <img className='w-[400px] h-[300px]' src={pic4} alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-red-600 font-bold text-4xl">EasyAM-RIP Right Issue Processing</h2>
                            <p>{showFullText ? fullText4 : previewText4}</p>
                            <button onClick={toggleText} className="text-blue-500 text-left text-lg">
                                <Link to={'/card4'}>
                                    {showFullText ? "Show Less" : "Read More.."}
                                </Link>
                            </button>
                        </div>
                    </div>
                    {/* 5th card */}
                    <div ref={imageRefs[4]} className="animated-image card">
                        <figure>
                            <img className='w-[400px] h-[300px]' src={pic5} alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-red-600 font-bold text-4xl">EasyAM-HCM Human Capital Management</h2>
                            <p>{showFullText ? fullText5 : previewText5}</p>
                            <button onClick={toggleText} className="text-blue-500 text-left text-lg">
                                <Link to={'/card5'}>
                                    {showFullText ? "Show Less" : "Read More.."}
                                </Link>
                            </button>
                        </div>
                    </div>
                    {/* 6th card */}
                    <div ref={imageRefs[5]} className="animated-image card">
                        <figure>
                            <img className='w-[400px] h-[300px]' src={pic6} alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-red-600 font-bold text-4xl">EasyAM-CS Cyber Security</h2>
                            <p>{showFullText ? fullText6 : previewText6}</p>
                            <button onClick={toggleText} className="text-blue-500 text-left text-lg">
                                <Link to={'/card6'}>
                                    {showFullText ? "Show Less" : "Read More.."}
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OfferPage;