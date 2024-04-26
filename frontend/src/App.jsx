// Importing necessary React hooks and styles.
import { useState } from "react";
import "./App.css";

// Importing the authentication and chat page components.
import AuthPage from "./AuthPage";
import ChatsPage from "./ChatPage";

// The main functional component of your application.
function App() {
  // State hook for managing the user's authenticated status. 
  // Initially, `user` is `undefined` indicating no user is logged in.
  const [user, setUser] = useState(undefined);

  // Conditional rendering based on user authentication status:
  if (!user) {
    // If there is no user logged in, the AuthPage component is rendered.
    // `onAuth` is a prop passed to the AuthPage that takes a `user` object
    // and sets it as the current user using the `setUser` function.
    return <AuthPage onAuth={(user) => setUser(user)} />;
  } else {
    // If a user is logged in, the ChatsPage component is rendered,
    // and the logged-in user's data is passed to it via the `user` prop.
    return <ChatsPage user={user} />;
  }
}

// Exporting the App component to be used in other parts of the application,
// typically as the root component that gets mounted to the DOM.
export default App;
