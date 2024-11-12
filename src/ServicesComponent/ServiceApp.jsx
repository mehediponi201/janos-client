import backPic from '../assets/offer/carousel-4.jpg';
import Services from '../components/Services';

const ServiceApp = () => {
    return (
        <div className='mt-10'>
            <div
                style={{
                    backgroundImage: `url(${backPic})`,
                    backgroundSize: "cover", // To cover the entire container
                    backgroundPosition: "center", // To center the image
                    // height: "100vh", // Optional: Set height to fill the viewport
                    height: "500px",
                    display: "flex", // Use flexbox to center content
                    justifyContent: "center", // Center horizontally
                    alignItems: "center", // Center vertically
                    textAlign: "center",
                    position: "relative"// Center text if you have multiple lines
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

                {/* <h1 className="text-white text-center text-6xl font-bold">Our Services</h1> */}
                <div style={{ position: "relative", zIndex: 2 }}>
                    <h1 className="text-white text-center text-6xl font-bold">OUR SERVICES</h1>
                </div>
            </div>
            {/* Adding Services Component*/} 
            <Services></Services>
        </div>
    );
};

export default ServiceApp;