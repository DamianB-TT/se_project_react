# 🌤️ WTWR (What to Wear Right Now)

A weather-based clothing recommendation web application.

## Description

The website is designed to help users decide what to wear based on real-time weather data. Users can view the current weather, toggle between Fahrenheit and Celsius, and see clothing items filtered based on the weather conditions. Users can also add and delete clothing items, with all data persisting through a connected backend API.

This project features a responsive design, modular React components, state management using hooks and context, and full CRUD functionality with a RESTful API.

## Tech Stack

- React
- JavaScript (ES6+)
- React Hooks (useState, useEffect, useContext)
- React Router
- Context API
- CSS (Flexbox, Grid, Media Queries)
- BEM Methodology
- RESTful API integration

## Features

- 🌡️ Real-time weather data based on location
- 👕 Clothing recommendations based on temperature and weather type
- ➕ Add new clothing items (name, image URL, weather type)
- 🗑️ Delete clothing items
- 🔍 Filter clothing items based on current weather
- 🌗 Toggle between Fahrenheit and Celsius
- 🪟 Modal system for viewing and adding items
- ⚡ Dynamic UI updates without page reload

## Project Pitch

Check out [this video](https://www.loom.com/share/8fa5a65701614df7a975bfc4c2ff7c8c), where I describe my
project and some challenges I faced while building it.

## API Endpoints

The application uses a RESTful API for data management:

### Items

- `GET /items` → Get all clothing items
- `POST /items` → Add a new clothing item
- `DELETE /items/:id` → Delete a clothing item

### Weather

- External weather API provides:
  - Temperature data
  - Weather conditions
  - Location-based forecasts

## Links

- [Figma Design](https://www.figma.com/file/DTojSwldenF9UPKQZd6RRb/Sprint-10%3A-WTWR)
