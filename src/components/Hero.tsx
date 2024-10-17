import React from 'react';
import { Ticket, MessageSquare, BarChart } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="bg-accent-light">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl font-bold text-black mb-4">
          Revolutionize Your Customer Support with AI
        </h1>
        <p className="text-xl text-accent-dark mb-8">
          tAIckets: The bespoke solution for businesses to streamline customer queries across multiple platforms.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="btn-primary flex items-center">
            <Ticket className="mr-2" size={20} />
            Get Started
          </button>
          <button className="btn-secondary">
            Learn More
          </button>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div className="flex flex-col items-center">
            <MessageSquare size={40} className="text-primary mb-4" />
            <h3 className="text-lg font-semibold">Multi-Channel Support</h3>
            <p className="mt-2 text-accent-dark">Manage queries from WhatsApp, Email, Telegram, and more</p>
          </div>
          <div className="flex flex-col items-center">
            <Ticket size={40} className="text-primary mb-4" />
            <h3 className="text-lg font-semibold">Automated Ticketing</h3>
            <p className="mt-2 text-accent-dark">AI-powered ticket generation and vendor matching</p>
          </div>
          <div className="flex flex-col items-center">
            <BarChart size={40} className="text-primary mb-4" />
            <h3 className="text-lg font-semibold">Advanced Analytics</h3>
            <p className="mt-2 text-accent-dark">Gain insights into customer trends and vendor performance</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;