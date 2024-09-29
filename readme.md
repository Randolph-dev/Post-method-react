# Project Summary for Posts Update

This is a simple React app where regular users can toggle the publish status of blog posts, while admins are able to see these changes being saved in real-time. These changes are then saved to a backend JSON file.
    
    The goal of this app is to train POST/PUT request handling in a React application to update data on the server side.

## Development diary

Initially, I ran into issues with having to refresh the page to see updates as an admin, the login state would also reset every time the page refreshed. To solve this, I implemented a localStorage function to keep the admin login status persistent across page reloads. I also ensured that the app fetched the data at regular intervals using Axios, allowing admins to see live updates to the JSON file without manually refreshing the page

This working version includes:
- A **regular user flow** where anyone can toggle the publish status between true and false.
- A **login flow for admins** where they can log in and view the real-time changes being saved in the backend JSON file.
- The frontend is running with **React**, and the backend uses **Express** to manage the `db.json` file where the post data is stored and updated.

The final setup ensures that both the **user requirement** (toggling publish status) and the **developer requirement** (saving changes to `db.json`) are fully met.

## Instructions to run Admin view
Login with 'admin' as username, and 'password' as password.