# La Bella Vita - Italian Restaurant Website

A modern, elegant website for La Bella Vita, an authentic Italian restaurant in Chicago. This project is built with Next.js, TypeScript, Tailwind CSS, and other modern technologies.

## Features

- **Beautiful, Responsive Design**: Looks great on all devices from mobile to desktop
- **Online Menu**: Showcase the restaurant's dishes with beautiful images and descriptions
- **Reservation System**: Allow customers to book tables online
- **About Us Page**: Share the restaurant's story and passion for Italian cuisine
- **Online Ordering**: Enable customers to order food for pickup
- **Blog**: Share recipes, news, and special events
- **SEO Optimized**: Help customers find the restaurant online
- **Admin Dashboard**: Powerful management system for your restaurant

## Admin Portal

The website includes a comprehensive admin portal that allows you to manage all aspects of your restaurant's online presence without any technical knowledge.

### Admin Features

- **Dashboard Overview**: Get a quick snapshot of your restaurant's performance with key metrics
- **Reservation Management**: View, confirm, modify, or cancel reservations
- **Menu Management**: Update menu items, prices, and availability
- **Order Processing**: Track and manage online orders
- **Content Management**: Update website content, blog posts, and images
- **User Management**: Control staff access with different permission levels

### Admin Access

Access the admin portal at: `/admin` or click the "Login" link in the website footer.

Default login credentials:

| Role | Email | Password |
|------|-------|----------|
| Admin | admin@labellavita.com | admin123 |
| Manager | manager@labellavita.com | manager123 |

**Important**: Please change these default passwords immediately after your first login for security purposes.

### User Roles

- **Admin**: Full access to all features and settings
- **Manager**: Access to day-to-day operations (reservations, orders, menu) but not system settings

## Tech Stack

- **Next.js**: React framework for server-rendered applications
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **React Hook Form**: Form validation and handling
- **React Datepicker**: Date selection for reservations
- **React Icons**: Beautiful icons

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/labellavita.git
   cd labellavita
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

- `src/app`: Next.js app router pages
- `src/components`: React components
  - `layout`: Layout components (Header, Footer)
  - `sections`: Page sections (Hero, About, etc.)
  - `ui`: Reusable UI components
  - `forms`: Form components
- `src/data`: Mock data for the frontend
- `src/types`: TypeScript type definitions
- `public`: Static assets

## Customization

### Changing Colors

The color scheme can be customized in the `tailwind.config.ts` file. The current theme uses:

- Primary: Warm brown tones
- Olive: Green accents
- Tomato: Red accents

### Adding Menu Items

Add new menu items in the `src/data/menuData.ts` file.

### Updating Restaurant Information

Update restaurant details in the `src/data/restaurantData.ts` file.

## Deployment

This project can be easily deployed to Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyourusername%2Flabellavita)

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Images: Placeholder images used for demonstration purposes
- Fonts: Playfair Display, Montserrat, and Italianno from Google Fonts
