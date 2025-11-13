import React from 'react';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900/50 text-gray-400 relative overflow-hidden py-12">
            {/* Animated background orbs */}
            <div className="absolute inset-0 z-0">
                <div className="orb orb1"></div>
                <div className="orb orb2"></div>
                <div className="orb orb3"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                    <div>
                        <h3 className="text-2xl font-orbitron font-bold text-white mb-4">CLIMTEC</h3>
                        <p className="text-sm">Votre partenaire de confiance pour des solutions intégrées en Côte d’Ivoire.</p>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold text-white mb-4 font-orbitron">Contact</h4>
                        <ul className="space-y-2 text-sm">
                            <li>Téléphone: +225 07 00 83 58 86</li>
                            <li>WhatsApp: +225 07 00 83 58 86</li>
                            <li>Email: vehelie30@gmail.com</li>
                            <li>Adresse: Abidjan, Côte d’Ivoire</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold text-white mb-4 font-orbitron">Suivez-nous</h4>
                        <div className="flex justify-center md:justify-start space-x-4">
                            <a href="#" className="text-gray-400 hover:text-[#007BFF] transition-colors duration-300"><Facebook size={24} /></a>
                            <a href="#" className="text-gray-400 hover:text-[#007BFF] transition-colors duration-300"><Instagram size={24} /></a>
                            <a href="#" className="text-gray-400 hover:text-[#007BFF] transition-colors duration-300"><Linkedin size={24} /></a>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} CLIMTEC. Tous droits réservés.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;