<a id="readme-top"></a>

<!-- PROJECT LOGO -->

<div align="center">
    <!-- TODO -->
    <a href="website url when deployed">
        <img src="/public/images/ABC_logo.jpeg" alt="Logo" width="80" height="80">
    </a>
    <h3 align="center">Dac1c0 frontend repository</h3>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li>
    <a href="#project-structure">Project Structure</a>
    <ul>
      <li><a href="#public">public</a></li>
      <li><a href="#src">src</a></li>
    </ul>
    </li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

This project is a web platform tailored for archaeological teams working at excavation sites. It facilitates the systematic documentation and analysis of discovered artifacts.

The platform supports three distinct user roles:

-   Main Archaeologist
-   Basic Archaeologists
-   Lab Workers.

Basic Archaeologists can upload and view details about artifacts they discover. Lab Workers can select these artifacts for further analysis and upload their findings. The Main Archaeologist oversees the entire process, with access to all uploaded artifacts and analyses, ensuring a comprehensive and organized approach to managing archaeological data.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

The project was built using the following frontend frameworks & tools.

-   [Vite](https://vitejs.dev/)
-   [React](https://react.dev/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

Below you can find instructions for setting up the enviroment and the project and also running it.

### Prerequisites

You will need `node` and `npm` installed globally on your machine.

To check that you have them installed on your system run the following command in the terminal:

```sh
node -v
```

```sh
npm -v
```

### Installation

Follow these steps in order to install and run the project.

1. Clone the repo
    ```sh
    git clone https://github.com/ABC-practica-2024/Frontend-new.git
    ```
2. Install NPM packages
    ```sh
    npm install
    ```
3. Run local develpment server
    ```sh
    npm run dev
    ```
4. Open [http://localhost:5173/](http://localhost:5173/) to view it in your browser.

Additionally, to start the Tailwind CLI build process run

```sh
npx tailwindcss -i ./src/index.css -o ./src/output.css --watch
```

_(Note if the port **5173** is already being used, `Vite` will automatically try the next available port so this may not be the actual port the server ends up listening on.)_

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- PROJECT STRUCTURE -->

## Project Structure

### `public`

Holds static files that are accessible to the public but not directly used in the React/JSX code, such as images, artworks, fonts, and other similar assets.

Files such as `favicon.ico`, `sitemap.xml` and `robots.txt` should be placed here.

### `src`

The `src` directory is the core of the application's codebase, acting as the main workspace for development. It contains all the essential components, logic, and resources that power the application's functionality, maintaining a well-organized and manageable structure.

#### `api`

Should contain modules responsible for handling interactions with external and internal APIs, including functions for sending requests to and receiving data from the server.

#### `assets`

Contains images, icons, stylesheets, and other static resources used within the application.

#### `components`

Includes reusable UI components that can be utilized across different parts of the application, such as buttons, inputs, forms, modals, etc.

#### `contexts`

Contains React context providers that manage and distribute state across the application, ensuring that global data is accessible where needed.

#### `hooks`

Custom React hooks for encapsulating logic that can be shared among components, improving code reuse and separation of concerns.

#### `layouts`

Defines the structural components of the application, such as headers, footers, and layout wrappers, which organize the overall page structure.

#### `pages`

Contains components that represent the main pages of the application, with each component typically corresponding to a route.

#### `utils`

Contains utility functions and helpers that handle common tasks, such as data formatting, calculations, and other general operations, which are utilized across the application.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
