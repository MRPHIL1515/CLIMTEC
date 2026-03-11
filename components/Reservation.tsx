import React from 'react';
import { ExternalLink, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdtJaWI01Sbg-nlGcpAwl4YUhDvd-HgS12bsHHgzcPQZKPUIw/viewform?usp=header";

const Reservation: React.FC = () => {
    
    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
    };

    return (
        <section id="reservation" className="py-32 md:py-48 relative overflow-hidden bg-white">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,123,255,0.03)_0%,transparent_70%)]"></div>
            
            <motion.div 
                className="container mx-auto px-6 relative z-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={sectionVariants}
            >
                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-[#007BFF] font-display font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Contact Direct</span>
                            <h2 className="text-4xl md:text-6xl font-display font-bold text-gray-900 tracking-tight leading-tight mb-8">Prêt à Démarrer ?</h2>
                            <p className="text-gray-600 text-lg font-light leading-relaxed mb-10">
                                Notre équipe est prête à répondre à vos besoins les plus complexes. Remplissez notre formulaire sécurisé pour une prise en charge immédiate.
                            </p>
                            <div className="space-y-6">
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center border border-blue-500/20">
                                        <CheckCircle2 className="text-blue-500 h-6 w-6" />
                                    </div>
                                    <span className="text-gray-700 font-light">Réponse garantie sous 24h</span>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center border border-emerald-500/20">
                                        <CheckCircle2 className="text-emerald-500 h-6 w-6" />
                                    </div>
                                    <span className="text-gray-700 font-light">Devis gratuit et personnalisé</span>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="glass-effect rounded-[2rem] p-10 md:p-14 glow-border relative z-10">
                                <h3 className="text-2xl font-display font-bold text-gray-900 mb-6">Formulaire de Devis</h3>
                                <p className="text-gray-600 mb-10 font-light text-sm">
                                    Accédez à notre plateforme de réservation pour détailler votre projet.
                                </p>
                                <a
                                    href={GOOGLE_FORM_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full inline-flex items-center justify-center space-x-3 bg-[#007BFF] text-white font-semibold py-5 px-12 rounded-2xl text-lg transition-all duration-300 transform hover:scale-[1.02] btn-glow uppercase tracking-widest"
                                >
                                    <span>Ouvrir le formulaire</span>
                                    <ExternalLink size={20} />
                                </a>
                            </div>
                            {/* Decorative background for form */}
                            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600/5 to-emerald-600/5 blur-2xl -z-10 rounded-[3rem]"></div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Reservation;