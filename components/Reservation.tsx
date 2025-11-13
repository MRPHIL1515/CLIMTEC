import React from 'react';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdtJaWI01Sbg-nlGcpAwl4YUhDvd-HgS12bsHHgzcPQZKPUIw/viewform?usp=header";

const Reservation: React.FC = () => {
    
    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
    };

    return (
        <section id="reservation" className="py-20 md:py-28 relative overflow-hidden">
            <div className="absolute inset-0 bg-cover bg-center z-0 opacity-10" style={{ backgroundImage: "url('https://picsum.photos/seed/form-bg/1920/1080')" }}></div>
            <motion.div 
                className="container mx-auto px-6 relative z-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={sectionVariants}
            >
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-5xl font-orbitron font-bold text-white uppercase">Faire une demande</h2>
                    <div className="w-24 h-1 bg-[#007BFF] mx-auto mt-4"></div>
                </div>

                <div className="max-w-3xl mx-auto text-center">
                    <div className="glass-effect rounded-2xl p-8 md:p-12 glow-border">
                        <h3 className="text-2xl md:text-3xl font-orbitron text-white mb-4">Prêt à démarrer votre projet ?</h3>
                        <p className="text-gray-300 mb-8 max-w-xl mx-auto">
                            Cliquez sur le bouton ci-dessous pour accéder à notre formulaire de réservation sécurisé. Remplissez simplement vos informations et nous vous recontacterons dans les plus brefs délais pour discuter de vos besoins.
                        </p>
                        <a
                            href={GOOGLE_FORM_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center space-x-3 bg-[#007BFF] text-white font-bold py-3 px-10 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 btn-glow"
                        >
                            <span>Valider la commande</span>
                            <ExternalLink size={20} />
                        </a>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Reservation;