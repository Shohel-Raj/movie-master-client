# 🎬 MovieMaster Pro – Frontend (React + Tailwind CSS + Firebase)

MovieMaster Pro Frontend is a **React.js** single-page application (SPA) for browsing, managing, and organizing movies. It connects to a backend API for full CRUD functionality, user authentication, watchlists, and real-time statistics.

---

## 🚀 Features

- Modern, responsive **React.js SPA**
- **Tailwind CSS** + **DaisyUI** for modern UI/UX
- Dark/Light theme toggle
- User authentication (Email/Password + Google OAuth via Firebase)
- CRUD operations for movies
- Watchlist management
- Movie filtering by genre and rating
- Carousel for featured movies
- Animated statistics section using `react-countup`
- Fully mobile-friendly and responsive design
- Smooth animations with **Framer Motion**
- Notifications using **React Toastify**

---

## 🛠️ Tech Stack & Dependencies

| Package                         | Purpose                                  |
|---------------------------------|-----------------------------------------|
| react                            | Frontend framework                       |
| react-dom                        | DOM rendering                            |
| react-router                     | SPA routing                              |
| tailwindcss                       | Styling & responsive design              |
| @tailwindcss/vite                | Tailwind + Vite integration              |
| daisyui                          | UI components                            |
| firebase                         | Authentication & user management        |
| axios                            | API calls                                |
| react-icons                       | Icons & symbols                          |
| react-countup                     | Animated statistics                       |
| react-intersection-observer      | Trigger animations on scroll             |
| react-toastify                    | Toast notifications                       |
| framer-motion                     | Animations and transitions               |
| react-spinners                    | Loading spinners                          |

---

---

## 🎨 UI Sections

### Home Page
- Hero carousel with featured movies
- Statistics section with animated numbers
- Top-rated movies section
- Genre cards
- About platform section

### Movies Page
- Show all movies
- Filter by genre and rating
- Movie cards with details button

### Movie Details Page
- Complete movie info
- Title, description, genre, cast, rating, release year

### My Collection Page
- Table showing movies added by logged-in user
- Update/Delete actions
- Empty state with button to add movie

### Watchlist Page
- Table showing user’s watchlist
- Remove action
- Empty state with button to explore movies

### Authentication Pages
- Register / Login with validation
- Google OAuth login support

---

## 🔧 API Integration

- All frontend API calls are handled via `/services` folder
- Base URL is set in `.env` as `VITE_API_URL`
- Supported backend endpoints:

### 🧍‍♂️ Users
| Method | Endpoint        | Description                 |
|--------|----------------|-----------------------------|
| PUT    | `/users/:email` | Create or update a user     |
| GET    | `/users/:email` | Get user info by email      |

### 🎥 Movies
| Method | Endpoint               | Description                        |
|--------|-----------------------|------------------------------------|
| POST   | `/movies`             | Add a new movie                     |
| GET    | `/movies`             | Get all movies                      |
| GET    | `/movies/:id`         | Get single movie details            |
| PUT    | `/movies/:id`         | Update a movie                      |
| DELETE | `/movies/:id`         | Delete a movie                      |
| GET    | `/movies/top-rated`   | Get top 6 highest-rated movies     |
| GET    | `/movies/genre/:genre` | Get movies filtered by genre        |

### ⭐ Watchlist
| Method | Endpoint           | Description                  |
|--------|------------------|------------------------------|
| POST   | `/watchlist`       | Add movie to watchlist       |
| GET    | `/watchlist/:email`| Get user’s watchlist         |
| DELETE | `/watchlist/:id`   | Remove movie from watchlist  |

### 📊 Platform Statistics
| Method | Endpoint  | Description                                                   |
|--------|-----------|---------------------------------------------------------------|
| GET    | `/stats`  | Returns total movies, total users, top-rated movie, awards   |

---

## 🌐 Live Demo

[MovieMaster Pro Live Site](https://moviemaster-pro-a10.netlify.app/)
