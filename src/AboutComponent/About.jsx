import backImg from '../assets/offer/carousel-3.jpg';
import BenefitWork from './BenefitWork';

const About = () => {
    return (
        <div className='mt-10'>
            <div
                style={{
                    backgroundImage: `url(${backImg})`,
                    backgroundSize: "cover", // To cover the entire container
                    backgroundPosition: "center", // To center the image
                    // height: "100vh", // Optional: Set height to fill the viewport
                     height: "500px",
                    display: "flex", // Use flexbox to center content
                    justifyContent: "center", // Center horizontally
                    alignItems: "center", // Center vertically
                    textAlign: "center", // Center text if you have multiple lines
                    position: "relative"
                }}
            >

                {/* Overlay div */}
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust opacity for shadow intensity
                        zIndex: 1, // Ensure the overlay appears above the background
                    }}
                ></div>

                {/* <h1 className="text-white text-center text-6xl font-bold">We are Janos a Software solution Provider</h1> */}
                <div className='space-y-3' style={{ position: "relative", zIndex: 2 }}>
                    <h1 className="text-6xl text-white font-bold">We are Janos</h1>
                    <h2 className="text-2xl text-white">A Software solution Provider</h2>
                </div>
            </div>
            {/* who we are */}
            <div className='flex align-items justify-center gap-10 mt-20'>
                <div className='text-center lg:ml-60'>
                    <h3><span className='text-6xl text-red-600 font-bold'>WHO</span> <br /> <span className='text-6xl text-black font-bold'>WE</span> <br /> <span className='text-6xl text-black font-bold'>ARE</span> </h3>
                </div>
                <div className='space-y-3'>
                    <p>Janos is a premier provider of software development and testing. <br /> Having talented software engineers on board, we craft compelling web, <br /> desktop, and mobile applications for our clients.</p>
                    <p>Since our inception, we have partnered with numerous companies and <br /> delivered operational gains to startup, emerging, and established <br />  organizations in the United States and Canada.</p>
                </div>
            </div>
            {/*Adding Benefit Working Element */}
            <BenefitWork></BenefitWork>
        </div>
    );
};

export default About;