import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import image1 from '../../../assets/g1.jpg'
import image2 from '../../../assets/g4.jpg'
import image3 from '../../../assets/g3.jpg'
import ShowItems from '../ShowItems/ShowItems';
import { useLoaderData } from 'react-router-dom';

const Home = () => {

    const data = useLoaderData();
    const filterData = data.slice(0, 6);

    return (
        <div>
            <section className="h-[650px]">
                <div className="carousel w-full h-full">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src={image1} className="w-full rounded-lg" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-[57%]">
                            <a href="#slide3" className="btn btn-outline text-white"><FaArrowLeft className='md:w-28 md:text-xl'></FaArrowLeft></a>
                            <div className='relative bottom-12'>
                                <h2 className='text-lg uppercase font-semibold'>
                                    More Luxury & trending
                                </h2>
                                <h2 className="text-4xl font-bold text-white uppercase">
                                    Wood Cup
                                </h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Excepturi illum natus suscipit amet accusamus.<br /> Fuga, placeat
                                    alias consectetur nesciunt sequi, fugit nemo consequatur pariatur
                                    commodi cupiditate <br /> molestias et deserunt sapiente?</p>
                            </div>
                            <a href="#slide2" className="btn btn-outline text-blue-950"><FaArrowRight className='md:w-28 text-xl'></FaArrowRight></a>
                        </div>
                    </div>

                    <div id="slide2" className="carousel-item relative w-full">
                        <img src={image2} className="w-full rounded-lg" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-outline text-white"><FaArrowLeft className='md:w-28 md:text-xl'></FaArrowLeft></a>
                            <div className='relative bottom-12'>
                                <h2 className='text-lg uppercase font-semibold'>
                                    More Luxury & trending
                                </h2>
                                <h2 className="text-4xl font-bold text-white uppercase">
                                    Wood Cup
                                </h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Excepturi illum natus suscipit amet accusamus.<br /> Fuga, placeat
                                    alias consectetur nesciunt sequi, fugit nemo consequatur pariatur
                                    commodi cupiditate <br /> molestias et deserunt sapiente?</p>
                            </div>
                            <a href="#slide3" className="btn btn-outline text-white"><FaArrowRight className='md:w-28 md:text-xl'></FaArrowRight></a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src={image3} className="w-full rounded-lg" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-outline text-blue-950"><FaArrowLeft className='md:w-28 md:text-xl'></FaArrowLeft></a>
                            <div className='relative bottom-12'>
                                <h2 className='text-lg uppercase font-semibold'>
                                    More Luxury & trending
                                </h2>
                                <h2 className="text-4xl font-bold text-white uppercase">
                                    Wood Cup
                                </h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Excepturi illum natus suscipit amet accusamus.<br /> Fuga, placeat
                                    alias consectetur nesciunt sequi, fugit nemo consequatur pariatur
                                    commodi cupiditate <br /> molestias et deserunt sapiente?</p>
                            </div>
                            <a href="#slide1" className="btn btn-outline text-blue-950"><FaArrowRight className='md:w-28 md:text-xl'></FaArrowRight></a>
                        </div>
                    </div>
                </div>
            </section>

            <section className='mt-20'>
                <div className='text-center'>
                    <h2 className='text-2xl font-bold'>POPULAR IN OUR STORE</h2>
                    <p>Pick the most popular products from us. May you love them!</p>
                </div>
                <div className='grid md:grid-cols-3 mt-12 gap-4'>
                    {
                        filterData?.map(item => <ShowItems
                            key={item._id}
                            item={item}
                        ></ShowItems>)
                    }
                </div>
            </section>
        </div>
    );
};

export default Home;