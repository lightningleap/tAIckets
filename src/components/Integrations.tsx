import React from 'react';
import { MessageSquare, Mail, Send, FileText, Calendar, Slack } from 'lucide-react';

const integrations = [
  { icon: <MessageSquare size={24} />, name: 'WhatsApp' },
  { icon: <Mail size={24} />, name: 'Email' },
  { icon: <Send size={24} />, name: 'Telegram' },
  { icon: <FileText size={24} />, name: 'Google Drive' },
  { icon: <Calendar size={24} />, name: 'Google Calendar' },
  { icon: <Slack size={24} />, name: 'Slack' },
];

const Integrations: React.FC = () => {
  return (
    <div className="py-16 bg-accent-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-semibold text-black mb-12">
          Seamless Integrations
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
          {integrations.map((integration, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="bg-white p-4 rounded-full shadow-md mb-4">
                {integration.icon}
              </div>
              <span className="text-accent-dark font-medium">{integration.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Integrations;