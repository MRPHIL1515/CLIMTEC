import React from 'react';
import { Toaster } from 'react-hot-toast';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Reservation from './components/Reservation';
import About from './components/About';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-black text-gray-300 font-sans relative overflow-x-hidden">
      {/* Aurora Background */}
      <div className="aurora-background"></div>
      {/* Static Grid Overlay */}
      <div className="fixed inset-0 z-0 bg-transparent bg-[radial-gradient(#1a1a1a_1px,transparent_1px)] [background-size:20px_20px]"></div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Toaster 
          position="top-center" 
          toastOptions={{
            style: {
              background: 'rgba(30, 30, 30, 0.8)',
              color: '#fff',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
            },
            success: {
              iconTheme: {
                primary: '#46C47C',
                secondary: 'white',
              },
            },
            error: {
              iconTheme: {
                primary: '#FF8C42',
                secondary: 'white',
              },
            },
          }} 
        />
        <Header />
        <main className="flex-grow">
          <Hero />
          <Services />
          <Reservation />
          <About />
        </main>
        <Footer />
      </div>
    </div>
  );
}