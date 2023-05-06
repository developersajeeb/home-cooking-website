import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import { FaHeart } from "react-icons/fa";
import vImg1 from '../../assets/videoImg/maxresdefault.jpg'
import vImg2 from '../../assets/videoImg/maxresdefault (1).jpg'
import vImg3 from '../../assets/videoImg/maxresdefault (2).jpg'
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';

const Home = () => {
    const [chefs, setChefs] = useState([]);

    useEffect(() => {
        fetch('https://home-cooking-server-developersajeeb.vercel.app/chef')
            .then(res => res.json())
            .then(data => setChefs(data))
    }, []);

    return (
        <>
            <Header></Header>
            <section className='mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8'>
                <div className='text-center mt-10'>
                    <h1 className='text-4xl md:text-5xl font-bold'>Most Popular Chef</h1>
                    <p className='text-base md:w-[600px] mx-auto mt-3'>Discover the most popular Indian recipes, bursting with flavors and aromas that will take your taste buds on a culinary journey like no other.</p>
                </div>
                <section className='grid md:grid-cols-3 gap-5 mt-12'>
                    {
                        chefs.map(chef => <div key={chef.chef_id} className="bg-white border border-gray-200 rounded-lg shadow">
                            <div className='p-8'>
                                <LazyLoad>
                                    <img className='w-72 h-72 object-cover rounded-full mx-auto' src={chef.chef_img} alt="product image" />
                                </LazyLoad>
                            </div>
                            <div className="px-5 pb-5">
                                <h5 className="text-2xl font-semibold tracking-tight text-gray-900 text-center">{chef.chef_name}</h5>
                                <p className='text-center text-base'>Experience: {chef.experience}</p>
                                <p className='text-center text-base'>Recipes: {chef.recipes_number}</p>
                                <div className="flex items-end justify-between mt-10">
                                    <span className="text-base font-bold text-gray-600 flex items-center gap-2"><FaHeart></FaHeart>{chef.likes}</span>
                                    <Link to={`/chef/${chef.chef_id}`} className="text-white bg-orange-500 hover:bg-orange-800 font-medium rounded-md text-sm px-5 py-2.5 text-center duration-300">View Recipes</Link>
                                </div>
                            </div>
                        </div>)
                    }
                </section>
                <div className='text-center mt-20'>
                    <h1 className='text-4xl md:text-5xl font-bold'>Main Course</h1>
                    <p className='text-base md:w-[600px] mx-auto mt-3'>The main course is the centerpiece of any Indian meal, typically consisting of flavorful curries, rice dishes, and breads, often served with a side of yogurt or chutney.</p>
                </div>
                <section className='grid md:grid-cols-3 gap-5 mt-12'>
                    <div>
                        <a href="https://www.youtube.com/watch?v=EkAm9deoAsA">
                            <LazyLoad>
                                <img src={vImg1} alt="" className='rounded-md' />
                            </LazyLoad>
                            <h2 className='text-xl font-semibold text-center'>Quick and easy Indian Dahl Red Lentil recipe</h2>
                        </a>
                    </div>
                    <div>
                        <a href="https://www.youtube.com/watch?v=jhtbciOZ544">
                            <LazyLoad>
                                <img src={vImg2} alt="" className='rounded-md' />
                            </LazyLoad>
                            <h2 className='text-xl font-semibold text-center'>Move Over Veggie Burgers</h2>
                        </a>
                    </div>
                    <div>
                        <a href="https://www.youtube.com/watch?v=txxqQHEi-XE">
                            <LazyLoad>
                                <img src={vImg3} alt="" className='rounded-md' />
                            </LazyLoad>
                            <h2 className='text-xl font-semibold text-center'>Discovering the Best of Indian Cuisine</h2>
                        </a>
                    </div>
                </section>
            </section>
            <section className='mt-20'>
                <div className="w-full relative flex items-center justify-center">
                    <img src="https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="dining" className="w-full h-full object-cover absolute z-0 hidden xl:block" />
                    <img src="https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="dining" className="w-full h-full object-cover absolute z-0 hidden sm:block xl:hidden" />
                    <img src="https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="dining" className="w-full h-full object-cover absolute z-0 sm:hidden" />
                    <div className="bg-gray-800 bg-opacity-80 md:my-16 lg:py-16 py-10 w-full md:mx-24 md:px-12 px-4 flex flex-col items-center justify-center relative z-40">
                        <h1 className="text-4xl font-semibold leading-9 text-white text-center">Don’t miss out!</h1>
                        <p className="text-base leading-normal text-center text-white mt-6">
                            Subscribe to your newsletter to stay in the loop. Our newsletter is sent once in <br />
                            a week on every friday so subscribe to get latest news and updates.
                        </p>
                        <div className="sm:border border-white flex-col sm:flex-row flex items-center lg:w-5/12 w-full mt-12 space-y-4 sm:space-y-0">
                            <input className="border border-white sm:border-transparent text-base w-full font-medium leading-none text-white p-4 focus:outline-none bg-transparent placeholder-white" placeholder="Email Address" />
                            <button className="focus:outline-none focus:ring-offset-2 focus:ring border border-white sm:border-transparent w-full sm:w-auto bg-white py-4 px-6 hover:bg-opacity-75">Subscribe</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;