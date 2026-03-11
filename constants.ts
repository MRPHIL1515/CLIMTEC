
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
        description: "Solutions complètes pour votre confort thermique.",
        icon: 'Wrench',
        subServices: ["Installation & Montage", "Entretien préventif", "Dépannage rapide", "Recharge Gaz", "Nettoyage filtres"]
    },
    {
        id: 2,
        title: "Canalbox & Internet",
        description: "Connectivité haute performance pour votre foyer.",
        icon: 'Router',
        subServices: ["Installation Box", "Configuration Wi-Fi", "Câblage réseau", "Dépannage connexion", "Optimisation débit"]
    },
    {
        id: 3,
        title: "Entretien & Jardinage",
        description: "Valorisez vos espaces extérieurs.",
        icon: 'Sprout',
        subServices: ["Tonte de pelouse", "Taille de haies", "Arrosage automatique", "Aménagement paysager", "Traitement sols"]
    },
    {
        id: 4,
        title: "Gestion de Résidences",
        description: "Sérénité totale pour vos biens immobiliers.",
        icon: 'Home',
        subServices: ["Maintenance technique", "Nettoyage parties communes", "Suivi des loyers", "Sécurité & Gardiennage", "Rénovation légère"]
    },
    {
        id: 5,
        title: "Community Management",
        description: "Boostez votre impact sur les réseaux sociaux.",
        icon: 'Share2',
        subServices: ["Stratégie digitale", "Création de contenu", "Gestion publicitaire", "Modération", "Analyse d'audience"]
    },
];
