# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.




# Meetup App

A React-based web application for discovering and joining local groups and events, built with Vite and React Router. Users can sign up, sign in (including Google authentication), browse groups and events, and manage their profiles.

## Table of Contents
- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features
- **User Authentication**: Sign up, sign in, and Google OAuth integration.
- **Group Management**: View groups, group details, and associated events.
- **Event Browsing**: Discover events with details like date, location, and description.
- **Private Routes**: Protect group and event pages for authenticated users.
- **Calendar**: Interactive calendar to view and select dates.
- **Responsive UI**: Navbar, footer, and loading components for a seamless experience.

## Technologies
- **Frontend**: React, React Router, Axios
- **Styling**: CSS (custom styles for components and pages)
- **Build Tool**: Vite
- **Backend API**: Hosted at `https://meetup-backend-8rsw.onrender.com`
- **Dependencies**: date-fns for calendar functionality

## Installation
1. **Clone the repository**:
   ```bash
   git clone https://github.com/Narendra5305/meetup_Frontend.git
   cd meetup-app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment**:
   - Ensure the backend API (`https://meetup-backend-8rsw.onrender.com`) is accessible.
   - No additional `.env` configuration is required for the provided code.

4. **Run the development server**:
   ```bash
   npm run dev
   ```
   The app will be available at `https://meetup-clone-1.netlify.app/` (or another port if specified).

## Usage
- **Home Page**: View featured groups, events, and a calendar.
- **Sign Up/Sign In**: Create an account or log in with email/password or Google.
- **Groups**: Browse all groups or view details for a specific group.
- **Events**: Explore events organized by groups, with private access for logged-in users.
- **Logout**: Clear local storage and redirect to the sign-in page.

## Project Structure
```
meetup-app/
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── component/
│   │   ├── Calendar.jsx
│   │   ├── Footbar.jsx
│   │   ├── Loading.jsx
│   │   └── Navbar.jsx
│   ├── pages/
│   │   ├── Events.jsx
│   │   ├── GroupDetails.jsx
│   │   ├── GroupPage.jsx
│   │   ├── Home.jsx
│   │   ├── Signin.jsx
│   │   ├── Signup.jsx
│   │   ├── SigninSuccessfull.jsx
│   │   ├── EventDetailPage.jsx
│   │   └── PrivateRoute.jsx
│   ├── componentCss/
│   │   ├── calendar.css
│   │   ├── footbar.css
│   │   ├── loading.css
│   │   └── navbar.css
│   ├── pageCss/
│   │   ├── events.css
│   │   ├── groupDetails.css
│   │   ├── groupPage.css
│   │   ├── home.css
│   │   ├── signin.css
│   │   └── signup.css
│   ├── App.jsx
│   ├── App.css
│   └── vite.svg
├── public/
├── package.json
└── README.md
```

## API Endpoints
The app interacts with the following backend endpoints:

### Auth
- `POST /users/signup`: Register a new user.
- `POST /users/signin`: Log in with email and password.
- `GET /users/google`: Google OAuth login.

### Groups
- `GET /groups`: Fetch all groups.

### Events
- `GET /events`: Fetch all events.

Backend is hosted at `https://meetup-backend-8rsw.onrender.com`.

## Contributing
1. Fork the repository.
2. Create a feature branch (`git checkout -b feature-name`).
3. Commit changes (`git commit -m "Add feature"`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Built with ❤️ by Narendra Singh. For issues or suggestions, open a ticket on the [GitHub repository](https://github.com/Narendra5305/meetup_Frontend).
