import Image from 'next/image'
import React from 'react'

function WorkProcess() {
  return (
    <div className='mt-12 mx-auto max-w-screen-xl'>
        <h2 className='text-center font-bold text-5xl '>Effortless Workflow</h2>
        <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 mt-5 p-2 md:p-5 scale-95 md:scale-100 '>
                <div data-aos='flip-up' className='group'>
                    <div className='group-hover:scale-105  group-hover:shadow-xl transition ease-in duration-500 delay-400 lg:h-[350px] rounded-xl shadow-xl bg-gradient-to-br from-[#a9d6e5] via-[#89c2d9] to-[#5390d9] dark:bg-gradient-to-br dark:from-[#03045e] dark:via-[#1d1e4e] dark:to-[#2a6f97] p-5'>
                    <div className='pt-5 flex items-center justify-around'>
                       <Image loading='eager' src={'/check-out.png'} width={80} height={80} alt='howitworks' ></Image>
                       <Image loading='eager' className='grayscale' src={'/right-arrow.png'} width={32} height={32} alt='arrow'></Image>
                        
                    </div>
                    <h2 className=' mt-8 text-lg md:text-2xl font-bold text-zinc-100'>Place Order</h2>
                    <p className='mt-2  font-medium text-sm md:text-base text-zinc-100'>Reach out to us and connect with one of our experts through call, email, or chat. Share your order details thoroughly, so we can handle it accurately.</p>
                    </div>
                </div>

                <div  className='group'>
                    <div className='group-hover:scale-105  group-hover:shadow-xl transition ease-in duration-500 delay-400 lg:h-[350px] rounded-xl shadow-xl bg-gradient-to-br from-[#a9d6e5] via-[#89c2d9] to-[#5390d9] dark:bg-gradient-to-br dark:from-[#03045e] dark:via-[#1d1e4e] dark:to-[#2a6f97] p-5'>
                    <div className='pt-5 flex items-center justify-around'>
                       <Image loading='eager' src={'/delivery-service.png'} width={80} height={80} alt='howitworks' ></Image>
                       <Image loading='eager' className='grayscale' src={'/right-arrow.png'} width={32} height={32} alt='arrow'></Image>
                        
                    </div>
                    <h2 className=' mt-8 text-lg md:text-2xl font-bold text-zinc-100'>Purchase Service</h2>
                    <p className='mt-2  font-medium text-sm md:text-base text-zinc-100'>Your work will be assigned to a professional once we receive your payment. Complete the payment to confirm your order with us.</p>
                    </div>
                </div>

                <div data-aos='flip-right' className='group'>
                    <div className='group-hover:scale-105  group-hover:shadow-xl transition ease-in duration-500 delay-400 lg:h-[350px] rounded-xl shadow-xl bg-gradient-to-br from-[#a9d6e5] via-[#89c2d9] to-[#5390d9] dark:bg-gradient-to-br dark:from-[#03045e] dark:via-[#1d1e4e] dark:to-[#2a6f97] p-5'>
                    <div className='pt-5 flex items-center justify-around'>
                       <Image loading='eager' src={'/complete.png'} width={80} height={80} alt='howitworks' ></Image>
                       <Image loading='eager' className='grayscale' src={'/right-arrow.png'} width={32} height={32} alt='arrow'></Image>
                        
                    </div>
                    <h2 className=' mt-8 text-lg md:text-2xl font-bold text-zinc-100'>Delivery Completed</h2>
                    <p className='mt-2  font-medium text-sm md:text-base text-zinc-100'>Our experts ensure your work is delivered on time, every time. Review your paper and request a revision if needed.</p>
                    </div>
                </div>

                <div data-aos='flip-left' className='group'>
                    <div className='group-hover:scale-105  group-hover:shadow-xl transition ease-in duration-500 delay-400 lg:h-[350px] rounded-xl shadow-xl bg-gradient-to-br from-[#a9d6e5] via-[#89c2d9] to-[#5390d9] dark:bg-gradient-to-br dark:from-[#03045e] dark:via-[#1d1e4e] dark:to-[#2a6f97] p-5'>
                    <div className='pt-5 flex items-center justify-around'>
                       <Image loading='eager' src={'/feedback.png'} width={80} height={80} alt='howitworks' ></Image>
                       <Image loading='eager' className='grayscale' src={'/right-arrow.png'} width={32} height={32} alt='arrow'></Image>
                        
                    </div>
                    <h2 className=' mt-8 text-lg md:text-2xl font-bold text-zinc-100'>Share Your Feedback</h2>
                    <p className='mt-2  font-medium text-sm md:text-base text-zinc-100'>We value your feedback! Please rate our service and share your thoughts with us.</p>
                    </div>
                </div>

            </div>
    </div>
  )
}

export default WorkProcess