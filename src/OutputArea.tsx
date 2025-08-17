// OutputArea.tsx
import React from "react";

interface OutputAreaProps {
  output: string;
}

const OutputArea: React.FC<OutputAreaProps> = ({ output }) => (
  <section className="w-full p-4 bg-gray-50 border mt-4 min-h-[120px] rounded">
    <label className="block font-semibold mb-2">Output</label>
    <div className="whitespace-pre-line">{output}</div>
  </section>
);

export default OutputArea;
