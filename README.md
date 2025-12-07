# Acharya-Ravi

A modern web application for Vastu Shastra consultation, design services, horoscope readings, and remedies guidance.

## About

Acharya-Ravi is a comprehensive platform dedicated to providing professional Vastu Shastra services. The website offers consultancy, architectural design solutions, personalized horoscope analysis, and Vastu remedies to help clients create harmonious and auspicious living and working spaces.

## Features

- **Consultancy Services**: Professional guidance on Vastu principles and their application
- **Design Services**: Expert architectural and interior design solutions based on Vastu Shastra
- **Horoscope Services**: Personalized astrological readings and predictions
- **Remedies**: Practical Vastu remedies to improve wellness and prosperity
- **Contact & Booking**: Easy-to-use consultation booking system
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices

## Tech Stack

- **Frontend**: React 18+ with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Form Management**: React Hook Form
- **Routing**: React Router
- **State Management**: TanStack React Query

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or bun package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/cvm1912/Acharya-Ravi.git
cd Acharya-Ravi
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start the development server with hot reload
- `npm run build` - Build the project for production
- `npm run build:dev` - Build the project in development mode
- `npm run lint` - Run ESLint to check code quality
- `npm run preview` - Preview the production build

## Project Structure

```
src/
├── components/
│   ├── layout/        # Layout components (Navbar, Footer, etc.)
│   ├── sections/      # Page sections (Hero, About, Benefits, etc.)
│   ├── ui/            # Reusable UI components
│   └── NavLink.tsx    # Navigation link component
├── pages/             # Page components
├── hooks/             # Custom React hooks
├── lib/               # Utility functions
└── App.tsx            # Main app component
```

## Pages

- **Home (/)** - Landing page with hero section and service overview
- **Consultancy (/consultancy)** - Consultancy services information
- **Design (/design)** - Design services portfolio
- **Horoscope (/horoscope)** - Horoscope services
- **Remedies (/remedies)** - Vastu remedies and solutions
- **Contact (/contact)** - Contact form and information

## Development

### Code Quality

- ESLint is configured for code quality checks
- Run `npm run lint` to check for linting issues

### Building

- Development build: `npm run build:dev`
- Production build: `npm run build`

## Browser Support

The application supports all modern browsers including:
- Chrome
- Firefox
- Safari
- Edge

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is private and maintained by the Acharya-Ravi team.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
