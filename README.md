# Personal Website

![Readme Header](./docs/media/readme.png "michalzajac.dev header")

![Vercel](https://vercelbadge.vercel.app/api/Michal99Zajac/www)

## Project Description
`www` is a sophisticated frontend application designed specifically for hosting my CV online. Built with Next.js, it incorporates the latest web development practices to ensure top-notch performance, scalability, and SEO capabilities. The site, accessible at [michalzajac.dev](https://michalzajac.dev), leverages GraphQL for efficient data management, React for dynamic user interfaces, and Tailwind CSS for intuitive and responsive design. This project aims to provide a comprehensive overview of my professional background, skills, and projects in a clean, accessible format.

## Prerequisites
Before you start, ensure you have the following installed:
- Node.js (recommended version as specified in `.nvmrc`).
- npm (or yarn if you prefer, though npm commands are provided).

## Installation

To get the project up and running on your local machine, follow these steps:
1. Clone the repository:
   ```bash
   git clone https://github.com/Michal99Zajac/www.git
   ```
2. Navigate to the project directory:
   ```bash
   cd www
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## How to Build the Project
To build the project for production, run:
```bash
npm run build
```
This command compiles your application and optimizes it for performance. The build artifacts will be stored in the `.next/` directory.

## How to Run the Project
- **Development Mode**: Start the development server with hot reload at `localhost:3000`:

  ```bash
  npm run dev
  ```

- **Production Mode**: After building the project, start the Next.js application in production mode with:

  ```bash
  npm start
  ```

## Code Style Conventions
This project enforces code style and quality through several tools:
- **ESLint** for JavaScript and TypeScript linting, configured in `.eslintrc.json`.
- **Prettier** for code formatting, with settings in `.prettierrc`.
- **Stylelint** for CSS styling rules, configured in `.stylelintrc`.
- **lint-staged and Husky** for pre-commit hooks to ensure code and commit message quality.

## GraphQL Code Generation
To generate TypeScript types for GraphQL queries and mutations, run:

```bash
npm run generate:gql
```

This ensures type safety and seamless integration with Apollo Client.

## License
This project is open source and available under the [MIT License](LICENSE).

