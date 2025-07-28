// src/App.jsx
import React, { useCallback, useMemo, useState } from "react";
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
  useReactFlow,
  ReactFlowProvider,
} from "reactflow";
import "reactflow/dist/style.css";
import { CustomNode } from "./CustomNode";

const nodeTypes = {
  custom: CustomNode,
};

const initialNodes = [
  {
    id: "1",
    type: "custom",
    position: { x: 250, y: 50 },
    data: { 
      label: "Hi, how can I help you?",
      onChange: () => {} // Will be set in component
    },
  },
];

const initialEdges = [];

function FlowBuilder() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);
  const [nodeId, setNodeId] = useState(2);

  const reactFlowInstance = useReactFlow();

  // Update the onChange function for each node
  const updateNodeData = useCallback((nodeId, newLabel) => {
    setNodes((nds) =>
      nds.map((node) => {
        if (node.id === nodeId) {
          return {
            ...node,
            data: {
              ...node.data,
              label: newLabel,
            },
          };
        }
        return node;
      })
    );
  }, []);

  // Add onChange function to all nodes
  const nodesWithHandlers = useMemo(() => {
    return nodes.map((node) => ({
      ...node,
      data: {
        ...node.data,
        onChange: updateNodeData,
      },
    }));
  }, [nodes, updateNodeData]);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );

  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );

  const onConnect = useCallback(
    (connection) => setEdges((eds) => addEdge(connection, eds)),
    []
  );

  const addNode = useCallback(() => {
    const newNode = {
      id: nodeId.toString(),
      type: "custom",
      position: { 
        x: Math.random() * 400 + 100, 
        y: Math.random() * 300 + 100 
      },
      data: { 
        label: "New message block",
        onChange: updateNodeData
      },
    };
    setNodes((nds) => [...nds, newNode]);
    setNodeId((prev) => prev + 1);
  }, [nodeId, updateNodeData]);

  const saveFlow = useCallback(() => {
    const flowData = {
      nodes: nodesWithHandlers,
      edges: edges,
    };
    console.log("Chatbot Flow Data:", JSON.stringify(flowData, null, 2));
    alert("Flow saved! Check the console for the JSON data.");
  }, [nodesWithHandlers, edges]);

  const clearFlow = useCallback(() => {
    setNodes([{
      id: "1",
      type: "custom",
      position: { x: 250, y: 50 },
      data: { 
        label: "Hi, how can I help you?",
        onChange: updateNodeData
      },
    }]);
    setEdges([]);
    setNodeId(2);
  }, [updateNodeData]);

  return (
    <div className="w-screen h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">🤖 Chatbot Flow Builder</h1>
            <p className="text-sm text-gray-600">Create your chatbot conversation flow</p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={addNode}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2"
            >
              <span className="text-lg">+</span>
              Add Message Block
            </button>
            <button
              onClick={saveFlow}
              className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors flex items-center gap-2"
            >
              💾 Save Flow
            </button>
            <button
              onClick={clearFlow}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors flex items-center gap-2"
            >
              🗑️ Clear All
            </button>
          </div>
        </div>
      </div>

      {/* Flow Canvas */}
      <div className="h-[calc(100vh-80px)]">
        <ReactFlow
          nodes={nodesWithHandlers}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          fitView
          className="bg-gray-50"
        >
          <MiniMap 
            nodeColor="#3b82f6"
            nodeStrokeWidth={3}
            zoomable
            pannable
          />
          <Controls />
          <Background variant="dots" gap={20} size={1} color="#e5e7eb" />
        </ReactFlow>
      </div>

      {/* Instructions */}
      <div className="fixed bottom-4 left-4 bg-white rounded-lg shadow-lg p-4 max-w-sm">
        <h3 className="font-semibold text-gray-800 mb-2">💡 How to use:</h3>
        <ul className="text-sm text-gray-600 space-y-1">
          <li>• Click "Add Message Block" to create new nodes</li>
          <li>• Drag nodes to reposition them</li>
          <li>• Connect nodes by dragging from the bottom handle to another node's top handle</li>
          <li>• Edit message text by clicking on the textarea</li>
          <li>• Click "Save Flow" to export as JSON</li>
        </ul>
      </div>
    </div>
  );
}

function App() {
  return (
    <ReactFlowProvider>
      <FlowBuilder />
    </ReactFlowProvider>
  );
}

export default App;
