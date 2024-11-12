import banner from '../assets/home-banner.png';
const Banner = () => {
    return (
        <div className='lg:flex items-center mt-12'>
            <div className='space-y-5'>
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