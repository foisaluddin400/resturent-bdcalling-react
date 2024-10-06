

import { useLoaderData, useParams } from 'react-router-dom';
export const MenuInfo = () => {

    const loader = useLoaderData()
    const { id } = useParams()
    const int = parseInt(id)
    const cart = loader.find(cart => cart.id === int);


    return (
        <div className='my-11'>
            <div className="container grid grid-cols-2 border border-green-700 rounded-xl">
                <img
                    src={cart.img}
                    alt="Album" />

                <div className="p-5">
                    <h2 className="text-3xl font-bold">{cart.name}</h2>

                    <p className='py-7'>⭐⭐⭐⭐⭐ <span>(125 ratting)</span></p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, tempore! Corporis cumque ut ad magnam?.</p>
                    <h3 className='py-7 text-2xl font-bold'>Price : ${cart.price}</h3>
                    <div className='flex justify-between'>
                        <div className="join join-vertical lg:join-horizontal">
                            <button className="btn bg-blue-950 w-[50px] mt-[-1px] text-white join-item">+</button>
                            <input className=' text-center border border-blue-950 bg-white w-[70px] text-black join-item' type="text" name="value" id="" value='4' disabled/>
                            
                            <button className="btn bg-green-700 w-[50px] text-white join-item">-</button>
                        </div>
                        <div>
                            <button className="btn btn-active btn-neutral text-white w-[200px]">Add To cart</button>
                        </div>
                        <div className="">
                            <button className="btn bg-white text-slate-900">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}
