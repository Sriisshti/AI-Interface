Complete VS Code Setup Guide
Step-by-Step Instructions for Building the AI Interface Prototype

Part 1: Initial Setup (10 minutes)
1. Install Prerequisites
Install Node.js:

Go to https://nodejs.org/
Download LTS version (20.x or higher)
Run installer and follow prompts
Verify installation:

bashnode --version
npm --version
Install VS Code:

Go to https://code.visualstudio.com/
Download and install
Open VS Code

2. Install VS Code Extensions (Recommended)
Open VS Code Extensions panel (Ctrl+Shift+X or Cmd+Shift+X) and install:

ES7+ React/Redux/React-Native snippets
Tailwind CSS IntelliSense
TypeScript (usually pre-installed)
Prettier - Code formatter
ESLint


Part 2: Create Project (5 minutes)
1. Open Terminal in VS Code
Method 1: View → Terminal (or Ctrl+ / Cmd+)
Method 2: Right-click in Explorer and select "Open in Integrated Terminal"
2. Create Next.js Project
bash# Navigate to where you want to create the project
cd Desktop  # or wherever you prefer

# Create new Next.js app
npx create-next-app@latest ai-interface --typescript --tailwind --app --no-src-dir

# When prompted, select:
# ✔ Would you like to use TypeScript? › Yes
# ✔ Would you like to use ESLint? › Yes
# ✔ Would you like to use Tailwind CSS? › Yes
# ✔ Would you like to use `src/` directory? › No
# ✔ Would you like to use App Router? › Yes
# ✔ Would you like to customize the default import alias? › No

# Navigate into project
cd ai-interface
3. Install Additional Dependencies
bashnpm install lucide-react
4. Open Project in VS Code
If not already open:
bashcode .

Part 3: Create File Structure (5 minutes)
1. Create Folders
In VS Code Explorer (left sidebar), create these folders:

Right-click → New Folder

Create:
components/
lib/
app/api/models/
app/api/templates/
.storybook/
Your structure should look like:
ai-interface/
├── app/
│   ├── api/
│   │   ├── models/
│   │   └── templates/
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
├── lib/
├── .storybook/
├── node_modules/
├── public/
├── .gitignore
├── next.config.js
├── package.json
├── README.md
├── tailwind.config.ts
└── tsconfig.json

Part 4: Create Type Definitions (5 minutes)
1. Create lib/types.ts

Click on lib folder
Click "New File" icon (or right-click → New File)
Name it types.ts
Copy and paste the types code from the artifact
Save (Ctrl+S / Cmd+S)

2. Create lib/mockData.ts

In lib folder, create mockData.ts
Copy and paste the mock data code
Save


Part 5: Create API Routes (5 minutes)
1. Create app/api/models/route.ts

Navigate to app/api/models/
Create file route.ts
Copy and paste models API code
Save

2. Create app/api/templates/route.ts

Navigate to app/api/templates/
Create file route.ts
Copy and paste templates API code
Save


Part 6: Create Components (20 minutes)
Create each component file in the components/ folder:
Component Creation Checklist:

ModelSelector.tsx

Create file
Copy code from artifact
Save


PromptEditor.tsx

Create file
Copy code from artifact
Save


ParametersPanel.tsx

Create file
Copy code from artifact
Save


ChatOutput.tsx

Create file
Copy code from artifact
Save


ThemeToggle.tsx

Create file
Copy code from artifact
Save


TemplateManager.tsx

Create file
Copy code from artifact
Save




Part 7: Update App Files (5 minutes)
1. Update app/page.tsx

Open app/page.tsx
Delete all existing content
Copy and paste main page code from artifact
Save

2. Update app/layout.tsx

Open app/layout.tsx
Replace content with layout code from artifact
Save

3. Update app/globals.css
Keep existing Tailwind directives at top:
css@tailwind base;
@tailwind components;
@tailwind utilities;

Part 8: Run Development Server (2 minutes)
1. Start the Server
In VS Code terminal:
bashnpm run dev
You should see:
- Local:        http://localhost:3000
- Ready in X seconds
2. Open in Browser

