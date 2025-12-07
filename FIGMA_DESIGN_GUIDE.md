Figma Design Guide for AI Interface
Creating Your Design Mockup in Figma
This guide helps you create the design mockup required for the assessment.

Part 1: Setup Figma (5 minutes)
1. Create Figma Account

Go to https://figma.com
Sign up (free account is fine)
Verify email

2. Create New File

Click "New design file"
Name it "AI Interface Prototype - Design System"


Part 2: Create Design System (15 minutes)
1. Create Frame for Design Tokens

Press F for Frame tool
Create frame: 1440x900 (Desktop)
Name it "Design System"

2. Color Palette
Create color swatches (use Rectangle tool R):
Primary Colors:
Blue-600: #2563EB (Main actions)
Blue-700: #1D4ED8 (Hover states)
Blue-500: #3B82F6 (Focus rings)
Neutral Colors (Light Mode):
White: #FFFFFF (Surface)
Gray-50: #F9FAFB (Background)
Gray-100: #F3F4F6 (Hover)
Gray-200: #E5E7EB (Borders)
Gray-300: #D1D5DB (Borders strong)
Gray-600: #4B5563 (Text secondary)
Gray-900: #111827 (Text primary)
Neutral Colors (Dark Mode):
Gray-900: #111827 (Background)
Gray-800: #1F2937 (Surface)
Gray-700: #374151 (Surface hover)
Gray-600: #4B5563 (Borders)
White: #FFFFFF (Text primary)
Gray-400: #9CA3AF (Text secondary)
3. Typography Styles
Create text styles:
Heading 1:

Font: Inter
Size: 24px
Weight: Bold (700)
Color: Gray-900 / White

Heading 3:

Font: Inter
Size: 16px
Weight: Semibold (600)
Color: Gray-900 / White

Body:

Font: Inter
Size: 14px
Weight: Regular (400)
Color: Gray-900 / White

Small:

Font: Inter
Size: 12px
Weight: Regular (400)
Color: Gray-600 / Gray-400

4. Component Styles
Shadows:
Card Shadow: 
  X: 0, Y: 1, Blur: 3, Spread: 0
  Color: rgba(0, 0, 0, 0.1)

Card Shadow Hover:
  X: 0, Y: 4, Blur: 12, Spread: 0
  Color: rgba(0, 0, 0, 0.1)
Border Radius:
Cards: 12px
Buttons: 8px
Inputs: 8px
Spacing:
Gap between sections: 24px
Card padding: 24px
Button padding: 12px 16px

Part 3: Create Component Library (30 minutes)
1. Button Component
Create a button component with variants:
Primary Button:

Background: Blue-600
Text: White, 14px, Medium
Padding: 12px 16px
Border Radius: 8px
Icon: Lucide icon (16px)

States to show:

Default
Hover (Blue-700)
Focus (with ring)
Disabled (opacity 50%)

How to create:

Draw rectangle (R)
Add text
Add icon from Iconify plugin
Group elements
Create component (Ctrl+Alt+K)
Add variants in properties panel

2. Input/Textarea Component
Text Input:

Background: White / Gray-800
Border: 1px Gray-300 / Gray-600
Border Radius: 8px
Padding: 12px 16px
Placeholder: Gray-400 / Gray-500

States:

Default
Focus (Blue-500 ring)
Error (Red-500 border)

3. Slider Component
Range Slider:

Track: Gray-200 / Gray-700, height 8px
Thumb: Blue-600, 16x16px circle
Border Radius: 8px (track)

4. Dropdown Component
Select Dropdown:

Container: White / Gray-800
Border: 1px Gray-300 / Gray-600
Border Radius: 8px
Icon: ChevronDown (20px)
Padding: 12px 16px

Dropdown Menu:

Background: White / Gray-800
Shadow: Card shadow
Item hover: Gray-100 / Gray-700

5. Chat Message Component
User Message:

Background: Blue-600
Text: White
Border Radius: 12px
Padding: 12px 16px
Max width: 80%
Align: Right

AI Message:

Background: Gray-100 / Gray-700
Text: Gray-900 / White
Border Radius: 12px
Padding: 12px 16px
Max width: 80%
Align: Left

6. Card Component
Basic Card:

Background: White / Gray-800
Border: 1px Gray-200 / Gray-700
Border Radius: 12px
Padding: 24px
Shadow: Card shadow


Part 4: Create Main Screens (45 minutes)
Screen 1: Desktop - Light Mode (1440x900)
Layout Structure:
┌─────────────────────────────────────────────┐
│  Header (Logo, Title, Theme Toggle)         │
├──────────────┬──────────────────────────────┤
│              │                              │
│  Sidebar     │  Main Content Area           │
│  (33%)       │  (67%)                       │
│              │                              │
│ - Model      │  Prompt Editor               │
│ - Params     │                              │
│ - Templates  │  Chat Output                 │
│              │                              │
├──────────────┴──────────────────────────────┤
│  Footer                                     │
└─────────────────────────────────────────────┘
Elements to include:

