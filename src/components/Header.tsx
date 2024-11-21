import { Palette } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <Palette className="h-8 w-8 text-white" />
            <h1 className="text-xl font-bold text-white">颜色大王</h1>
          </div>
          <nav className="flex space-x-8">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-300 transition-colors duration-300 ease-in-out transform hover:scale-110">
              GitHub
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}