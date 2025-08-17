// ModelSelector.tsx
import React from "react";

interface ModelSelectorProps {
  models: string[];
  selectedModel: string;
  onSelect: (model: string) => void;
}

const ModelSelector: React.FC<ModelSelectorProps> = ({ models, selectedModel, onSelect }) => (
  <aside className="w-full md:w-1/4 p-4 bg-gray-50 border-r md:h-full">
    <label className="block font-semibold mb-2">Select Model</label>
    <select
      value={selectedModel}
      onChange={e => onSelect(e.target.value)}
      className="w-full p-2 rounded border"
    >
      {models.map(model => (
        <option key={model} value={model}>{model}</option>
      ))}
    </select>
  </aside>
);

export default ModelSelector;
