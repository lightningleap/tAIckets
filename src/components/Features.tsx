import React from 'react';
import { Bot, Users, Zap, PieChart, Bell, MessageCircle } from 'lucide-react';

const features = [
  {
    icon: <Bot size={24} />,
    title: 'AI-Powered Responses',
    description: 'Leverage cutting-edge AI to provide instant, accurate responses to customer inquiries.',
  },
  {
    icon: <Users size={24} />,
    title: 'Vendor Matching',
    description: 'Automatically assign the most suitable vendor based on query attributes.',
  },
  {
    icon: <Zap size={24} />,
    title: 'Lightning-Fast Resolution',
    description: 'Dramatically reduce resolution times and improve overall customer experience.',
  },
  {
    icon: <PieChart size={24} />,
    title: 'Priority Matrix',
    description: 'Manage tickets based on urgency, customer importance, and query impact.',
  },
  {
    icon: <Bell size={24} />,
    title: 'Automated Reminders',
    description: 'Send timely reminders to vendors and customers for follow-ups.',
  },
  {
    icon: <MessageCircle size={24} />,
    title: 'Internal Team Space',
    description: 'Collaborate with team members on tickets and share information efficiently.',
  },
];

const Features: React.FC = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-semibold text-black mb-12">
          Key Features of tAIckets
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="card flex flex-col items-center text-center">
              <div className="text-primary mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-accent-dark">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;