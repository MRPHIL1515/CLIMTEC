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
        <section id="apropos" className="py-32 md:py-56 relative text-white bg-[#050505] overflow-hidden">
            {/* Dynamic Background Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[150px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-600/5 blur-[150px] rounded-full -translate-x-1/2 translate-y-1/2"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        variants={contentVariants}
                    >
                        <motion.span variants={itemVariants} className="text-[#007BFF] font-display font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Notre Histoire</motion.span>
                        <motion.h2 variants={itemVariants} className="text-4xl md:text-6xl font-display font-bold uppercase mb-8 tracking-tight leading-tight">L'Excellence au Coeur de la Côte d'Ivoire</motion.h2>
                        <motion.div variants={itemVariants} className="w-20 h-1 bg-[#007BFF] mb-10"></motion.div>
                        <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-400 leading-relaxed font-light mb-8">
                            CLIMTEC est bien plus qu'une entreprise de maintenance. Nous sommes votre partenaire stratégique pour la pérennité de vos infrastructures et le rayonnement de votre image de marque.
                        </motion.p>
                        <motion.p variants={itemVariants} className="text-base text-gray-500 leading-relaxed font-light">
                            Spécialisée dans la maintenance technique, la gestion immobilière et la communication digitale, notre équipe d'experts s'engage à fournir des solutions innovantes, rapides et d'une fiabilité absolue.
                        </motion.p>
                    </motion.div>

                    <motion.div 
                        className="relative"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                    >
                        <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                            <img 
                                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000" 
                                alt="Climtec Office" 
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                                referrerPolicy="no-referrer"
                            />
                        </div>
                        {/* Decorative Frame */}
                        <div className="absolute -bottom-6 -right-6 w-full h-full border border-blue-500/30 rounded-3xl -z-10"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;