# Real Estate Web Application

A modern real estate web application built with React, TypeScript, and Tailwind CSS. The application features a beautiful UI with property listings, search functionality, and responsive design.

## Live Demo

Visit the live application at: [Real Estate Web App](https://real-web-app.vercel.app) (Coming soon)

## Features

- Modern and responsive design
- Property search with filters
- Featured property listings
- Property cards with detailed information
- Contact forms and newsletter subscription
- Indian currency format support
- Mobile-friendly interface

## Tech Stack

- React
- TypeScript
- Tailwind CSS
- Vite
- Shadcn/ui Components
- Lucide Icons

## Running Locally

### Prerequisites

1. Install Node.js:
   - Download and install from [Node.js official website](https://nodejs.org/)
   - Recommended version: 18.x or later

2. Verify installation:
```bash
node --version
npm --version
```

### Installation Steps

1. Clone the repository:
```bash
git clone https://github.com/abdullahjamal928/Real_WebApp.git
```

2. Navigate to the project directory:
```bash
cd Real_WebApp
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm run dev
```

5. View the application:
   - Once the development server starts, it will show you the local URL (usually `http://localhost:5173`)
   - Open this URL in your browser
   - The page will automatically reload if you make changes to the code

## Deployment

### Option 1: Deploy to Vercel (Recommended)

1. Fork this repository
2. Sign up on [Vercel](https://vercel.com)
3. Import your forked repository
4. Vercel will automatically detect the React application and deploy it
5. Once deployed, you'll get a unique URL to share

### Option 2: Build for Production

If you want to deploy to your own server:

1. Create a production build:
```bash
npm run build
```

2. The build files will be in the `dist` directory
3. Deploy these files to any static hosting service

## Project Structure

```
src/
  ├── components/        # React components
  ├── styles/           # Global styles
  ├── lib/              # Utility functions
  ├── types/            # TypeScript types
  └── App.tsx           # Main application component
```

## Sharing the Application

1. **Share the Live Demo**: 
   - Once deployed, share the Vercel URL with anyone
   - They can access it directly from their browser without any setup

2. **For Developers**:
   - Share the GitHub repository URL
   - They can follow the "Running Locally" instructions above

3. **For Local Network Testing**:
   - When running `npm run dev`, you'll also get a network URL
   - Share this URL with devices on the same network

## Troubleshooting

If you encounter any issues:

1. Make sure Node.js is properly installed
2. Clear npm cache: `npm cache clean --force`
3. Delete `node_modules` and run `npm install` again
4. Check if all ports are available (default: 5173)

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
