# 🤖 Chatbot Flow Builder

A visual flow editor for creating chatbot conversation flows. Build your chatbot's conversation logic by dragging and connecting message blocks.

## ✨ Features

- **Add Message Blocks**: Create new message nodes with the "Add Message Block" button
- **Drag & Drop**: Move message blocks around the canvas
- **Connect Blocks**: Draw arrows between blocks to show conversation flow
- **Edit Messages**: Click on any message block to edit the text
- **Save Flow**: Export your complete flow as JSON (check console)
- **Clear All**: Reset the flow to start fresh

## 🚀 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser** and navigate to `http://localhost:5173`

## 🎯 How to Use

1. **Add Message Blocks**: Click the "Add Message Block" button to create new conversation nodes
2. **Edit Messages**: Click on any message block and type your chatbot's response
3. **Connect Flow**: Drag from the bottom handle of one block to the top handle of another to create connections
4. **Rearrange**: Drag blocks around to organize your flow visually
5. **Save**: Click "Save Flow" to export your complete flow as JSON (check browser console)

## 📊 Example Flow

Your chatbot flow might look like this:

```
[Hi, how can I help you?]
               ↓
[Buy something]       [Support]
       ↓                     ↓
[Show product list]     [What issue?]
```

## 🛠️ Built With

- **React** - UI framework
- **ReactFlow** - Flow diagram library
- **Tailwind CSS** - Styling
- **Vite** - Build tool

## 📝 License

MIT License
