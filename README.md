# WeatherPilot AI

WeatherPilot AI is a modern weather intelligence dashboard built with React, TypeScript, and the WeatherAI API. The application transforms raw weather data into actionable insights through intelligent scoring, visual analytics, and AI-powered weather summaries.

## Live Demo

[Add Deployment URL]

## GitHub Repository

[Add GitHub Repository URL]

---

## Overview

WeatherPilot AI is more than a weather application. Instead of simply displaying forecasts, it analyzes weather conditions and generates decision-support metrics to help users understand how weather impacts travel, outdoor activities, and farming conditions.

The application consumes multiple WeatherAI endpoints and presents the information through an intuitive and responsive user interface.

---

## Features

### Current Weather

- Real-time weather conditions
- Temperature display
- Wind speed and direction
- Weather condition icons
- Last updated timestamp

### Hourly Forecast

- Hour-by-hour forecast visualization
- Interactive temperature trend charts
- Weather condition tracking
- Precipitation probability analysis

### Daily Forecast

- Multi-day weather outlook
- Sunrise and sunset times
- Daily temperature ranges
- Rainfall predictions
- Wind forecasts
- Weather condition indicators

### Weather Intelligence

#### Travel Score

Calculates the suitability of weather conditions for travel and outdoor activities.

Factors considered:

- Temperature
- Wind speed
- Rain probability

#### Farming Score

Analyzes weather conditions for agricultural activities.

Factors considered:

- Humidity
- Rainfall
- Temperature

#### Risk Score

Provides a weather risk assessment based on:

- Wind gusts
- Rain probability
- Weather severity

### AI Weather Insights

Automatically generates weather recommendations and alerts based on forecast conditions.

Examples:

- Heavy rainfall warnings
- Outdoor activity recommendations
- Travel advisories
- Agricultural recommendations

### Search History

- Recent location searches
- Local storage persistence
- Quick location recall

### Responsive Design

- Desktop optimized
- Tablet optimized
- Mobile friendly

### Dark Mode Ready

Designed with support for future dark mode enhancements.

---

## Technology Stack

### Frontend

- React 19
- TypeScript
- Vite

### State Management

- React Hooks
- React Query

### API Communication

- Axios

### Data Visualization

- Recharts

### Styling

- Tailwind CSS

### Icons

- React Icons

### Geocoding

- OpenStreetMap Nominatim API

### Weather Provider

- WeatherAI API

---

## WeatherAI Endpoints Used

### Current Weather

```http
GET /v1/current
```

Returns current weather conditions.

### Hourly Forecast

```http
GET /v1/hourly
```

Returns hourly forecast information.

### Daily Forecast

```http
GET /v1/daily
```

Returns daily forecast information.

---

## Project Structure

```text
src
│
├── api
│   ├── axios.ts
│   └── weatherApi.ts
│
├── components
│   ├── CurrentWeatherCard.tsx
│   ├── DailyForecastCards.tsx
│   ├── FarmingScoreCard.tsx
│   ├── HourlyChart.tsx
│   ├── RiskScoreCard.tsx
│   ├── SearchBar.tsx
│   ├── SearchHistory.tsx
│   ├── TravelScoreCard.tsx
│   └── WeatherInsight.tsx
│
├── pages
│   └── Home.tsx
│
├── services
│   ├── geocodingService.ts
│   └── weatherService.ts
│
├── types
│   └── weather.ts
│
├── utils
│   ├── insights.ts
│
├── App.tsx
├── main.tsx
└── index.css
```

---

## Architecture

The application follows a layered architecture that separates concerns and improves maintainability.

### Presentation Layer

Responsible for rendering UI components.

```text
Components
Pages
Layouts
```

### Service Layer

Responsible for API communication.

```text
weatherService.ts
geocodingService.ts
```

### Business Logic Layer

Contains weather calculations and weather insights.

```text
scores.ts
insights.ts
```

### Data Layer

Defines API contracts and TypeScript models.

```text
weather.ts
```

---

## Weather Intelligence Engine

### Travel Score Algorithm

Evaluates travel conditions using:

```text
Temperature
Rain Probability
Wind Speed
```

### Farming Score Algorithm

Evaluates agricultural suitability using:

```text
Humidity
Rainfall
Temperature
```

### Risk Score Algorithm

Evaluates weather severity using:

```text
Rain Probability
Wind Gusts
UV Exposure
```

---

## Design Decisions

Instead of creating a basic weather dashboard, WeatherPilot AI introduces an intelligence layer that transforms weather data into actionable insights.

### Why This Approach?

Most weather applications display raw weather information. While useful, users still need to interpret the data themselves.

WeatherPilot AI addresses this by:

- Converting weather conditions into simple scores
- Generating insights and recommendations
- Highlighting potential risks
- Providing decision-support metrics

This demonstrates how weather data can be transformed into business value rather than simply visualized.

### Architectural Decisions

- **TypeScript** for type safety and maintainability.
- **Component-based architecture** for scalability and reusability.
- **Service layer abstraction** to isolate API communication.
- **Utility layer** for business logic and scoring algorithms.
- **Local storage** for search history persistence.
- **Responsive-first design** for accessibility across devices.

---

## Environment Variables

Create a `.env` file in the root directory.

```env
VITE_WEATHER_AI_API_KEY=your_api_key_here
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/yourusername/weatherpilot-ai.git
```

### Navigate To Project

```bash
cd weatherpilot-ai
```

### Install Dependencies

```bash
npm install
```

### Configure Environment Variables

Create:

```bash
.env
```

Add:

```env
VITE_WEATHER_AI_API_KEY=your_api_key_here
```

### Start Development Server

```bash
npm run dev
```

Application runs on:

```text
http://localhost:5173
```

---

## Production Build

Generate production build:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

---

## Future Improvements

### Planned Features

- Weather alerts and notifications
- Progressive Web App (PWA) support
- Offline mode
- Weather comparison between cities
- Export reports to PDF
- Weather map integration
- Historical weather trends
- User accounts and preferences
- Advanced AI recommendations

---

## Performance Considerations

- Lazy-loaded components
- Cached API responses
- Memoized calculations
- Optimized chart rendering
- Local storage caching

---

## Author

### Gabriel Gitonga

Full Stack Software Engineer

#### Technologies

- Java
- Spring Boot
- React
- TypeScript
- Angular
- PostgreSQL
- MySQL
- Cloud & Enterprise Systems

#### LinkedIn

https://www.linkedin.com/in/gabriel-gitonga-b5a611183/

---
