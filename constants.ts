
import type { Service, NavLink } from './types';

export const navLinks: NavLink[] = [
    { id: 'accueil', title: 'Accueil' },
    { id: 'services', title: 'Nos Services' },
    { id: 'reservation', title: 'Réservation' },
    { id: 'apropos', title: 'À propos' },
];

export const services: Service[] = [
    {
        id: 1,
        title: "Climatisation",
        description: "Installation, réparation et entretien complet de vos climatiseurs, pour un confort optimal toute l’année.",
        icon: 'Wrench',
    },
    {
        id: 2,
        title: "Canalbox & Internet",
        description: "Installation, configuration et dépannage de votre connexion Internet et de votre box Canalbox.",
        icon: 'Router',
    },
    {
        id: 3,
        title: "Entretien & Jardinage",
        description: "Un jardin propre, vert et agréable grâce à nos services d’entretien et de jardinage professionnels.",
        icon: 'Sprout',
    },
    {
        id: 4,
        title: "Gestion de Résidences",
        description: "Gestion complète de vos résidences, incluant maintenance, nettoyage et suivi technique rigoureux.",
        icon: 'Home',
    },
    {
        id: 5,
        title: "Community Management",
        description: "Boostez votre présence en ligne avec notre service expert de gestion et de création de contenu.",
        icon: 'Share2',
    },
];
