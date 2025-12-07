AI Interface Prototype
Frontend & UI/UX Designer Technical Assessment
Overview
A polished, frontend-only prototype of an AI interface combining the best features from leading AI platforms including ChatGPT, Claude, Hugging Face, Microsoft Copilot, and Google Gemini.
🎯 Objective
Survey several leading AI platforms, choose 6-8 core features, then research, design, and build a polished prototype exposing those essentials.

📊 Research
Platforms Reviewed

OpenAI Playground

Clean, minimalist interface with clear visual hierarchy
Model selector dropdown with detailed specifications
Standout: Intuitive parameter controls with real-time feedback


Anthropic Claude UI

Artifact generation for code and content
Document upload and processing capabilities
Standout: Excellent conversation threading and context management


Hugging Face Spaces

Interactive model playground with live parameter adjustment
Community-driven model discovery
Standout: Advanced parameter panel with detailed tooltips


Microsoft Copilot Lab

Multi-modal input support (text, images, files)
Suggested prompt templates
Standout: Smart template system with categories


Google Gemini

Context-aware responses with source citations
File handling (PDFs, images, documents)
Standout: Clean chat interface with copy/export functionality



Chosen Features (6-8)

Model Selector - Dropdown to choose between AI models (GPT-4, Claude, custom)
Prompt Editor - Text area with save/load template functionality
Parameters Panel - Sliders for temperature, max tokens, top-p, frequency penalty
Chat Output Area - Display conversation with copy and download JSON actions
Theme Toggle - Light/dark mode switch persisted in localStorage
Template Management - Save and load prompt templates
Responsive Layout - Mobile-first design with breakpoints
Real-time Stats - Character counter and token estimation


🎨 Design
Design System (Tailwind Tokens)
Colors

