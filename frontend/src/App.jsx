// Importing necessary React hook for state management
import { useState } from "react";

// Importing stylesheet for the application
import "./App.css";

// Importing components for authentication and chat pages
import AuthPage from "./AuthPage";
import ChatsPage from "./ChatsPage";

// Main App component
function App() {
  // State hook for managing user state, initially set to undefined
  const [user, setUser] = useState(undefined);

  // Conditional rendering based on user state
  if (!user) {
    // If there is no user, AuthPage is rendered to allow user authentication.
    // onAuth is a prop expecting a function that updates the user state
    return <AuthPage onAuth={(user) => setUser(user)} />;
  } else {
    // If there is a user, ChatsPage is rendered to display the chat interface.
    // user is passed as a prop to ChatsPage for user-specific operations
    return <ChatsPage user={user} />;
  }
}

// Exporting App component to be used in other parts of the application
export default App;