Header with logo and theme toggle
Model selector dropdown (expanded state)
Parameter sliders (all 4 visible)
Prompt editor with sample text
Chat area with 2-3 messages
All buttons and controls
Template manager (collapsed)

Screen 2: Desktop - Dark Mode (1440x900)
Same layout as Screen 1, but:

Use dark mode colors
Ensure proper contrast
Show theme toggle in "dark" state
Use dark mode text colors

Screen 3: Mobile - Light Mode (375x812)
Layout Structure:
┌─────────────────┐
│  Header         │
├─────────────────┤
│                 │
│  Model Selector │
│                 │
│  Prompt Editor  │
│                 │
│  Parameters     │
│  (Collapsed)    │
│                 │
│  Chat Output    │
│                 │
│  [Send Button]  │
│                 │
└─────────────────┘
Key changes:

Stack all elements vertically
Full width components
Collapsible parameters panel
Sticky send button at bottom

Screen 4: Tablet - Light Mode (768x1024)
Layout Structure:
┌──────────────────────────┐
│  Header                  │
├──────────┬───────────────┤
│          │               │
│ Sidebar  │  Main Area    │
│ (40%)    │  (60%)        │
│          │               │
│          │               │
└──────────┴───────────────┘
Screen 5: Component Detail View
Create a separate frame showing:

All button states
All input states
Slider variations
Color palette
Typography scale
Spacing guide


Part 5: Add Interactions (Optional, 15 minutes)
1. Button Hover State

Select button component
Click "Prototype" tab
Add interaction: While hovering → Change to → Hover variant

2. Dropdown Open/Close

Select dropdown
Add interaction: On click → Change to → Open variant

3. Theme Toggle

Create 2 frames: Light and Dark
Add interaction on toggle: On click → Navigate to → Dark frame


Part 6: Export and Document (10 minutes)
1. Add Annotations
Use text boxes to add notes:

"24px gap between sections"
"Blue-600 (#2563EB) for primary actions"
"12px border radius for cards"
"Inter font family, 400 & 600 weights"

2. Create Design Specs
Add a "Specifications" page with:

Breakpoints (mobile: 375px, tablet: 768px, desktop: 1440px)
Grid system (if used)
Z-index layers
Animation timings

3. Export Assets
If you used custom icons:

Select icon
Right panel → Export
Format: SVG
Export

4. Share Link

Click "Share" button (top right)
Set to "Anyone with the link can view"
Copy link
Add to README.md


Design Checklist
Before finalizing:

 All colors match Tailwind tokens
 Typography uses Inter font
 Spacing is consistent (multiples of 4px)
 All interactive states shown
 Dark mode has proper contrast
 Mobile layout is usable
 Components are properly named
 Frames are organized
 Annotations added
 Design link is public
 Screenshots exported


Quick Tips
1. Use Auto Layout (Shift+A)
Makes components responsive and easier to adjust
2. Use Constraints
Set constraints to make elements resize properly
3. Use Components (Ctrl+Alt+K)
Create components for reusable elements
4. Name Layers
Keep your layers panel organized
5. Use Plugins

Iconify: For Lucide icons
Unsplash: For placeholder images
Content Reel: For dummy text

6. Keyboard Shortcuts

R: Rectangle
T: Text
F: Frame
Ctrl+G: Group
Ctrl+D: Duplicate
Alt+Drag: Duplicate with spacing


Figma Resources

Figma Learn: https://help.figma.com/
Figma Templates: https://www.figma.com/templates/
UI Kits: Search "AI interface" in Figma Community
Icon Sets: Lucide icons plugin


Example Design Structure
AI Interface Prototype
├── 📄 Cover (Project title and description)
├── 🎨 Design System
│   ├── Colors
│   ├── Typography
│   ├── Shadows
│   └── Spacing
├── 🧩 Components
│   ├── Buttons
│   ├── Inputs
│   ├── Sliders
│   ├── Dropdowns
│   └── Chat Bubbles
├── 🖥️ Screens - Desktop
│   ├── Light Mode
│   └── Dark Mode
├── 📱 Screens - Mobile
│   └── Light Mode
├── 📋 Specifications
└── 📤 Assets for Export

Time Estimate

Design System: 15 min
Components: 30 min
Desktop Screens: 30 min
Mobile Screen: 15 min
Annotations: 10 min
Polish: 20 min

Total: ~2 hours

Alternative: Use Existing Templates
If time is limited:

Search Figma Community for "AI chat interface"
Duplicate a template
Customize with your colors and components
Ensure it matches your implementation

Remember to credit the original designer if using a template!

Good luck with your design! 🎨
