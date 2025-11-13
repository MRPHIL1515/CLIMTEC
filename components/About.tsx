import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {

    const contentVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { 
                duration: 0.8, 
                ease: 'easeOut',
                staggerChildren: 0.2
            } 
        }
    };
    
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <section id="apropos" className="py-20 md:py-40 relative text-white bg-black">
            <div className="absolute inset-0 bg-cover bg-center bg-fixed z-0 opacity-20" style={{ backgroundImage: "url('https://picsum.photos/seed/climtec-about/1920/1080')" }}></div>
            <div className="container mx-auto px-6 relative z-10">
                <motion.div 
                    className="max-w-4xl mx-auto text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={contentVariants}
                >
                    <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-orbitron font-bold uppercase mb-6">À propos de CLIMTEC</motion.h2>
                    <motion.div variants={itemVariants} className="w-24 h-1 bg-[#007BFF] mx-auto mb-8"></motion.div>
                    <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-300 leading-relaxed">
                        CLIMTEC est une entreprise multiservice ivoirienne spécialisée dans la maintenance, la gestion, et la communication. Notre mission : offrir des services fiables, rapides et innovants, que ce soit pour vos installations, vos espaces verts ou votre visibilité digitale.
                    </motion.p>
                </motion.div>
            </div>
        </section>
    );
};

export default About;