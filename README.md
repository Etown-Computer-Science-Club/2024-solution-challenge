# Trash Talk - GDSC Solution Challenge 2024

## Running the Project Locally

Required dependencies:

-   [Node.js](https://nodejs.org/en/)

1. Navigate to the client directory:

```bash
cd client
```

2. Install the required dependencies:

```bash
npm install
```

3. Copy the `.env.example` file to `.env`:

```bash
cp .env.example .env
```

4. Update the `.env` file with your environment variables:

```
VITE_GOOGLE_LOCATION_API_KEY=GOOGLE_LOCATION_API_KEY
VITE_FIREBASE_API_KEY=FIREBASE_API_KEY
VITE_FIREBASE_AUTH_DOMAIN=FIREBASE_AUTH_DOMAIN
VITE_FIREBASE_PROJECT_ID=FIREBASE_PROJECT_ID
VITE_FIREBASE_STORAGE_BUCKET=FIREBASE_STORAGE_BUCKET
VITE_FIREBASE_MESSAGING_SENDER_ID=FIREBASE_MESSAGING_SENDER_ID
VITE_FIREBASE_APP_ID=FIREBASE_APP_ID
```

5. Start the development server:

```bash
npm run dev
```

---

## Website

https://trashtalkapp.com

---

## Project Overview

A social media app designed for users to post and share products they wish to dispose of, such as old appliances, furniture, and electronics. The platform offers a user-friendly interface for posting item photos and descriptions, promoting the recycling and reuse of goods.

---

## Project Setup

### Challenge Statement

We're tackling the growing issue of waste from consumer products, which contributes to environmental degradation and resource depletion.

### Sustainable Development Goals

Our solution supports SDG 12 by encouraging the reuse and recycling of products, aiming to foster sustainable consumption and production patterns. We focus on target 12.2.1, inspired by the need to mitigate the environmental impacts of resource consumption and waste.

---

## Implementation

### Architecture

Our solution comprises mainly frontend components backed by Google technologies. We describe the high-level components, their responsibilities, and the rationale behind our technology choices.

### Technologies Used

-   **Frontend:** React for UI development, Ant Design for consistent component styling, and Tailwind for utility CSS classes.
-   **Backend:** Firebase for database and storage solutions, Firestore for data storage, Firebase Authentication for user management, and Google Maps Platform for geolocation features.

---
