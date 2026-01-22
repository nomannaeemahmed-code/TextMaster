# Text Master - AI Coding Guidelines

## Project Overview
Text Master is a React-based text manipulation tool built with Create React App. It provides text transformation features (uppercase, lowercase, capitalize), copy functionality, extra space removal, Word document export, and text-to-speech capabilities.

## Architecture
- **Main App**: `src/App.jsx` contains core logic, state management, and UI rendering
- **Components**: Modular components in `src/component/` (Navbar, Alert, About, etc.)
- **Styling**: Bootstrap for base UI, custom CSS in `src/index.css` for dark/light mode
- **State**: Simple React hooks (useState) for text content, mode, and alerts

## Key Patterns
- **Mode Toggle**: Dark/light mode controlled by `mode` state, applies CSS classes to `document.body` and conditional styling
- **Text Operations**: All transformations modify the `text` state in App.jsx (e.g., `text.toUpperCase()`, regex for word count)
- **Button States**: Buttons disabled when `text.trim() === ""` to prevent empty operations
- **Alerts**: Temporary success messages using `setTimeout` for 1.5s display
- **File Export**: Uses `docx` library to generate Word documents, `file-saver` for downloads
- **Speech**: Integrates `react-text-to-speech` hook for audio playback

## Development Workflow
- **Start Dev Server**: `npm start` (runs on localhost:3000)
- **Build Production**: `npm run build` (outputs to `build/` folder)
- **Run Tests**: `npm test` (Jest with React Testing Library)
- **Dependencies**: Bootstrap for styling, react-router-dom (imported but unused), external libs for speech/docx

## Coding Conventions
- **Component Structure**: Functional components with hooks, exports at file bottom
- **Imports**: Group React/Bootstrap first, then custom components, unused imports commented out
- **Styling**: Mix of Bootstrap classes and inline styles, conditional classes for mode (e.g., `text-color-dark` vs `text-color-light`)
- **Event Handlers**: Named functions for clarity (e.g., `clickbtn`, `capitallizebtn`)
- **Assets**: Images in `src/assets/images/`, referenced with relative paths

## Integration Points
- **Text-to-Speech**: Use `useSpeech` hook from `react-text-to-speech` for start/pause/stop
- **Word Export**: Create `Document` with `Paragraph` and `TextRun`, pack to Blob with `Packer.toBlob`
- **Clipboard**: `navigator.clipboard.writeText()` for copy functionality
- **Bootstrap Components**: Navbar, Button, Alert, Form from `react-bootstrap`

## Common Tasks
- Adding new text transformations: Implement in App.jsx, add button with disabled state check
- Styling updates: Modify `src/index.css` for global styles, use mode-conditional classes
- New features: Follow component pattern in `src/component/`, integrate with App.jsx state</content>
<parameter name="filePath">d:\react react\21-12-2024\Text Master\.github\copilot-instructions.md