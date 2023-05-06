import { useLoaderData } from 'react-router-dom';
import { FaStar, FaRegHeart, FaHeart } from "react-icons/fa";
import toast, { Toaster } from 'react-hot-toast';
import { useState } from 'react';
import ErrorPage from '../ErrorPage/ErrorPage';


const Recipe = () => {
    const recipe = useLoaderData();
    const { recipe_name, cooking_method, image, rating, ingredients } = recipe;

    const [isNotifying, setIsNotifying] = useState(false);
    const notify = () => {
        toast('Saved!', {
            icon: '❤️',
        });
        setIsNotifying(true);
    };

    return (
        <main>
            {
                recipe.length == 0 ? <ErrorPage></ErrorPage> : <><section style={{ backgroundImage: `url(${image})` }} className='bg-no-repeat object-center bg-center bg-cover'>
                    <h1 className='text-center text-4xl font-bold py-20 text-white bg-gradient-to-t from-gray-600'>{recipe_name}</h1>
                </section><section className='mx-auto w-full max-w-screen-xl p-4 py-12 lg:py-16 grid md:grid-cols-3 gap-4'>
                        <div className='md:col-span-2'>
                            <h2 className='text-3xl font-semibold'>Recipe</h2>
                            <p className='text-base mt-4'>{cooking_method}</p>
                        </div>
                        <div className='bg-white shadow shadow-gray-200 rounded-lg p-6'>
                            <h3 className='text-3xl font-semibold'>Ingredients</h3>
                            <ul className='grid grid-cols-3 gap-3 my-6'>
                                {ingredients?.map((ingredient, index) => <li key={index} className='text-base bg-gray-100 rounded-full text-center px-2'>{ingredient}</li>)}
                            </ul>
                            <h4 className='flex items-center gap-1 text-lg font-semibold'><FaStar className='text-yellow-300' /> {rating}</h4>
                            <button className={`flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-md mt-5 ${isNotifying ? 'bg-orange-700' : ''}`} onClick={notify} disabled={isNotifying}>Favorite {isNotifying ? <FaHeart /> : <FaRegHeart />}
                            </button>
                            <Toaster position="top-right" />
                        </div>
                    </section></>
            }
        </main>
    );
};

export default Recipe;