
import Heroimg from '../../../public/img/hero.png'
export const Hero = () => {
    return (
        <div className='container'>
            <div className='grid grid-cols-2'>

                <div>
                    <div className="py-[100px]">
                        <h2 className='text-5xl font-bold'>Good <span className='text-green-700'>booking</span>, great <br /> memories</h2>
                        <p className='text-lg pt-7'>Enable diners to customize their booking by requesting a specific table location or view.</p>
                        <label className="mt-6 rounded-full bg-white input input-bordered flex items-center gap-2">
                            <input type="text" className="grow" placeholder="Search" />
                            <svg  
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="bg-green-500 w-9 rounded-full text-white opacity-70">
                                <path
                                    fillRule="evenodd"
                                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                    clipRule="evenodd" />
                            </svg>
                        </label>
                    </div>
                </div>
                <div>
                    <div className=" p-10 ">
                        <img className='' src={Heroimg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
