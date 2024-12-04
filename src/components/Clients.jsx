import pic1 from '../assets/Agrani.jpg';
import pic2 from '../assets/CityBank.png';
import pic3 from '../assets/DutchBangla.png';
import pic4 from '../assets/Confidence.jpg';

const Clients = () => {

    return (
        <div className="mt-20 bg-base-800 shadow-inner">
            <h3 className="text-5xl text-center font-semibold pt-10 " >Our Valued Clients</h3>

            {/* clients carousel */}
            {/* slider-1 */}
            <div className="carousel w-full ">
                <div id="slide1" className="carousel-item relative w-full gap-3 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 items-center">
                    {/* card-1 */}
                    <div className="card ml-4">
                        <figure className="px-10 pt-10">
                            <img src={pic1} className="rounded-xl w-[200px] h-[150px]" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Agrani Bank</h2>
                        </div>
                    </div>
                    {/* card-2 */}
                    <div className="card">
                        <figure className="px-10 pt-10">
                            <img src={pic2} className="rounded-xl w-[150px] h-[150px]" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">CityBank</h2>
                        </div>
                    </div>
                    {/* card-3 */}
                    <div className="card">
                        <figure className="px-10 pt-10">
                            <img src={pic3} className="rounded-xl w-[200px] h-[150px]" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">DutchBangla</h2>
                        </div>
                    </div>
                    {/* c-4 */}
                    <div className="card">
                        <figure className="px-10 pt-10">
                            <img src={pic4} className="rounded-xl w-[150px] h-[150px]" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Confidence</h2>
                        </div>
                    </div>

                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                {/* slider-2 */}
                <div id="slide2" className="carousel-item relative w-full gap-3 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 items-center">

                    {/* card-2 */}
                    <div className="card">
                        <figure className="px-10 pt-10">
                            <img src={pic2} className="rounded-xl w-[150px] h-[150px]" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">CityBank</h2>
                        </div>
                    </div>
                    {/* card-3 */}
                    <div className="card">
                        <figure className="px-10 pt-10">
                            <img src={pic3} className="rounded-xl w-[200px] h-[150px]" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">DutchBangla</h2>
                        </div>
                    </div>
                    {/* card-4 */}
                    <div className="card ">
                        <figure className="px-10 pt-10">
                            <img src={pic4} className="rounded-xl w-[150px] h-[150px]" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Confidence</h2>
                        </div>
                    </div>
                    {/* card-1 */}
                    <div className="card">
                        <figure className="px-10 pt-10">
                            <img src={pic1} className="rounded-xl w-[200px] h-[150px]" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Agrani Bank</h2>
                        </div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                {/* slider-3 */}
                <div id="slide3" className="carousel-item relative w-full gap-3 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 items-center">
                    {/* card-3 */}
                    <div className="card">
                        <figure className="px-10 pt-10">
                            <img src={pic3} className="rounded-xl w-[200px] h-[150px]" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">DutchBangla</h2>
                        </div>
                    </div>
                    {/* card-4 */}
                    <div className="card ">
                        <figure className="px-10 pt-10">
                            <img src={pic4} className="rounded-xl w-[150px] h-[150px]" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Confidence</h2>
                        </div>
                    </div>

                    {/* card-1 */}
                    <div className="card">
                        <figure className="px-10 pt-10">
                            <img src={pic2} className="rounded-xl w-[200px] h-[150px]" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Agrani Bank</h2>
                        </div>
                    </div>

                    {/* card-2 */}
                    <div className="card ">
                        <figure className="px-10 pt-10">
                            <img src={pic1} className="rounded-xl w-[200px] h-[150px]" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">CityBank</h2>
                        </div>
                    </div>

                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>

                {/* slider-4 */}
                <div id="slide4" className="carousel-item relative w-full gap-5 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4">

                    {/* card-4 */}
                    <div className="card ">
                        <figure className="px-10 pt-10">
                            <img src={pic4} className="rounded-xl w-[150px] h-[150px]" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Confidence</h2>
                        </div>
                    </div>

                    {/* card-1 */}
                    <div className="card">
                        <figure className="px-10 pt-10">
                            <img src={pic2} className="rounded-xl w-[200px] h-[150px]" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Agrani Bank</h2>
                        </div>
                    </div>

                    {/* card-2 */}
                    <div className="card ">
                        <figure className="px-10 pt-10">
                            <img src={pic1} className="rounded-xl w-[200px] h-[150px]" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">CityBank</h2>
                        </div>
                    </div>

                    {/* card-3 */}
                    <div className="card">
                        <figure className="px-10 pt-10">
                            <img src={pic3} className="rounded-xl w-[200px] h-[150px]" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">DutchBangla</h2>
                        </div>
                    </div>

                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Clients;


{/* <div className="card bg-base-100 w-96 shadow-xl">
                <figure className="px-10 pt-10">
                    <img
                        src={img}
                        alt="Shoes"
                        className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{title}</h2>
                    <h2>Price:{price}</h2>
                    <p>If a dog chews shoes whose shoes does he?</p>
                    <div className="card-actions">
                        <Link to={`/checkout/${_id}`}>
                        <button className="btn btn-outline btn-success">Add to Cart</button>
                        </Link>
                    </div>
                </div>
            </div> */}