# Troubleshooting Guide

## Site Not Running

If the site is not running, follow these steps:

### 1. Check Node.js Installation

First, verify Node.js is installed:

```bash
node --version
npm --version
```

If these commands don't work, you need to:
- Download and install Node.js from [nodejs.org](https://nodejs.org/)
- Make sure to add Node.js to your system PATH during installation
- Restart your terminal/IDE after installation

### 2. Install Dependencies

Navigate to the project directory and install dependencies:

```bash
cd C:\Users\tyler\Dev\SENTIX
npm install
```

This will create a `node_modules` folder and install all required packages.

### 3. Run Development Server

After dependencies are installed, start the dev server:

```bash
npm run dev
```

The site should be available at `http://localhost:3000`

### 4. Common Issues

#### Port 3000 Already in Use
If port 3000 is occupied, Next.js will try the next available port (3001, 3002, etc.)

#### Module Not Found Errors
- Delete `node_modules` folder and `.next` folder
- Run `npm install` again
- Run `npm run dev`

#### TypeScript Errors
- Make sure all dependencies are installed
- Check that `tsconfig.json` is properly configured
- Restart the TypeScript server in your IDE

#### Build Errors
- Clear the `.next` folder: `rm -rf .next` (or delete it manually)
- Run `npm run build` to see detailed error messages

### 5. Alternative: Use Yarn

If npm doesn't work, try using Yarn:

```bash
yarn install
yarn dev
```

### 6. Check Console Output

When running `npm run dev`, check the terminal output for specific error messages. Common issues include:
- Missing dependencies
- Port conflicts
- Syntax errors in code
- TypeScript compilation errors

