import { Copy, Check } from "lucide-react";
import type { ChineseColor } from "../data/colors";
import { useColor } from "../context/ColorContext";
import { useState } from "react";
interface ColorCardProps {
  color: ChineseColor;
}

function CopyColor({ color }: { color: string }) {
  const [copied, setCopied] = useState(false);

  return (
    <div className="flex items-center justify-between group/copy">
      <p className="text-sm opacity-75">{color}</p>
      <button
        onClick={(e) => {
          e.stopPropagation();
          navigator.clipboard.writeText(color);
          setCopied(true);
          setTimeout(() => setCopied(false), 1000);
        }}
        className="opacity-0 group-hover/copy:opacity-100 transition-opacity duration-200 p-1 hover:text-white/90"
      >
        {copied ? (
          <Check size={14} className="text-green-500" />
        ) : (
          <Copy size={14} />
        )}
      </button>
    </div>
  );
}

export function ColorCard({ color }: ColorCardProps) {
  const { setBackgroundColor } = useColor();

  return (
    <div
      className="group relative h-64 rounded-lg overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-xl cursor-pointer"
      style={{ backgroundColor: color.hex }}
      onClick={() => setBackgroundColor(color.hex)}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60 group-hover:opacity-100 transition-all duration-500">
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
          <div className="flex justify-between items-end">
            <div>
              <h3 className="text-2xl font-bold mb-1">{color.name}</h3>
              <p className="text-sm opacity-90">{color.pinyin}</p>
            </div>
          </div>
          <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
            <div className="flex flex-col space-y-1">
              <CopyColor color={color.hex} />
              <CopyColor color={color.rgb} />
              <CopyColor color={color.hsl} />
            </div>
          </div>
          <p className="mt-2 text-sm opacity-0 group-hover:opacity-90 transition-opacity duration-500 delay-200 line-clamp-2">
            {color.description}
          </p>
        </div>
      </div>
    </div>
  );
}
