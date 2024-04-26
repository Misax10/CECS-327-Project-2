// Importing axios for making HTTP requests
import axios from "axios";

// AuthPage component that handles user authentication
const AuthPage = (props) => {
  // Function to handle form submission
  const onSubmit = (e) => {
    e.preventDefault();  // Prevent the default form submission behavior
    const { value } = e.target[0];  // Extracting the value from the first input field, which is assumed to be the username

    // Make a POST request to the server to authenticate the user
    axios
      .post("http://localhost:3001/authenticate", { username: value }) // Sending the username to the backend
      .then((r) => props.onAuth({ ...r.data, secret: value })) // If successful, invoke onAuth prop with response data and secret
      .catch((e) => console.log("Auth Error", e)); // Log any errors to the console
  };

  // Render the component
  return (
    <div className="background">
      {/* Form container with background styling */}
      <form onSubmit={onSubmit} className="form-card">
        {/* Form header welcoming the user */}
        <div className="form-title">Welcome 👋</div>

        {/* Subtitle to prompt the user for a username */}
        <div className="form-subtitle">Set a username to get started</div>

        {/* Authentication input group */}
        <div className="auth">
          {/* Label for the username input */}
          <div className="auth-label">Username</div>
          {/* Username input field */}
          <input className="auth-input" name="username" />
          {/* Submit button for the form */}
          <button className="auth-button" type="submit">
            Enter
          </button>
        </div>
      </form>
    </div>
  );
};

// Export the AuthPage component for use in other parts of the application
export default AuthPage;
