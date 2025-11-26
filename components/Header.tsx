
import React from 'react';

import logo from '../assets/logo.jpg';

export const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex items-center">
        <img src={logo} alt="Logo" className="h-12 w-auto mr-4" />
        <h1 className="text-xl font-semibold text-gray-900">
          School Performance Tracking Dashboard
        </h1>
      </div>
    </header>
  );
};