Primary: Blue-600 (#2563eb)
Background Light: Gray-50 (#f9fafb)
Background Dark: Gray-900 (#111827)
Surface Light: White (#ffffff)
Surface Dark: Gray-800 (#1f2937)
Border Light: Gray-300 (#d1d5db)
Border Dark: Gray-600 (#4b5563)
Text Light: Gray-900 (#111827)
Text Dark: White (#ffffff)

Typography

Font Family: Inter (system font)
Headings:

H1: text-2xl (24px), font-bold
H3: text-base (16px), font-semibold


Body: text-sm (14px), font-normal
Small: text-xs (12px)

Spacing

Container padding: px-4 sm:px-6 lg:px-8
Section gaps: gap-6
Card padding: p-6
Component spacing: space-y-4

Shadows

Card: shadow-lg
Hover: hover:shadow-xl

Border Radius

Cards: rounded-xl (12px)
Buttons: rounded-lg (8px)
Inputs: rounded-lg (8px)

Design Decisions
1. Layout Structure

Chose a 2-column responsive grid (1 column on mobile, 3 columns on desktop)
Left sidebar for controls, right side for interaction
Rationale: Separates configuration from execution, reducing cognitive load

2. Color Scheme

Blue as primary for trust and professionalism
Neutral grays for surfaces to reduce eye strain
High contrast in dark mode for WCAG compliance
Rationale: Blue conveys reliability; neutrals keep focus on content

3. Component Hierarchy

Model selector at top (most important decision)
Parameters below (fine-tuning controls)
Templates at bottom (optional enhancement)
Rationale: Follows natural workflow from general to specific

4. Interactive Elements

Sliders for continuous values (temperature, tokens)
Dropdowns for discrete choices (models)
Buttons with clear CTAs and icons
Rationale: Matches mental models of parameter types

5. Responsive Strategy

Mobile: Stacked single column
Tablet: 2-column with adjusted spacing
Desktop: 3-column for optimal screen usage
Rationale: Content-first approach ensures usability across devices

6. Animations

Smooth transitions (0.2s) on hover states
Loading animations for async operations
Theme switch fades for visual continuity
Rationale: Provides feedback without distraction


🛠️ Development
Tech Stack

Framework: Next.js 14 (App Router)
Language: TypeScript (strict mode)
Styling: Tailwind CSS
Icons: Lucide React
State Management: React Context API
Deployment: Vercel

File Structure
ai-interface/
├── app/
│   ├── layout.tsx           # Root layout with theme support
│   ├── page.tsx             # Main application page
│   ├── globals.css          # Global styles & Tailwind
│   └── api/
│       ├── models/route.ts  # Mock API for models
│       └── templates/route.ts # Mock API for templates
├── components/
│   ├── ModelSelector.tsx    # Model selection dropdown
│   ├── PromptEditor.tsx     # Text editor with save/load
│   ├── ParametersPanel.tsx  # Parameter sliders
│   ├── ChatOutput.tsx       # Message display area
│   ├── ThemeToggle.tsx      # Light/dark theme switch
│   └── TemplateManager.tsx  # Template CRUD operations
├── lib/
│   ├── types.ts             # TypeScript interfaces
│   └── mockData.ts          # Mock API data
└── .storybook/              # Storybook configuration
Component Architecture
ModelSelector

Manages model selection state
Fetches available models from API
Displays model specifications (provider, max tokens)
Accessible dropdown with keyboard navigation

PromptEditor

Controlled textarea component
Character and token counting
Save template functionality
Load from file (JSON/TXT)

ParametersPanel

Range sliders for each parameter
Real-time value display
Helper text for each parameter
Sensible defaults based on research

ChatOutput

Message history display
Copy to clipboard functionality
Download conversation as JSON
Auto-scroll to latest message

ThemeToggle

Toggles between light/dark themes
Persists preference to localStorage
Smooth transitions between themes
System preference detection

State Management
typescriptinterface AppState {
  selectedModel: string;
  prompt: string;
  parameters: Parameters;
  messages: ChatMessage[];
  templates: PromptTemplate[];
  theme: 'light' | 'dark';
}

Local state with useState for component-specific data
Props drilling for shared state (acceptable for prototype scope)
localStorage for theme persistence
Mock API routes simulate backend interactions

Mock API Implementation
GET /api/models

Returns array of available AI models
Includes model ID, name, provider, max tokens
Simulated 100ms delay for realistic behavior

GET /api/templates

Returns saved prompt templates
Includes template ID, name, content, timestamp
Simulated 100ms delay

Accessibility Features

Keyboard Navigation

All interactive elements are focusable
Logical tab order
Focus indicators on all controls


ARIA Labels

Descriptive labels for screen readers
aria-expanded for dropdowns
aria-label for icon buttons


Color Contrast

WCAG AA compliant contrast ratios
Tested in both light and dark modes


Semantic HTML

Proper heading hierarchy
Form labels associated with inputs
Landmark regions for navigation



Responsive Breakpoints
css/* Mobile First */
Default: < 640px (single column)

/* Tablet */
sm: 640px (adjusted spacing)
md: 768px (2-column layout)

/* Desktop */
lg: 1024px (3-column layout)
xl: 1280px (max-width container)
Known Limitations

No Real AI Integration - Uses simulated responses for demo purposes
No Backend Persistence - Templates stored in component state only
No Authentication - No user accounts or saved preferences across sessions
Limited Error Handling - Basic error states for prototype
No Rate Limiting - No throttling on API calls


📦 Installation & Setup
Prerequisites

Node.js 18+
npm or yarn
VS Code (recommended)

Step-by-Step Guide

Clone or Create Project

bash# Create new Next.js project
npx create-next-app@latest ai-interface --typescript --tailwind --app --no-src-dir
cd ai-interface

Install Dependencies

bashnpm install lucide-react
npm install --save-dev @storybook/react @storybook/react-vite @storybook/addon-essentials

Copy Files


Copy all component files to components/ folder
Copy type definitions to lib/types.ts
Copy mock data to lib/mockData.ts
Copy API routes to app/api/ folders
Replace app/page.tsx with main application code
Replace app/layout.tsx with provided layout


Run Development Server

bashnpm run dev
Open http://localhost:3000

Setup Storybook

bashnpx storybook@latest init
npm run storybook
Open http://localhost:6006

🎭 Storybook
Component Stories
Stories created for core components:

Button.stories.tsx - All button variants and states
Slider.stories.tsx - Parameter slider component
Modal.stories.tsx - Template save modal
ChatBubble.stories.tsx - Individual message display

Running Storybook
bashnpm run storybook
Storybook Features

Interactive controls for all props
Dark mode toggle
Responsive viewport testing
Accessibility checks


🚀 Deployment
Deploy to Vercel

Push to GitHub

bashgit init
git add .
git commit -m "Initial commit"
git remote add origin <your-repo-url>
git push -u origin main

Connect to Vercel


Go to vercel.com
Import your GitHub repository
Configure build settings (auto-detected)
Deploy


Environment Variables
None required for this prototype (all client-side)

Alternative: Netlify
bashnpm run build
# Upload 'out' folder to Netlify
Alternative: GitHub Pages
bash# Add to package.json
"scripts": {
  "export": "next build && next export"
}

npm run export
# Deploy 'out' folder to GitHub Pages

📸 Screenshots
(Include Figma mockup link or embedded screenshots here)
Figma Design: [Link to design file]
Key Screens:

Light mode - Full interface
Dark mode - Full interface
Mobile responsive view
Parameter panel detail
Chat interaction


🧪 Testing
Manual Testing Checklist

 Model selector displays all models
 Parameters update in real-time
 Prompt editor saves and loads templates
 Chat displays messages correctly
 Copy to clipboard works
 Download JSON exports conversation
 Theme toggle persists preference
 Responsive layout works on mobile
 Keyboard navigation functional
 Dark mode has proper contrast

Browser Compatibility
Tested on:

Chrome 120+
Firefox 121+
Safari 17+
Edge 120+


📝 Implementation Notes
Challenge 1: Theme Persistence
Problem: Theme not persisting across page refreshes
Solution: Used localStorage with useEffect hook to save/load theme preference
Code Location: components/ThemeToggle.tsx lines 12-20
Challenge 2: Responsive Parameter Panel
Problem: Sliders difficult to use on mobile
Solution: Increased touch target size to 44px minimum, added label spacing
Code Location: components/ParametersPanel.tsx lines 55-65
Challenge 3: TypeScript Strict Mode
Problem: Type errors with dropdown state management
Solution: Created comprehensive interfaces in types.ts, used proper generics
Code Location: lib/types.ts lines 1-35
Challenge 4: Mock API with Realistic Delays
Problem: Need to simulate network latency
Solution: Added setTimeout with 100ms delay in API routes
Code Location: app/api/models/route.ts line 6

🔄 Future Enhancements
If given more time, I would add:

Real AI Integration - Connect to actual API (OpenAI, Anthropic)
Conversation History - Save multiple chat sessions
Advanced Templates - Category system, search, favorites
File Upload - Support PDFs, images, documents
Export Options - Export as Markdown, PDF, or shareable link
Collaborative Features - Share conversations with team
Performance Optimization - Virtual scrolling for long chats
Testing Suite - Jest + React Testing Library
Analytics - Track feature usage patterns
Internationalization - Multi-language support


📚 Resources

Next.js Documentation
Tailwind CSS
Lucide Icons
React TypeScript Cheatsheet


👤 Author
Frontend & UI/UX Designer Assessment
Submission Date: [Date]
Contact: [Your Email]

📄 License
This project is created for assessment purposes.

🙏 Acknowledgments

Inspired by OpenAI Playground, Claude, Hugging Face, Microsoft Copilot, and Google Gemini
Design patterns from leading AI interfaces
Accessibility guidelines from WAI-ARIA best practices
