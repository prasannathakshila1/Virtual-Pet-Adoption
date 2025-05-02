import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50">
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
        <div className="container mx-auto p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
              </svg>
              <h1 className="text-2xl font-bold">Paws & Claws</h1>
            </div>
            <nav>
              <ul className="flex space-x-6">
                <li><a href="#" className="hover:text-blue-200 transition-colors font-medium">Home</a></li>
                <li><a href="#" className="hover:text-blue-200 transition-colors font-medium">About</a></li>
                <li><a href="#" className="hover:text-blue-200 transition-colors font-medium">Contact</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      
      <main className="container mx-auto p-4 py-8">
        {children}
      </main>
      
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold">Paws & Claws</h3>
              <p className="text-gray-400 mt-1">Finding forever homes for furry friends</p>
            </div>
            <div className="mt-4 md:mt-0">
              <p>© {new Date().getFullYear()} Paws & Claws. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;