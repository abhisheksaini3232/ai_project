// Body.tsx
import React, { useState } from "react";
import ModelSelector from "./ModelSelector.tsx";
import PromptEditor from "./PromptEditor.tsx";
import ParametersPanel from "./ParametersPanel.tsx";
import OutputArea from "./OutputArea.tsx";

const models = ["GPT-3.5", "GPT-4", "Custom"];

const Body: React.FC = () => {
  const [selectedModel, setSelectedModel] = useState(models[0]);
  const [prompt, setPrompt] = useState("");
  const [temperature, setTemperature] = useState(0.7);
  const [tokens, setTokens] = useState(256);
  const [output, setOutput] = useState("");

  // Dummy submit for OutputArea:
  const handleSubmit = () => setOutput(`Model: ${selectedModel}\nPrompt: ${prompt}\nTemp: ${temperature}\nTokens: ${tokens}`);

  return (
    <main className="flex flex-col md:flex-row md:h-[calc(100vh-100px)]">
      {/* Sidebar Model Selector */}
      <ModelSelector models={models} selectedModel={selectedModel} onSelect={setSelectedModel} />
      {/* Main Content */}
      <div className="flex-1 p-4">
        <PromptEditor value={prompt} onChange={setPrompt} />
        <ParametersPanel
          temperature={temperature}
          setTemperature={setTemperature}
          tokens={tokens}
          setTokens={setTokens}
        />
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded mt-4 transition"
          onClick={handleSubmit}
        >
          Generate Output
        </button>
        <OutputArea output={output} />
      </div>
    </main>
  );
};

export default Body;
