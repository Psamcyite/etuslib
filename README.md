# EtusLib

EtusLib is a comprehensive library management platform designed to make managing and accessing library resources seamless for both users and administrators. Built as a monorepo, it integrates both the User Platform and Admin Dashboard for streamlined development and deployment.

---

## Features

### User Platform
- **SignUp & SignIn**: Secure user registration and login.
- **Home**: Browse the latest and featured books.
- **Search**: Find books by title, author, or category.
- **Profile**: Manage user details and view borrowed books.
- **Book Details**: View detailed information about books.
- **Search Empty State**: Display a friendly message when no search results are found.
- **Book Request Modal**: Request books not currently available in the library.

### Admin Dashboard
- **All Users**: View and manage user accounts.
- **Home Admin Dashboard**: Overview of library stats and activity.
- **Empty State Admin Dashboard**: Display a message when no data is available.
- **All Books**: Manage the library’s collection.
- **Book Details**: View and edit detailed information about books.
- **Edit Book Details**: Update book information in the library.
- **Account Requests**: Manage user account creation requests.
  - **Deny**: Reject account requests.
  - **Accept**: Approve account requests.
- **Borrow Requests**: Handle user requests to borrow books.
  - **Deny**: Reject borrow requests.
  - **Accept**: Approve borrow requests.

---

## Tech Stack

### Frameworks & Libraries
- **Next.js**: Framework for server-side rendering and static site generation.
- **TailwindCSS**: Utility-first CSS framework for fast and responsive UI design.
- **Shadcn/UI**: Pre-built and customizable UI components.
- **React Hook Form**: Simplified form handling and validation.

### Backend
- **NEON (PostgreSQL)**: Reliable and scalable database for storing application data.
- **Drizzle**: Type-safe ORM for database management.

### Utilities
- **Imagekit**: For image storage and optimization.
- **Upstash**: Serverless data storage for caching and queues.

---

## Monorepo Structure

This project uses a monorepo setup to combine the User Platform and Admin Dashboard, ensuring better code sharing and collaboration across the application.

### Structure:
```
/etuslib
├── /apps
│   ├── user-platform    # User-facing application
│   └── admin-dashboard  # Admin-facing application
├── /packages
│   ├── ui-components    # Shared UI components
│   ├── utils            # Shared utility functions
│   └── hooks            # Shared React hooks
```

---

## Installation

### Prerequisites
- Node.js 16+
- Yarn or pnpm (preferred package managers)

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/Psamcyite/etuslib.git
   ```
2. Navigate to the project directory:
   ```bash
   cd etuslib
   ```
3. Install dependencies:
   ```bash
   yarn install
   ```
4. Start the development server:
   ```bash
   yarn dev
   ```

---

## Contribution

We welcome contributions! Feel free to submit issues or pull requests to improve the platform. Follow the contribution guidelines outlined in `CONTRIBUTING.md`.

---

## License

This project is licensed under the MIT License. See `LICENSE` for more details.

---

## Acknowledgments

Special thanks to the open-source community for the amazing tools and libraries used in this project.

