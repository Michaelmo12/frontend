# React Project Folder Organization Guide

## Current Folder Structure

```
src/
├── components/           # Reusable UI components
│   ├── common/          # Generic, reusable components
│   │   └── Button.jsx   # Example reusable button component
│   └── Counter.jsx      # Existing counter component
├── pages/               # Page-level components
│   └── HomePage.jsx     # Main home page component
├── hooks/               # Custom React hooks
│   └── useAppState.js   # Custom hooks for state management
├── utils/               # Utility functions and helpers
│   └── helpers.js       # Common utility functions
├── constants/           # Application constants
│   └── index.js         # App-wide constants
├── styles/              # Global styles and theme files
│   └── globals.css      # Global CSS variables and utilities
├── assets/              # Static assets (images, icons, fonts)
│   └── react.svg        # Existing React logo
├── App.jsx              # Main app component (now organized)
├── App.css              # App-specific styles
├── main.jsx             # Application entry point
└── index.css            # Base styles
```

## Folder Purpose and Best Practices

### 📁 **components/**
- **Purpose**: Store all reusable UI components
- **Subfolders**:
  - `common/`: Generic components like Button, Input, Modal
  - `layout/`: Layout components like Header, Footer, Sidebar
  - `ui/`: Specific UI components

### 📁 **pages/**
- **Purpose**: Page-level components that represent different routes/views
- **Naming**: Use descriptive names like `HomePage`, `LoginPage`, `ProfilePage`

### 📁 **hooks/**
- **Purpose**: Custom React hooks for reusable stateful logic
- **Naming**: Always start with `use` (e.g., `useCounter`, `useToggleMessage`)

### 📁 **utils/**
- **Purpose**: Pure utility functions that don't depend on React
- **Examples**: Date formatters, validation functions, data transformers

### 📁 **constants/**
- **Purpose**: Application-wide constants
- **Examples**: API endpoints, default values, configuration

### 📁 **styles/**
- **Purpose**: Global styles, CSS variables, themes
- **Files**: `globals.css`, `variables.css`, `themes.css`

### 📁 **assets/**
- **Purpose**: Static files like images, icons, fonts
- **Organization**: Group by type (`images/`, `icons/`, `fonts/`)

## Additional Folders for Larger Projects

As your project grows, consider adding:

```
src/
├── context/             # React Context providers
├── services/            # API calls and external services
├── store/               # State management (Redux, Zustand)
├── types/               # TypeScript type definitions
├── lib/                 # Third-party library configurations
└── data/                # Mock data or static data files
```

## Benefits of This Organization

1. **Scalability**: Easy to find and organize code as project grows
2. **Maintainability**: Clear separation of concerns
3. **Reusability**: Components and hooks can be easily reused
4. **Team Collaboration**: Consistent structure for team members
5. **Testing**: Easier to write and organize tests

## File Naming Conventions

- **Components**: PascalCase (`Button.jsx`, `HomePage.jsx`)
- **Hooks**: camelCase starting with "use" (`useCounter.js`)
- **Utils**: camelCase (`helpers.js`, `validators.js`)
- **Constants**: camelCase (`index.js`, `apiEndpoints.js`)

This organization will help keep your React project clean, maintainable, and scalable!