Open your browser
Go to http://localhost:3000
You should see your AI Interface!

3. Test Features
Try these:

 Select different models
 Type in prompt editor
 Adjust parameter sliders
 Toggle theme (light/dark)
 Send a message
 Copy message
 Download JSON


Part 9: Setup Storybook (Optional, 10 minutes)
1. Initialize Storybook
bash# Stop dev server (Ctrl+C)
npx storybook@latest init
Follow prompts and select:

Framework: React
Builder: Vite

2. Create Storybook Config Files
Create these files in .storybook/:

.storybook/main.ts

Copy config from artifact
Save


.storybook/preview.ts

Copy config from artifact
Save



3. Create Sample Story
In components/ folder:

Button.stories.tsx

Copy story code from artifact
Save



4. Run Storybook
bashnpm run storybook
Opens at http://localhost:6006

Part 10: Build for Production (5 minutes)
1. Build Project
bash# Stop dev server if running (Ctrl+C)
npm run build
This creates optimized production build.
2. Test Production Build
bashnpm start
Opens at http://localhost:3000

Part 11: Deploy to Vercel (10 minutes)
1. Create GitHub Repository
Option A: Using GitHub Desktop

Download GitHub Desktop
File → Add Local Repository
Select your ai-interface folder
Publish repository

Option B: Using Git CLI
bashgit init
git add .
git commit -m "Initial commit: AI Interface Prototype"

# Create repo on GitHub.com first, then:
git remote add origin https://github.com/YOUR-USERNAME/ai-interface.git
git push -u origin main
2. Deploy to Vercel

Go to https://vercel.com
Sign up/login with GitHub
Click "New Project"
Import your ai-interface repository
Keep default settings (Next.js detected automatically)
Click "Deploy"
Wait 2-3 minutes
Your site is live! 🎉

You'll get a URL like: https://ai-interface-xxxxx.vercel.app

Troubleshooting
Common Issues:
1. "Module not found" errors
bash# Delete node_modules and reinstall
rm -rf node_modules
npm install
2. TypeScript errors

Make sure all imports use @/ for absolute paths
Check that file names match exactly (case-sensitive)

3. Tailwind classes not working

Restart dev server
Check tailwind.config.ts includes all content paths

4. Port 3000 already in use
bash# Use different port
npm run dev -- -p 3001
5. Dark mode not working

Check browser localStorage is enabled
Try clearing browser cache


VS Code Shortcuts (Helpful)

Open File: Ctrl+P / Cmd+P
Search in Files: Ctrl+Shift+F / Cmd+Shift+F
Format Document: Shift+Alt+F / Shift+Option+F
Toggle Terminal: Ctrl+ / Cmd+
Save All: Ctrl+K S / Cmd+K S
Multi-cursor: Alt+Click / Option+Click


Final Checklist
Before submitting:

 All files created and saved
 No TypeScript errors (check bottom status bar)
 Dev server runs without errors
 All features work in browser
 Dark mode toggle works
 Responsive on mobile (use browser DevTools)
 README.md is complete
 Code pushed to GitHub
 Deployed to Vercel
 Figma design linked in README
 Storybook running (if included)


Submission Package
Include:

✅ Live URL (Vercel deployment)
✅ GitHub Repository (public)
✅ README.md (with all sections filled)
✅ Figma Link (design mockup)
✅ Screenshots (at least 3)


Estimated Time Breakdown

Initial Setup: 10 min
Project Creation: 5 min
File Structure: 5 min
Types & Data: 5 min
API Routes: 5 min
Components: 20 min
App Files: 5 min
Testing: 10 min
Storybook (optional): 10 min
Deployment: 10 min
Documentation: 15 min

Total: ~1.5-2 hours

Need Help?
VS Code Issues:

Help → Welcome → Get Started with VS Code

Next.js Issues:

https://nextjs.org/docs

Tailwind Issues:

https://tailwindcss.com/docs

Deployment Issues:

https://vercel.com/docs


Good luck with your assessment! 🚀
