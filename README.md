# 🏔️ Tinkin Desafio Avanzado

## 📋 Description
Web application for preserving traditional Andean recipes, developed with Next.js and React. Allows listing, searching, filtering, and managing recipes with a focus on user experience and cultural preservation.

## 🔗 Live Demo  
**[View Demo](https://tinkin-desafio-front.vercel.app/)**

![Project Banner](./public/images/home.png)

## 🛠 Core Technologies
- **Frontend**: Next.js 15, React 19
- **Styling**: Tailwind CSS
- **Typing**: TypeScript
- **State Management**: useReducer + Context API
- **Notifications**: react-hot-toast

## 📂 Project Structure
```bash
src/
├── app/
│   ├── _components/    # UI Components (atoms, molecules, organisms)
│   ├── _lib/           # Reusable helpers and logic  
│   ├── _models/        # TypeScript types & interfaces
│   ├── _store/         # State management (reducer, actions, context)
│   └── _styles/        # Global styles and themes
public/                 # Static assets
```

🚀 Key Features
📜 Complete recipe listing

🔍 Name-based search

🎛 "Cooked before" status filtering

✨ Side panel for create/edit functionality

📱 Responsive design

🛠️ Basic Commands
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Create production build
npm run build

# Run tests
npm test
```

🧪 Testing
Jest for unit testing

Testing Library for components

ESLint for code quality

🌟 Technical Highlights
Architecture: Atomic Design component structure

State: Centralized management with useReducer
