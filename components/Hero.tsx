import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.5,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
    };

    return (
        <section id="accueil" className="h-screen flex items-center justify-center relative text-white text-center px-6 overflow-hidden">
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center bg-no-repeat ken-burns" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1920')" }}></div>
                <div className="absolute inset-0 bg-black opacity-70"></div>
            </div>
            
            <motion.div 
                className="relative z-10 max-w-4xl mx-auto"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.h1 
                    variants={itemVariants}
                    className="text-4xl md:text-6xl lg:text-7xl font-display font-bold uppercase tracking-tight leading-tight" 
                    style={{textShadow: '0 0 20px rgba(0, 123, 255, 0.2)'}}
                >
                    Votre Solution<br />Multiservice
                </motion.h1>
                <motion.p 
                    variants={itemVariants}
                    className="mt-6 text-base md:text-lg text-gray-400 max-w-xl mx-auto font-light tracking-wide"
                >
                    Expertise technique, maintenance préventive et solutions connectées. Nous optimisons vos espaces et votre visibilité avec professionnalisme.
                </motion.p>
                <motion.div variants={itemVariants}>
                    <button 
                        onClick={() => scrollToSection('services')} 
                        className="mt-10 bg-[#007BFF] text-white font-semibold py-3 px-10 rounded-full text-base transition-all duration-300 transform hover:scale-105 btn-glow uppercase tracking-widest"
                    >
                        Explorer le catalogue
                    </button>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;