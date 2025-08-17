// ParametersPanel.tsx
import React from "react";

interface ParametersPanelProps {
  temperature: number;
  setTemperature: (value: number) => void;
  tokens: number;
  setTokens: (value: number) => void;
}

const ParametersPanel: React.FC<ParametersPanelProps> = ({ temperature, setTemperature, tokens, setTokens }) => (
  <div className="w-full p-4 flex flex-col gap-4 md:flex-row md:gap-8">
    <div>
      <label className="block font-semibold mb-1">Temperature ({temperature})</label>
      <input
        type="range" min={0} max={1} step={0.01}
        value={temperature}
        onChange={e => setTemperature(Number(e.target.value))}
        className="w-full"
      />
    </div>
    <div>
      <label className="block font-semibold mb-1">Max Tokens ({tokens})</label>
      <input
        type="number" min={1} max={4096}
        value={tokens}
        onChange={e => setTokens(Number(e.target.value))}
        className="w-full border rounded p-2"
      />
    </div>
  </div>
);

export default ParametersPanel;
