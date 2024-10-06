
import Grup from '../../../public/img/grup.png'
import Code from '../../../public/img/coding.png'

export const Grupe = () => {
    return (
        <div>
            <div className='container'>
                <div className='grid grid-cols-2'>
                    <div>
                        <div className=" p-10 ">
                            <img className='' src={Grup} alt="" />
                        </div>
                    </div>
                    <div>
                        <div className="py-[100px]">
                            <h2 className='text-5xl font-bold'>Good <span className='text-green-700'>booking</span>, great <br /> memories</h2>
                            <p className='text-lg pt-7'>Enable diners to customize their booking by requesting a specific table location or view.</p>
                            <div className='flex pt-8'>
                                <div>
                                    <div className='flex'>
                                        <img className='w-[35px]' src={Code} alt="coade" />
                                        <span className='text-[16px] font-bold pl-3'>Online Ordaring</span>
                                    </div>
                                    <div className='flex py-3'>
                                        <img className='w-[35px] ' src={Code} alt="coade" />
                                        <span className='text-[16px] font-bold pl-3'>Online Ordaring</span>
                                    </div>
                                    <div className='flex'>
                                        <img className='w-[35px]' src={Code} alt="coade" />
                                        <span className='text-[16px] font-bold pl-3'>Online Ordaring</span>
                                    </div>
                                </div>
                                <div className='pl-6'>
                                    <div className='flex'>
                                        <img className='w-[35px]' src={Code} alt="coade" />
                                        <span className='text-[16px] font-bold pl-3'>Online Ordaring</span>
                                    </div>
                                    <div className='flex py-3'>
                                        <img className='w-[35px]' src={Code} alt="coade" />
                                        <span className='text-[16px] font-bold pl-3'>Online Ordaring</span>
                                    </div>
                                    <div className='flex'>
                                        <img className='w-[35px]' src={Code} alt="coade" />
                                        <span className='text-[16px] font-bold pl-3'>Online Ordaring</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
