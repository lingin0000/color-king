import React, { useState } from 'react';
import { Header } from './components/Header';
import { ColorCard } from './components/ColorCard';
import { colors } from './data/colors';
import { ColorProvider, useColor } from './context/ColorContext';

function MainContent() {
  const [searchTerm, setSearchTerm] = useState('');
  const { backgroundColor } = useColor();

  const filteredColors = colors.filter(color => 
    color.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    color.pinyin.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div 
      className="min-h-screen transition-all duration-700 ease-in-out"
      style={{ backgroundColor }}
    >
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <div className="mb-8 animate-fade-in">
          <input
            type="text"
            placeholder="搜索颜色名称或拼音..."
            className="w-full max-w-md px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent bg-white/80 backdrop-blur-sm transition-all duration-300"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredColors.map((color, index) => (
            <div 
              key={color.hex}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <ColorCard color={color} />
            </div>
          ))}
        </div>
      </main>

      <footer className="bg-white/80 backdrop-blur-sm border-t border-gray-200 py-8 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500">
            颜色大王 - Chinese Traditional Colors © {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <ColorProvider>
      <MainContent />
    </ColorProvider>
  );
}

export default App;