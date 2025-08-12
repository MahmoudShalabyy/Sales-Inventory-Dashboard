# Sales & Inventory Dashboard

A modern, production-ready React 18 dashboard application built with Vite and styled with TailwindCSS. This comprehensive business dashboard provides sales tracking, inventory management, reporting, and data visualization capabilities.

## 🚀 Features

### Core Functionality
- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Dark/Light Mode**: Toggle between dark and light themes with persistent user preference
- **Multi-page Navigation**: Clean routing between Overview, Sales, Inventory, Reports, and Profile pages
- **Data Visualization**: Interactive charts using Chart.js for sales trends and analytics
- **CSV Export**: Export sales and inventory data to CSV files
- **Real-time Filtering**: Filter data by date range, category, and status
- **Editable Tables**: Inline editing for inventory stock management
- **Form Validation**: Client-side validation for all forms

### Pages & Components
1. **Overview Dashboard**: Key metrics, charts, and recent activity
2. **Sales Management**: Transaction tracking with filtering and export
3. **Inventory Control**: Stock management with editable quantities
4. **Reports Generation**: Configurable reports with multiple export formats
5. **User Profile**: Account settings and personal information management

### Technical Features
- **React 18**: Latest React features with functional components and hooks
- **Vite**: Fast build tool and development server
- **TailwindCSS**: Utility-first CSS framework for rapid styling
- **React Router**: Client-side routing for single-page application
- **Chart.js**: Beautiful, responsive charts and data visualization
- **Lucide Icons**: Modern, consistent icon library
- **TypeScript Ready**: Structured for easy TypeScript migration

## 🛠️ Technology Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: TailwindCSS
- **Routing**: React Router DOM
- **Charts**: Chart.js with react-chartjs-2
- **Icons**: Lucide React
- **Data Export**: PapaParse for CSV functionality
- **Package Manager**: pnpm (also compatible with npm/yarn)

## 📦 Installation & Setup

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm/yarn

### Quick Start

1. **Clone or extract the project**
   ```bash
   cd sales-inventory-dashboard
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Start development server**
   ```bash
   pnpm run dev
   # or
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
pnpm run build
# or
npm run build
```

The production build will be created in the `dist/` directory.

### Preview Production Build

```bash
pnpm run preview
# or
npm run preview
```

## 📁 Project Structure

```
sales-inventory-dashboard/
├── public/                 # Static assets
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── Charts/       # Chart components
│   │   ├── Layout/       # Layout components (Header, Sidebar, etc.)
│   │   └── ui/           # Base UI components (Button, Card, etc.)
│   ├── contexts/         # React contexts (Theme, etc.)
│   ├── data/            # Mock data and constants
│   ├── pages/           # Page components
│   ├── utils/           # Utility functions (CSV export, validation)
│   ├── App.jsx          # Main application component
│   ├── main.jsx         # Application entry point
│   └── index.css        # Global styles and Tailwind imports
├── dist/                # Production build output
├── package.json         # Dependencies and scripts
├── tailwind.config.js   # TailwindCSS configuration
├── vite.config.js       # Vite configuration
└── README.md           # This file
```

## 🎨 Customization

### Styling
- **Colors**: Modify the color palette in `tailwind.config.js`
- **Components**: Update component styles in individual component files
- **Global Styles**: Edit `src/index.css` for global styling changes

### Data
- **Mock Data**: Update `src/data/mockData.js` to change sample data
- **API Integration**: Replace mock data with real API calls in component files

### Features
- **Add New Pages**: Create components in `src/pages/` and add routes in `App.jsx`
- **New Charts**: Add chart components in `src/components/Charts/`
- **Additional Exports**: Extend export functionality in `src/utils/csvExport.js`

## 📊 Data Management

The application currently uses mock data for demonstration purposes. To integrate with a real backend:

1. **Replace Mock Data**: Update API calls in page components
2. **Add State Management**: Consider Redux or Zustand for complex state
3. **Error Handling**: Implement proper error boundaries and loading states
4. **Authentication**: Add user authentication and authorization

## 🔧 Available Scripts

- `pnpm run dev` - Start development server
- `pnpm run build` - Build for production
- `pnpm run preview` - Preview production build
- `pnpm run lint` - Run ESLint (if configured)

## 🌟 Key Features Demonstration

### Dashboard Overview
- Real-time metrics display
- Interactive sales trend charts
- Category-wise sales breakdown
- Recent activity feed

### Sales Management
- Comprehensive transaction table
- Advanced filtering options
- CSV export functionality
- Status-based color coding

### Inventory Control
- Live stock level monitoring
- Inline editing capabilities
- Low stock alerts
- Supplier information tracking

### Responsive Design
- Mobile-first approach
- Flexible grid layouts
- Touch-friendly interactions
- Optimized for all screen sizes

## 🚀 Deployment Options

### Static Hosting (Recommended)
- **Vercel**: `vercel --prod`
- **Netlify**: Drag and drop `dist/` folder
- **GitHub Pages**: Deploy `dist/` contents

### Traditional Hosting
- Upload `dist/` folder contents to web server
- Configure server for SPA routing (redirect all routes to index.html)

## 🤝 Contributing

This is a portfolio project, but contributions are welcome:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📝 License

This project is created for portfolio and educational purposes. Feel free to use it as a reference or starting point for your own projects.

## 🔮 Future Enhancements

- **Real-time Updates**: WebSocket integration for live data
- **Advanced Analytics**: More detailed reporting and insights
- **User Management**: Multi-user support with role-based access
- **Mobile App**: React Native version for mobile platforms
- **API Integration**: Backend service integration
- **Testing**: Comprehensive unit and integration tests

## 📞 Support

For questions or issues related to this project, please refer to the code comments and documentation within the source files.

---

**Built with ❤️ using React 18, Vite, and TailwindCSS**

