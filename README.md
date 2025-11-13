# GIFs App

A modern GIF search and trending application built with Angular 20, featuring a clean dashboard interface with Tailwind CSS styling and Giphy API integration.

## 🚀 Features

- **Dashboard Layout**: Sleek sidebar navigation with responsive design
- **Trending GIFs**: Browse popular GIFs from Giphy
- **GIF Search**: Search for GIFs by keywords with persistent history
- **Search History**: Automatic localStorage persistence of search results
- **Component Communication**: Parent-child component interaction using @Input decorators
- **Lazy Loading**: Route-based lazy loading for optimal performance
- **Modern Angular**: Built with standalone components, signals, and latest Angular features

## 🛠️ Tech Stack

- **Angular 20.3** - Latest Angular framework with standalone components
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Font Awesome** - Icon library
- **RxJS** - Reactive programming
- **Angular Router** - Client-side routing with lazy loading
- **Giphy API** - GIF data provider

## 🎯 Key Concepts

### Angular Features

- **Signals**: Reactive state management with computed values
- **Standalone Components**: Modern component architecture
- **Lazy Loading**: Performance optimization with route-based code splitting
- **HttpClient**: API integration with RxJS operators
- **LocalStorage**: Persistent data storage

### Component Communication

- **@Input() decorators** for passing data from parent to child components
- **Property binding** with `[property]="value"` syntax
- **Modern control flow** with `@for` and `@if` directives

### RxJS Patterns

- **Observable streams** for async data handling
- **Operators**: `map()`, `tap()`, and `pipe()` for data transformation
- **HTTP requests** with proper error handling

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

3. Configure environment variables (create your own Giphy API key at https://developers.giphy.com/)

4. Start the development server:

```bash
ng serve
```

5. Open your browser and navigate to `http://localhost:4200/`

## 🖥️ Development

To start a local development server:

```bash
ng serve
```

Or use npm:

```bash
npm start
```

The application will automatically reload whenever you modify any source files.

## 🏗️ Build

To build the project for production:

```bash
ng build
```

Build artifacts will be stored in the `dist/` directory, optimized for performance and speed.

## 👨‍💻 Author

**César Cortés**

- GitHub: [@cesarcortes-dep](https://github.com/cesarcortes-dep)
