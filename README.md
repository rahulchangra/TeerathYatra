# TeerthYatra - Pilgrimage Planner

TeerthYatra is a web application designed to help users plan their pilgrimages (Teerth Yatra). It provides a platform to explore various pilgrimage sites, plan itineraries, connect with a community of fellow travelers, and find mentors for guidance.

## Key Features

*   **Explore Pilgrimages:** Discover and learn about various pilgrimage sites.
*   **Pilgrimage Planner:** Plan your pilgrimage with a detailed itinerary.
*   **Community Forum:** Connect with other pilgrims, share experiences, and ask questions.
*   **Find Mentors:** Get guidance from experienced travelers and spiritual mentors.
*   **User Authentication:** Secure user accounts for personalized experiences.

## Technologies Used

*   **Frontend:**
    *   React
    *   Vite
    *   TypeScript
    *   Tailwind CSS
    *   shadcn/ui
*   **Backend:**
    *   Supabase

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

*   Node.js and npm (or bun)
*   Supabase account and project setup

### Installation

1.  Clone the repo
    ```sh
    git clone https://github.com/rahulchangra/TeerthYatra.git
    ```
2.  Install NPM packages
    ```sh
    npm install
    ```
3.  Set up your environment variables by creating a `.env` file in the root of the project and adding your Supabase URL and anon key.
    ```
    VITE_SUPABASE_URL=YOUR_SUPABASE_URL
    VITE_SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY
    ```
4.  Run the development server
    ```sh
    npm run dev
    ```

## Folder Structure

```
.
├── public
├── src
│   ├── assets
│   ├── components
│   │   └── ui
│   ├── hooks
│   ├── integrations
│   │   └── supabase
│   ├── lib
│   └── pages
└── supabase
```

## Available Scripts

In the project directory, you can run:

*   `npm run dev`: Runs the app in the development mode.
*   `npm run build`: Builds the app for production.
*   `npm run lint`: Lints the code.
*   `npm run preview`: Previews the production build.
