
# Chat Application with OpenAI Integration

This project is a chat application built using React (frontend) and Node.js (backend) with OpenAI GPT-3 integration for generating AI-based responses.

## Project Structure

- `frontend`: Contains the React application.
  - `src/components`: React components for the application.
  - `src/model`: Data models used in the application.
  - `src/state`: State management using RxJS.
  - `src/services`: Services to handle WebSocket communication.
- `backend`: Node.js server handling WebSockets and OpenAI API requests.

## Features

- Real-time chat interface built with React.
- Backend server in Node.js handling WebSocket connections.
- Integration with OpenAI GPT-3 for AI-based responses.

## Setup and Installation

1. **Clone the Repository**:
   ```
   git clone <repository-url>
   ```
2. **Install Dependencies**:
   Navigate to both `frontend` and `backend` directories and run:
   ```
   npm install
   ```
3. **Set Up OpenAI API Key**:
   In `backend/server.js`, replace `'your-api-key'` with your actual OpenAI API key.

## Running the Application

1. **Start the Backend Server**:
   Navigate to the `backend` directory and run:
   ```
   npm start
   ```
2. **Start the Frontend Application**:
   In another terminal, navigate to the `frontend` directory and run:
   ```
   npm start
   ```
3. The React application will be available at `http://localhost:3000`.

## Note

The application requires an OpenAI API key for full functionality. Ensure to follow OpenAI's guidelines and use the API responsibly.

## License

This project is licensed under the MIT License.

