import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { navLinks } from '../constants';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsOpen(false);
    };
    
    const headerVariants = {
        hidden: { y: -100, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeInOut' } },
    };

    const navItemVariants = {
        hidden: { y: -20, opacity: 0 },
        visible: { y: 0, opacity: 1 },
    };

    return (
        <motion.header 
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-effect' : ''}`}
            variants={headerVariants}
            initial="hidden"
            animate="visible"
        >
            <nav className="container mx-auto px-6 py-6 flex justify-between items-center">
                <motion.div variants={navItemVariants} className="text-2xl font-display font-bold text-white tracking-tight">
                    <a href="#accueil" onClick={(e) => { e.preventDefault(); scrollToSection('accueil'); }}>CLIMTEC</a>
                </motion.div>
                <motion.div 
                    className="hidden md:flex items-center space-x-10"
                    variants={{
                        visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
                    }}
                >
                    {navLinks.map((link) => (
                        <motion.a variants={navItemVariants} key={link.id} href={`#${link.id}`} onClick={(e) => { e.preventDefault(); scrollToSection(link.id); }} className="text-sm font-medium text-gray-400 hover:text-white transition duration-300 relative group uppercase tracking-widest">
                            {link.title}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#007BFF] transition-all duration-300 group-hover:w-full"></span>
                        </motion.a>
                    ))}
                </motion.div>
                <motion.div variants={navItemVariants} className="hidden md:block">
                    <a href="#reservation" onClick={(e) => { e.preventDefault(); scrollToSection('reservation'); }} className="bg-[#007BFF] text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 btn-glow text-sm uppercase tracking-widest">
                        Demander un devis
                    </a>
                </motion.div>
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div className={`md:hidden absolute top-full left-0 right-0 glass-effect transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="flex flex-col items-center py-4">
                    {navLinks.map((link) => (
                        <a key={link.id} href={`#${link.id}`} onClick={(e) => { e.preventDefault(); scrollToSection(link.id); }} className="py-3 text-lg text-gray-200 hover:text-white transition duration-300">
                            {link.title}
                        </a>
                    ))}
                    <a href="#reservation" onClick={(e) => { e.preventDefault(); scrollToSection('reservation'); }} className="mt-4 bg-[#007BFF] text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 btn-glow">
                        Demander un devis
                    </a>
                </div>
            </div>
        </motion.header>
    );
};

export default Header;