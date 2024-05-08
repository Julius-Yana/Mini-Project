'use client';
import { motion } from 'framer-motion';

const Hero = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: 'smooth' } }, // Corrected typo "smoth" to "smooth"
  };

  const image = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: 'smooth' } }, // Corrected typo "smoth" to "smooth"
  };
  return (
    <div className="pt-28">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={container}
        className="flex flex-col items-center justify-between "
      >
        <motion.h1
          variants={item}
          className="text-center text-9xl pb-2 leading-snug max-lg:text-7xl max-md:text-5xl"
        >
          Musik adalah cara
        </motion.h1>
        <motion.p
          variants={item}
          className="text-center text-9xl pb-2 leading-snug max-lg:text-7xl max-md:text-5xl"
        >
          Untuk memberi tahu apa yg kita RASA
        </motion.p>
        {/* <motion.p
          variants={item}
          className="text-xl text-center w-10/12 mx-auto tracking-wider text-neutral-400 max-lg:text-base max-md:text-sm"
        >
          Tiket is a music platform that allows you to listen to your favorite
          music online.
        </motion.p> */}
      </motion.div>
      <div className="mt-28 text-white">
        <div className="p-2 relative">
          <motion.img
            initial={{ y: 0, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: 'keyframes' }}
            className="w-full lg:h-[700px] md:h-[500px] h-[300px] object-cover object-top opacity-100"
            src="/bsb.webp"
            alt="backstreetBoys"
          />
          <motion.div
            variants={container}
            whileInView="show"
            initial="hidden"
            viewport={{ once: true }}
            transition={{ delay: 1.5, delayChildren: 0.1 }}
          >
            <motion.span className="absolute top-4 left-4 lg:text-7xl text-4xl text-black">
              Backstreet Boys
            </motion.span>
            <motion.span className="absolute bottom-8 left-4 lg:text-xl md:text-base text-sm max-sm:hidden">
              Backstreet Boys atau disingkat BSB adalah grup vokal yang berasal
              dari Orlando, Florida, Amerika Serikat. BSB terbentuk pada 20
              April 1993. Pada mulanya, grup ini beranggotakan Nick Carter,
              Howie Dorough, Brian Littrell, A.J. McLean, dan Kevin Richardson
            </motion.span>
            <motion.span className="absolute top-4 right-4 lg:text-xl md:text-base text-sm text-black">
              Go and Buy the Tickets
            </motion.span>
            <motion.span className="absolute right-4 bottom-4 lg:text-xl md:text-base text-sm">
              Jakarta, December 12
            </motion.span>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
