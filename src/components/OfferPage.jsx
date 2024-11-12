import pic1 from '../assets/offer/home-team.png';
import pic2 from '../assets/offer/home-supervision.png';
import pic3 from '../assets/offer/home-engineers.png';
import pic4 from '../assets/offer/home-collaboration.png';

const OfferPage = () => {
    return (
        <div className="mt-40 pt-10">
            <div className="space-y-5">
                <h3 className="text-5xl text-center font-semibold">WHAT WE OFFER</h3>
                <p className="text-center">
                    Enosis works as an extension of your development and testing team. We will work  together to solve your <br /> business
                    cases and get the maximum value of your budget. One of our differentiating qualities is that we <br /> take the time
                    to understand the particular challenges, difficulties, and needs of your business.
                </p>
            </div>
            {/* Offer card div */}
            <div className='flex justify-center items-center min-h-screen mt-30 pt-20'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-40'>
                    {/* 1st card */}
                    <div className="card">
                        <figure>
                            <img className='w-[400px] h-[300px]' src={pic1} alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-red-600 font-bold text-4xl">Qualified Engineers</h2>
                            <p>Janos is a team of software experts. We continue to strive in being the best in the industry
                                by hiring engineers from renowned universities. Having team members experienced in a wide range of
                                technology stacks enables us to meet different customers needs.</p>
                        </div>
                    </div>
                    {/* 2nd card */}
                    <div className="card ">
                        <figure>
                            <img className='w-[400px] h-[300px]' src={pic2} alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-red-600 font-bold text-4xl">Dedicated Team</h2>
                            <p>Our in-house team is yours too. We will jump in and ramp up quickly. Your goals
                                become our goals. We will navigate the risks of software development together.</p>
                        </div>
                    </div>
                    {/* 3rd card */}
                    <div className="card">
                        <figure>
                            <img className='w-[400px] h-[300px]' src={pic3} alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-red-600 font-bold text-4xl">Collaborative Process</h2>
                            <p>We work as an extension of your team, not as a vendor. We help you to participate
                                in a deeply collaborative process to develop
                                the desired product. We will be in constant communication with your
                                team every step of the way.</p>
                        </div>
                    </div>
                    {/* 4th card */}
                    <div className="card">
                        <figure>
                            <img className='w-[400px] h-[300px]' src={pic4} alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-red-600 font-bold text-4xl">Continuous Supervision</h2>
                            <p>A project manager will be involved in the entire lifecycle of your project to plan,
                                organize, control, and deploy key deliverables according to your desired milestones,
                                including process improvement analysis and implementation.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OfferPage;