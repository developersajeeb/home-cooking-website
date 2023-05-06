import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import bannerImg from '../../assets/chef-banner.jpg'
import { FaHeart, FaHandsWash, FaHistory } from "react-icons/fa";

const ChefPage = () => {
    const { id } = useParams();
    const chefData = useLoaderData();
    const { chef_img, chef_name, experience, likes, chef_description, recipes_number } = chefData[0];

    return (
        <main>
            <section style={{ backgroundImage: `url(${bannerImg})` }} className='bg-no-repeat object-cover bg-cover'>
                <div className='mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 grid md:grid-cols-4 gap-8'>
                    <div className='md:flex items-center gap-5 md:col-span-3'>
                        <img className='w-60 h-60 md:w-72 md:h-72 object-cover rounded-full border-8 border-orange-white mx-auto md:mx-0' src={chef_img} alt="Chef Image" />
                        <p className='text-white text-base text-center md:text-start mt-5 md:mt-0'>{chef_description}</p>
                    </div>
                    <div className='grid items-center'>
                        <ul className='grid gap-2'>
                            <h2 className='text-white text-2xl font-bold mb-3 text-center md:text-start'>{chef_name}</h2>
                            <li className='flex items-center gap-1 text-white text-base font-semibold mx-auto md:mx-0'><FaHeart size={18} /> Likes: {likes}</li>
                            <li className='flex items-center gap-1 text-white text-base font-semibold mx-auto md:mx-0'><FaHandsWash size={18} /> Recipes: {recipes_number}</li>
                            <li className='flex items-center gap-1 text-white text-base font-semibold mx-auto md:mx-0'><FaHistory size={18} /> Experience: {experience}</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className='mx-auto w-full max-w-screen-xl p-4 py-12 lg:py-16 grid md:grid-cols-3 gap-8'>
                {
                    chefData[0].recipes.map(recipe => {
                        return <div key={recipe.recipe_id} className="bg-white border border-gray-200 rounded-lg shadow">
                            <img className="rounded-t-lg h-56 w-full object-cover" src={recipe.image} alt="" />
                            <div className="p-5">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{recipe.recipe_name}</h5>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{recipe.cooking_method.slice(0, 150)}</p>
                                <Link to={`/chef/recipe/${recipe.recipe_id}`}>
                                    <button href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-500 rounded-md hover:bg-orange-800 duration-300">
                                        Read more
                                        <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    })
                }
            </section>
        </main>
    );
};

export default ChefPage;