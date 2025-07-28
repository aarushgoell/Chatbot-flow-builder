import React from "react";
import { Handle, Position } from "reactflow";

export function CustomNode({ data, id }) {
  return (
    <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-lg border-2 border-white w-64 text-white">
      <Handle type="target" position={Position.Top} className="w-3 h-3 bg-white" />
      
      <div className="flex items-center mb-2">
        <div className="w-3 h-3 bg-white rounded-full mr-2"></div>
        <span className="text-xs font-semibold uppercase tracking-wide">Message</span>
      </div>
      
      <textarea
        className="w-full bg-white/10 border border-white/20 rounded p-2 text-sm text-white placeholder-white/70 resize-none"
        value={data.label}
        onChange={(e) => data.onChange(id, e.target.value)}
        placeholder="Enter your message here..."
        rows={3}
        style={{ minHeight: '60px' }}
      />
      
      <Handle type="source" position={Position.Bottom} className="w-3 h-3 bg-white" />
    </div>
  );
}
