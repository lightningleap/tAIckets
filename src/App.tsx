import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Integrations from './components/Integrations';

function App() {
  return (
    <div className="min-h-screen bg-secondary">
      <Navbar />
      <Hero />
      <Features />
      <Integrations />
    </div>
  );
}

export default App;