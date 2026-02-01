# Hear Your Bias

<p align="center">
  <img width="1017" height="471" src="https://github.com/user-attachments/assets/3daff208-c5b3-4dc7-b02f-da5a96762deb" alt="Hear Your Bias Screenshot" />
</p>

## Rule based model

<p align="center">
  <img width="516" height="484" src="https://github.com/user-attachments/assets/f053ccb8-0ffd-4a7a-86ff-c9100c501ca2" alt="Rule Based Model Diagram" />
</p>

Hear Your Bias is a web application that helps people become aware of unconscious bias in their spoken language.  
The app listens to speech, converts it into text, analyzes it, and highlights potentially biased or aggressive phrases in real time.

Our goal is **awareness and better communication**, not judgment.

## Getting Started

Follow the instructions below to set up and run the project locally.

### Prerequisites

*   Node.js (v14 or higher)
*   npm (v6 or higher)

### Backend Setup

1.  Navigate to the backend directory:
    ```bash
    cd backend
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  Start the backend server:
    ```bash
    node index.js
    ```
    The backend server will likely run on http://localhost:5000 (or the port specified in `index.js`).

### Frontend Setup

1.  Navigate to the frontend directory:
    ```bash
    cd fronted_ui
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  **Environment Variables / Firebase Setup**:
    This project requires Firebase for authentication. You need to create a `.env` file with your Firebase credentials.

    Copy the example environment file to a new file named `.env`:
    ```bash
    cp .env.example .env
    ```
    
    Open the `.env` file and replace the placeholder values (`YOUR_API_KEY`, etc.) with your actual Firebase project configuration keys.

4.  Start the development server:
    ```bash
    npm run dev
    ```

5.  Open your browser and navigate to the URL shown in the terminal (usually http://localhost:5173).

### Environment Variables

The frontend relies on the following environment variables (defined in your `.env` file):

*   `VITE_FIREBASE_API_KEY`
*   `VITE_FIREBASE_AUTH_DOMAIN`
*   `VITE_FIREBASE_PROJECT_ID`
*   `VITE_FIREBASE_STORAGE_BUCKET`
*   `VITE_FIREBASE_MESSAGING_SENDER_ID`
*   `VITE_FIREBASE_APP_ID`
*   `VITE_FIREBASE_MEASUREMENT_ID`
