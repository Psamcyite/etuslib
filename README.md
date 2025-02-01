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

## Root Directory
```
etuslib/
│── .gitattributes                 # Git attributes file
│── .gitignore                     # Git ignore file
│── LICENSE                        # Project license
│── README.md                      # Project documentation
│── auth.ts                         # Authentication functions
│── components.json                 # Components metadata
│── drizzle.config.ts                # Drizzle configuration
│── dummybooks.json                  # Sample book data
│── eslint.config.mjs                # ESLint configuration
│── jest.config.ts                    # Jest testing configuration
│── jest.setup.ts                     # Jest setup file
│── middleware.ts                      # Middleware configuration
│── next-env.d.ts                      # Next.js environment types
│── next.config.ts                      # Next.js configuration
│── package.json                        # Project dependencies and scripts
│── postcss.config.mjs                    # PostCSS configuration
```

## Configuration and Workflows
```
│── .github/
│   ├── workflows/
│   │   ├── CODEOWNERS             # Code owners file
│   │   ├── etusFlow.yml           # CI/CD workflow
│   │   ├── gitbot.yml             # Git automation
│   │   ├── integration.yml        # Integration workflow
```

## Source Code
```
│── app/
│   ├── (auth)/
│   │   ├── layout.tsx             # Authentication layout
│   │   ├── sign-in/page.tsx       # Sign-in page
│   │   ├── sign-up/page.tsx       # Sign-up page
│   ├── (root)/
│   │   ├── books/[id]/page.tsx    # Individual book page
│   │   ├── layout.tsx             # Root layout
│   │   ├── my-profile/page.tsx    # User profile page
│   │   ├── page.tsx               # Home page
│   ├── admin/
│   │   ├── account-requests/page.tsx  # Admin account requests
│   │   ├── book-requests/
│   │   │   ├── page.tsx           # Book requests list
│   │   │   ├── request/page.tsx   # Individual request page
│   │   ├── books/
│   │   │   ├── new/page.tsx       # Add new book page
│   │   │   ├── page.tsx           # Books list
│   │   ├── layout.tsx             # Admin layout
│   │   ├── page.tsx               # Admin dashboard
│   │   ├── users/page.tsx         # User management
│   ├── api/
│   │   ├── admin/borrow-requests/[id]/route.ts   # Borrow request API
│   │   ├── auth/[...nextauth]/route.ts          # Authentication API
│   │   ├── books/route.ts                        # Books API
│   │   ├── borrow/route.ts                       # Borrow API
│   │   ├── imagekit/route.ts                     # ImageKit API
│   │   ├── workflows/onboarding/route.ts        # Onboarding workflow API
│   ├── fonts/
│   │   ├── BebasNeue-Regular.ttf                 # Font file
│   │   ├── IBMPlexSans-Bold.ttf                  # Font file
│   ├── globals.css                               # Global styles
│   ├── layout.tsx                                # Main layout
│   ├── too-fast/page.tsx                         # Speed warning page
```

## Components
```
│── components/
│   ├── AuthForm.tsx               # Authentication form component
│   ├── BackButton.tsx             # Back button component
│   ├── BookCard.tsx               # Book card component
│   ├── BookCover.tsx              # Book cover component
│   ├── admin/
│   │   ├── BorrowRequests.tsx     # Borrow requests component
│   │   ├── ColorPicker.tsx        # Color picker component
│   │   ├── Header.tsx             # Admin header component
│   │   ├── Sidebar.tsx            # Admin sidebar component
│   │   ├── forms/
│   │   │   ├── BookForm.tsx      # Book form component
│   ├── ui/
│   │   ├── button.tsx             # UI Button component
│   │   ├── dialog.tsx             # UI Dialog component
│   │   ├── input.tsx              # UI Input component
│   │   ├── toast.tsx              # UI Toast notifications
```

## Database
```
│── database/
│   ├── drizzle.ts                 # Drizzle ORM setup
│   ├── redis.ts                   # Redis setup
│   ├── schema.ts                  # Database schema
│   ├── seed.ts                    # Database seeding script
```

## Migrations
```
│── migrations/
│   ├── 0000_tearful_romulus.sql   # Initial migration
│   ├── meta/
│   │   ├── 0000_snapshot.json     # Migration snapshot
│   │   ├── _journal.json          # Migration journal
```

## Hooks
```
│── hooks/
│   ├── use-toast.ts               # Toast hook
```

## Libraries
```
│── lib/
│   ├── actions/
│   │   ├── auth.ts                # Authentication actions
│   │   ├── book.ts                # Book actions
│   ├── admin/actions/book.ts      # Admin book actions
│   ├── config.ts                  # Project configuration
│   ├── db/route.ts                # Database route
│   ├── ratelimit.ts               # Rate limiting logic
│   ├── utils.ts                   # Utility functions
│   ├── validations.ts             # Validation logic
│   ├── workflow.ts                # Workflow handling
```

## Public Assets
```
│── public/
│   ├── assets/
│   │   ├── bilder/
│   │   │   ├── bilder1.jpg        # Image assets
│   │   │   ├── bilder10.png       # Image assets
│   │   ├── icons/
│   │   │   ├── cal.png            # Calendar icon
│   │   │   ├── dashboard.png      # Dashboard icon
│   │   │   ├── helpdesk.svg       # Helpdesk icon
```

## Tests
```
│── __test__/
│   ├── sum.test.ts                # Unit test file
│   ├── sum.ts                     # Sum function file
```

## Coverage Reports
```
│── coverage/
│   ├── clover.xml                 # Clover coverage report
│   ├── coverage-final.json         # Final coverage report
│   ├── lcov-report/
│   │   ├── index.html              # HTML coverage report
│   │   ├── base.css                # Report styles
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

