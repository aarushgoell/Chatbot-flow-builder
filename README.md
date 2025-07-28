# 🤖 Chatbot Flow Builder

> **A powerful visual flow editor for creating interactive chatbot conversation flows**

[![React](https://img.shields.io/badge/React-19.1.0-blue.svg)](https://reactjs.org/)
[![ReactFlow](https://img.shields.io/badge/ReactFlow-11.11.4-green.svg)](https://reactflow.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.11-purple.svg)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-7.0.4-orange.svg)](https://vitejs.dev/)

---

## 📖 Overview

Chatbot Flow Builder is an intuitive web application that allows you to visually design and create conversation flows for chatbots. Think of it as a **visual programming tool** for your chatbot's brain - you can drag, drop, and connect message blocks to create complex conversation paths.

### 🎯 Perfect For
- **Chatbot Developers** - Plan and visualize conversation flows
- **Product Managers** - Design user journey maps
- **UX Designers** - Create interactive prototypes
- **Business Analysts** - Map out customer service scenarios

---

## ✨ Key Features

### 🧩 **Visual Flow Design**
- **Drag & Drop Interface** - Intuitive block-based design
- **Real-time Editing** - Edit messages directly in the blocks
- **Visual Connections** - Draw arrows between blocks to show flow
- **Responsive Canvas** - Zoom, pan, and navigate your flows

### 🔧 **Advanced Functionality**
- **Add Message Blocks** - Create unlimited conversation nodes
- **Smart Positioning** - Automatic layout and positioning
- **Connection Handles** - Easy-to-use connection points
- **Flow Export** - Save your flows as JSON for backend integration

### 🎨 **Professional UI**
- **Modern Design** - Clean, gradient-styled message blocks
- **Mini-map Navigation** - Overview of your entire flow
- **Control Panel** - Zoom, fit view, and navigation controls
- **Responsive Layout** - Works on desktop and tablet

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** (version 16 or higher)
- **npm** or **yarn** package manager

### Installation

1. **Clone or download** the project
   ```bash
   git clone <repository-url>
   cd chatbot-flow-builder
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:5174`

---

## 🎮 How to Use

### 1. **Adding Message Blocks**
- Click the **"Add Message Block"** button in the header
- New blocks appear at random positions on the canvas
- Each block is ready for immediate editing

### 2. **Editing Messages**
- **Click on any message block** to edit the text
- Use the **textarea** to write multi-line messages
- Changes are saved automatically as you type

### 3. **Connecting Blocks**
- **Drag from the bottom handle** of one block
- **Connect to the top handle** of another block
- Visual arrows show the conversation flow direction

### 4. **Rearranging Layout**
- **Drag blocks** around the canvas to reposition them
- **Use the mini-map** for quick navigation
- **Zoom and pan** to focus on specific areas

### 5. **Saving Your Flow**
- Click **"Save Flow"** to export your complete flow
- **Check the browser console** for the JSON data
- Use this JSON for backend integration or storage

---

## 📊 Example Flow Structure

Here's how a typical customer service chatbot flow might look:

```
┌─────────────────────────┐
│   Hi, how can I help?   │
└─────────────┬───────────┘
              │
              ▼
    ┌─────────────────┐
    │   Buy Product   │
    └─────────┬───────┘
              │
              ▼
┌─────────────────────────┐
│   Show Product List     │
└─────────────────────────┘
```

### 🎯 **Real-World Use Cases**

1. **Customer Support Bot**
   - Greeting → Issue Type → Specific Help → Resolution

2. **E-commerce Assistant**
   - Welcome → Product Category → Product Details → Purchase

3. **Booking System**
   - Service Selection → Date/Time → Confirmation → Payment

---

## 🛠️ Technical Details

### **Built With**
- **[React 19.1.0](https://reactjs.org/)** - Modern UI framework
- **[ReactFlow 11.11.4](https://reactflow.dev/)** - Professional flow diagram library
- **[Tailwind CSS 4.1.11](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Vite 7.0.4](https://vitejs.dev/)** - Fast build tool and dev server

### **Key Components**
- **CustomNode.jsx** - Custom message block component
- **App.jsx** - Main application with flow logic
- **ReactFlowProvider** - Context provider for ReactFlow

### **Data Structure**
```json
{
  "nodes": [
    {
      "id": "1",
      "type": "custom",
      "position": { "x": 250, "y": 50 },
      "data": { "label": "Message content" }
    }
  ],
  "edges": [
    {
      "id": "e1-2",
      "source": "1",
      "target": "2"
    }
  ]
}
```

---

## 🎨 Customization

### **Styling Message Blocks**
Edit `src/CustomNode.jsx` to customize:
- **Colors and gradients**
- **Block dimensions**
- **Typography and spacing**
- **Connection handle styles**

### **Adding New Node Types**
1. Create a new component in `src/`
2. Add it to the `nodeTypes` object in `App.jsx`
3. Use the new type in your flow

### **Extending Functionality**
- **Add validation** to message content
- **Implement conditional logic** between nodes
- **Add animations** to connections
- **Create different node categories**

---

## 📱 Browser Compatibility

- ✅ **Chrome** (recommended)
- ✅ **Firefox**
- ✅ **Safari**
- ✅ **Edge**

---

## 🔧 Development

### **Available Scripts**
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

### **Project Structure**
```
chatbot-flow-builder/
├── src/
│   ├── App.jsx          # Main application component
│   ├── CustomNode.jsx   # Message block component
│   ├── main.jsx         # Application entry point
│   └── index.css        # Global styles
├── public/              # Static assets
├── package.json         # Dependencies and scripts
└── README.md           # This file
```

---

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

### **Development Guidelines**
- Follow existing code style and formatting
- Add comments for complex logic
- Test your changes thoroughly
- Update documentation as needed

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **[ReactFlow](https://reactflow.dev/)** for the excellent flow diagram library
- **[Tailwind CSS](https://tailwindcss.com/)** for the beautiful styling system
- **[Vite](https://vitejs.dev/)** for the fast development experience

---

## 📞 Support

If you have any questions or need help:

- **Create an issue** on GitHub
- **Check the documentation** at [ReactFlow.dev](https://reactflow.dev/)
- **Join the community** discussions

---

**Happy Flow Building! 🚀**
