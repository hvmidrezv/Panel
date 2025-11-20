# User Management Dashboard

A modern, responsive user management dashboard built with React, TypeScript, and TailwindCSS. This application allows you to view, search, and manage users with a clean and intuitive interface.

## ✨ Features

- 📋 **User List View** - Browse all users with a card-based layout
- 🔍 **Search Functionality** - Quickly find users by name
- 👤 **User Details** - View detailed information about each user
- ➕ **Add Users** - Create new user entries with form validation
- ✏️ **Edit Users** - Update existing user information
- 🗑️ **Delete Users** - Remove users from the system
- 🌓 **Theme Toggle** - Switch between light and dark modes
- 📱 **Responsive Design** - Works seamlessly on all devices
- ⚡ **Optimized Performance** - Fast loading with React Query caching

## 🚀 Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **TailwindCSS 4** - Styling
- **React Router** - Client-side routing
- **TanStack Query (React Query)** - Data fetching and caching
- **React Hook Form** - Form management
- **Yup** - Form validation
- **JSONPlaceholder** - Mock API for users

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd panel
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🏗️ Project Structure

```
src/
├── api/              # API calls and hooks
│   ├── users.ts      # User API functions
│   └── hooks/        # Custom hooks
├── components/
│   ├── atoms/        # Basic UI components (icons, buttons)
│   ├── molecules/    # Composite components
│   ├── organisms/    # Complex components
│   ├── pages/        # Page components
│   ├── forms/        # Form components
│   ├── layouts/      # Layout components
│   ├── routes/       # Route configuration
│   └── theme/        # Theme provider
├── types/            # TypeScript type definitions
├── validation/       # Form validation schemas
└── App.tsx           # Main app component
```

## 🎨 Features Overview

### User Management
- View all users in a responsive grid layout
- Click on any user card to view detailed information
- Add new users through a modal form
- Edit existing user information
- Delete users with confirmation

### Search & Filter
- Real-time search functionality
- Filter users by name
- Clear search with one click

### Theme Support
- Light and dark mode support
- Theme preference saved to local storage
- Smooth theme transitions

## 🌐 API

This project uses [JSONPlaceholder](https://jsonplaceholder.typicode.com/) as a mock REST API for demonstration purposes.

Endpoints used:
- `GET /users` - Fetch all users
- `GET /users/:id` - Fetch single user

## 🔧 Configuration

The application uses Vite for development and building. Configuration can be found in:
- `vite.config.ts` - Vite configuration
- `tsconfig.json` - TypeScript configuration
- `eslint.config.js` - ESLint rules
- `tailwind.config.js` - TailwindCSS settings

## 📱 Responsive Design

The dashboard is fully responsive and works on:
- 📱 Mobile devices (320px+)
- 📱 Tablets (768px+)
- 💻 Desktops (1024px+)
- 🖥️ Large screens (1440px+)

## 🎯 Best Practices

- ✅ TypeScript for type safety
- ✅ Component-based architecture (Atomic Design)
- ✅ Custom hooks for reusable logic
- ✅ Form validation with Yup
- ✅ Error handling and loading states
- ✅ Optimized re-renders with React Query
- ✅ Clean and maintainable code structure
