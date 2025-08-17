// PromptEditor.tsx
import React from "react";

interface PromptEditorProps {
  value: string;
  onChange: (value: string) => void;
}

const PromptEditor: React.FC<PromptEditorProps> = ({ value, onChange }) => (
  <div className="w-full p-4">
    <label className="block font-semibold mb-2">Prompt</label>
    <textarea
      value={value}
      onChange={e => onChange(e.target.value)}
      className="w-full min-h-[120px] p-2 border rounded resize-y"
      placeholder="Enter your AI prompt here..."
    />
  </div>
);

export default PromptEditor;
