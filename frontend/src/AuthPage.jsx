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
    axios.post("http://localhost:3001/authenticate", { username: value })
    .then((response) => {
      // Assuming the server responds with appropriate data that might include a secret
      // Check your server's response structure and ensure it includes a secret if necessary
      const userData = {
        username: value, // Username from the form
        secret: response.data.secret || 'default-secret' // Assuming 'secret' is part of the response, otherwise use a default or predefined secret
      };
      props.onAuth(userData);
    })
    .catch((error) => console.log("Auth Error", error));
  }

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
