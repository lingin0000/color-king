import React, { createContext, useContext, useState } from 'react';

interface ColorContextType {
  backgroundColor: string;
  setBackgroundColor: (color: string) => void;
}

const ColorContext = createContext<ColorContextType | undefined>(undefined);

export function ColorProvider({ children }: { children: React.ReactNode }) {
  const [backgroundColor, setBackgroundColor] = useState('#F5F5F5');

  return (
    <ColorContext.Provider value={{ backgroundColor, setBackgroundColor }}>
      {children}
    </ColorContext.Provider>
  );
}

export function useColor() {
  const context = useContext(ColorContext);
  if (context === undefined) {
    throw new Error('useColor must be used within a ColorProvider');
  }
  return context;
}