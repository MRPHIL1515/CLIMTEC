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

const ServiceCard: React.FC<{ service: Service; }> = ({ service }) => {
    const IconComponent = iconMap[service.icon];
    const ref = useRef<HTMLDivElement>(null);
    
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['10deg', '-10deg']);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-10deg', '10deg']);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (!ref.current) return;
        const { left, top, width, height } = ref.current.getBoundingClientRect();
        const mouseX = e.clientX - left;
        const mouseY = e.clientY - top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
        
        ref.current.style.setProperty('--x', `${mouseX}px`);
        ref.current.style.setProperty('--y', `${mouseY}px`);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d',
            }}
            className="glass-effect rounded-2xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:border-[#007BFF] glow-border interactive-shine"
        >
            <div style={{ transform: 'translateZ(50px)' }} className="p-4 bg-gray-800/50 rounded-full border border-gray-700 mb-4">
                <IconComponent className="h-8 w-8 text-[#007BFF]" />
            </div>
            <h3 style={{ transform: 'translateZ(40px)' }} className="text-xl font-orbitron font-bold text-white mb-3">{service.title}</h3>
            <p style={{ transform: 'translateZ(30px)' }} className="text-gray-400 text-sm flex-grow">{service.description}</p>
        </motion.div>
    );
};


const Services: React.FC = () => {
    const containerVariants = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.1 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
    };
    
    const titleVariants = {
        hidden: { opacity: 0, y: -30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };


    return (
        <section id="services" className="py-20 md:py-28 bg-black/50">
            <div className="container mx-auto px-6">
                <motion.div 
                    className="text-center mb-12 md:mb-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={titleVariants}
                >
                    <h2 className="text-3xl md:text-5xl font-orbitron font-bold text-white uppercase">Nos Services</h2>
                    <div className="w-24 h-1 bg-[#007BFF] mx-auto mt-4"></div>
                </motion.div>
                <motion.div 
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
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