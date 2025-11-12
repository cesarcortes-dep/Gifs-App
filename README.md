# GIFs App

A modern GIF search and trending application built with Angular 20, featuring a clean dashboard interface with Tailwind CSS styling.

## 🚀 Features

- **Dashboard Layout**: Sleek sidebar navigation with responsive design
- **Trending GIFs**: Browse popular GIFs from Giphy
- **GIF Search**: Search for GIFs by keywords
- **Component Communication**: Parent-child component interaction using @Input decorators
- **Lazy Loading**: Route-based lazy loading for optimal performance
- **Modern Angular**: Built with standalone components and latest Angular features

## 🛠️ Tech Stack

- **Angular 20.3** - Latest Angular framework with standalone components
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Font Awesome** - Icon library
- **RxJS** - Reactive programming
- **Angular Router** - Client-side routing with lazy loading

## 📁 Project Structure

```
src/app/
├── gifs/
│   ├── components/
│   │   ├── gift-list/          # Grid display of GIFs
│   │   │   └── gift-list-item/ # Individual GIF card
│   │   └── side-menu/          # Navigation sidebar
│   │       ├── side-menu-header/
│   │       └── side-menu-options/
│   ├── pages/
│   │   ├── dashboard-page/     # Main dashboard layout
│   │   ├── trending-page/      # Trending GIFs page
│   │   └── search-page/        # Search functionality
│   ├── services/
│   │   └── gifs.service.ts     # Giphy API integration
│   ├── interfaces/             # TypeScript interfaces
│   └── mapper/                 # Data transformation utilities
└── app.routes.ts               # Application routing
```

## 🎯 Key Concepts Practiced

### Component Communication

- **@Input() decorators** for passing data from parent to child components
- Property binding with `[property]="value"` syntax
- Modern `@for` control flow for iterating arrays

### Routing

- Lazy loading components with `loadComponent()`
- Child routes configuration
- `RouterLink` and `RouterLinkActive` directives
- Route navigation and active state management

## 🖥️ Development Server

To start a local development server, run:

```bash
ng serve
```

Or use npm:

```bash
npm start
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/cesarcortes-dep/Gifs-App.git
cd gifs-app
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
ng serve
```

## 🎨 Styling

The project uses Tailwind CSS for styling with a custom configuration:

- **Dark sidebar theme** with gray-900 background
- **Responsive grid layouts** for GIF display
- **Hover effects** and smooth transitions
- **Custom color scheme** with blue accents

## 🧪 Testing

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner:

```bash
ng test
```

## 🏗️ Building

To build the project for production:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## 📱 Routes

- `/` - Redirects to dashboard
- `/dashboard` - Main dashboard layout
  - `/dashboard/trending` - Display trending GIFs (default)
  - `/dashboard/search` - Search for GIFs

## 🔧 Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## 📚 Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## 👨‍💻 Author

**César Cortés**

- GitHub: [@cesarcortes-dep](https://github.com/cesarcortes-dep)

## 📄 License

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.3.5.
