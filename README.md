# React Firebase Realtime Form
🚀 A React mini-project for user registration, featuring real-time data storage, editing, and deletion using Firebase and styled with Bootstrap.

# Features
- ✅ **User Registration:** Collects user information via a form.
- ✅ **Firebase Integration:** Saves form data in a **Firebase Realtime Database**.
- ✅ **Live Users Table:** Displays all registered users dynamically.
- ✅ **Real-time Updates:** Any **new user, edit, or delete action** updates instantly in both Firebase and the UI.
- ✅ **Edit & Delete Functionality:** Users can update or remove their data, reflecting changes in real-time.
- ✅ **Responsive UI:** Styled using **Bootstrap & React-Bootstrap** for a modern and mobile-friendly design.


# Technologies Used
-  **React.js** – For building the front-end UI
-  **Firebase Realtime Database** – For storing and syncing user data
-  **React Hooks (useState, useEffect)** – For state management
-  **Bootstrap & React-Bootstrap** – For styling and responsive design
-  **CSS** – For additional styling

# How It Works
-  Fill out the form and submit.
-  User data is saved in Firebase and displayed in the Users Table.
-  Click Edit to modify user details (updates reflect in real-time).
-  Click Delete to remove a user (deletes instantly from Firebase and the UI).


# Getting Started
## 1. Clone the repository
git clone https://github.com/Mf0103/form-register.git
cd form-register

## 2. Install dependencies
npm install

## 3. Install Bootstrap & React-Bootstrap
npm install bootstrap react-bootstrap

## 4. Run the app
npm start

## Setup Firebase
- 1️⃣ Create a Firebase project at Firebase Console.
- 2️⃣ Enable Realtime Database and set rules to allow read/write.
- 3️⃣ Add your Firebase config to your React app (firebaseConfig.js).

