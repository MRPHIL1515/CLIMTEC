import React, { useRef } from 'react';
import { Wrench, Router, Sprout, Home, Share2 } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { services } from '../constants';
import type { Service } from '../types';

const iconMap: { [key: string]: React.ElementType } = {
    Wrench: Wrench,
    Router: Router,
    Sprout: Sprout,
    Home: Home,
    Share2: Share2
};

import { CheckCircle2 } from 'lucide-react';

const ServiceCard: React.FC<{ service: Service; }> = ({ service }) => {
    const IconComponent = iconMap[service.icon];
    
    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <motion.div
            className="group relative bg-white border border-gray-100 rounded-3xl p-8 transition-all duration-500 hover:bg-gray-50 hover:border-blue-500/30 flex flex-col h-full overflow-hidden shadow-sm hover:shadow-xl"
        >
            {/* Background Glow */}
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-blue-600/5 blur-3xl group-hover:bg-blue-600/10 transition-all duration-500"></div>
            
            <div className="relative z-10">
                <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 border border-blue-500/20 group-hover:scale-110 transition-transform duration-500">
                    <IconComponent className="h-7 w-7 text-[#007BFF]" />
                </div>
                
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-4 tracking-tight">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-8 font-light">{service.description}</p>
                
                <div className="space-y-3 mb-10">
                    {service.subServices.map((sub, idx) => (
                        <div key={idx} className="flex items-center space-x-3 text-sm text-gray-700">
                            <CheckCircle2 className="h-4 w-4 text-blue-500 shrink-0" />
                            <span className="font-light">{sub}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-auto relative z-10">
                <button 
                    onClick={() => scrollToSection('reservation')}
                    className="w-full py-4 bg-gray-100 hover:bg-[#007BFF] text-gray-900 hover:text-white font-semibold rounded-2xl transition-all duration-300 text-sm uppercase tracking-widest border border-gray-200 hover:border-blue-500"
                >
                    Réserver ce service
                </button>
            </div>
        </motion.div>
    );
};


const Services: React.FC = () => {
    const containerVariants = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.1 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };
    
    const titleVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };


    return (
        <section id="services" className="py-32 md:py-48 bg-gray-50 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/5 blur-[120px] rounded-full"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-600/5 blur-[120px] rounded-full"></div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div 
                    className="max-w-3xl mb-20"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={titleVariants}
                >
                    <span className="text-[#007BFF] font-display font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Catalogue 2026</span>
                    <h2 className="text-4xl md:text-6xl font-display font-bold text-gray-900 tracking-tight leading-tight">Nos Solutions<br />Sur Mesure</h2>
                    <div className="w-20 h-1 bg-[#007BFF] mt-8"></div>
                </motion.div>
                
                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={containerVariants}
                >
                    {services.map((service) => (
                       <motion.div variants={itemVariants} key={service.id}>
                          <ServiceCard service={service} />
                       </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Services;