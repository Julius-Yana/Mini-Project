'use client'
import {motion} from 'framer-motion'



const Book = () => {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.8,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, },
        show: {
            opacity: 1,
            y: 0,
            transition: { type: "keyframe", duration: 0.4 },
        },
    };

    const item1 = {
        hidden: { opacity: 0, x: 30 },
        show: {
            opacity: 0.2,
            x: 0,
            transition: { type: "keyframe", duration: 0.4 },
        },
    };
    return (
        <motion.div initial="hidden" whileInView='show' variants={container} viewport={{once:true}} className='mt-32 mb-20'>
            <div className='relative'>
            <motion.img variants={item} className='w-full h-auto max-h-[500px] object-cover opacity-20' src="/concert.png" alt=""/>
            <motion.div variants={item} className='w-full absolute top-[50%] left[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col items-center'>
               
                <h1 className='uppercase  text-center md:text-4xl text-xl'>Dapatkan ticketmu Sekarang</h1>
                <p className='text-center md:text-xl text-sm mt-3 max-sm:hidden'>Dapatkan Diskon hingga 10 % </p>
                <button className='mt-5 md:px-7 text-center px-3 max-md:text-sm md:py-2 py-1 border-2 border-white hover:bg-white hover:text-black transition-all ease-in duration-150'>Buy</button>     
                
            </motion.div>
            </div>
        </motion.div>
    )
}

export default Book

