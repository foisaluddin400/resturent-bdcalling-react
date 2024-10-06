import Img from '../../../public/img/image 1.png'
import { FaLocationDot } from "react-icons/fa6";
import { useLoaderData, useParams } from 'react-router-dom';

export const Bookinfo = () => {
    const bookloader = useLoaderData()
    const{id} = useParams()
    const int = parseInt(id)
    const bookcart = bookloader.find( cart => cart.id === int);
  return (
    <div className='container grid grid-cols-6'>
            <div className='col-span-4 m-3 '>
                <div className='shadow-xl p-2'>
                    <img src={bookcart.img} alt="" />
                    <h1 className='text-xl py-3'><span className='text-green-700 font-bold'>Villagio</span> rasturent &Bar</h1> <hr />
                    <div className='mt-6 grid grid-cols-2'>
                        <div>
                            <div className='flex gap-2'>
                            <FaLocationDot className='mt-1 text-green-700'/> <span>360 San Lorenzo Avenue, Suite <br />
                            1430 Coral Gables, FL 33146-1865 |</span>
                            </div>
                            <h1 className='font-bold py-2'>{bookcart.name}</h1>
                            <input className='bg-[#ffffff00] w-[80px] py-1 border border-gray-400 rounded-md' type="date" name="" id="" />
                            <input className='bg-[#ffffff00] w-[80px] py-1 border border-gray-400 mx-2 rounded-md' type="time" name="time" id="" />
                            <select  className="bg-[#ffffff00] w-[80px] py-1 border border-gray-400  rounded-md select-bordered p-[1px]">
                                <option disabled selected>Normal</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                            </select>
                        </div>
                        <div>
                            <p className='text-gray-400'>Villagio restaurant and bar has one mission: to provide guests with a fine and fresh seafood experience. Featuring seasonal and sustainable seafood that is flown in fresh daily, our chef-driven menu proves that no matter when you’re dining, seafood can be truly exceptional. to provide guests with a fine</p>
                        </div>
                    </div>
                    <button className='bg-green-700 text-white p-2 w-full mt-6'>Book Now</button>
                </div>
            </div>
            <div className='col-span-2 m-3 text-center '>
                <div className='shadow-xl p-2'>

                    <img src={Img} alt="" />
                    <div className="">
                        <table className="text-center">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Open</th>
                                    <th>Close</th>

                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                <tr className="">

                                    <td className='pl-4'>Saturday</td>
                                    <td className='pl-4 pr-4'>10.30 - 12.00pm</td>
                                    <td>10.30 - 12.00pm</td>

                                </tr>
                                {/* row 2 */}
                                <tr className="">

                                    <td className='pl-4'>Saturday</td>
                                    <td className='pl-4 pr-4'>10.30 - 12.00pm</td>
                                    <td>10.30 - 12.00pm</td>

                                </tr>
                                {/* row 3 */}
                                <tr className="">

                                    <td className='pl-4'>Saturday</td>
                                    <td className='pl-4 pr-4'>10.30 - 12.00pm</td>
                                    <td>10.30 - 12.00pm</td>

                                </tr>
                                <tr className="">

                                    <td className='pl-4'>Saturday</td>
                                    <td className='pl-4 pr-4'>10.30 - 12.00pm</td>
                                    <td>10.30 - 12.00pm</td>

                                </tr>
                                <tr className="">

                                    <td className='pl-4'>Saturday</td>
                                    <td className='pl-4 pr-4'>10.30 - 12.00pm</td>
                                    <td>10.30 - 12.00pm</td>

                                </tr>
                                <tr className="">

                                    <td className='pl-4'>Saturday</td>
                                    <td className='pl-4 pr-4'>10.30 - 12.00pm</td>
                                    <td>10.30 - 12.00pm</td>

                                </tr>
                                <tr className="">

                                    <td className='pl-4'>Saturday</td>
                                    <td className='pl-4 pr-4'>10.30 - 12.00pm</td>
                                    <td>10.30 - 12.00pm</td>

                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            
        </div>
  )
}
