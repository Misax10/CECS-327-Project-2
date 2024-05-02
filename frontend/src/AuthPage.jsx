// Importing axios for HTTP requests
import axios from "axios";

// AuthPage component for handling the user authentication
const AuthPage = (props) => {
  // Handler for the form submission event
  const onSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submit action

    // Extracting the value from the first input field of the form (assumed to be the username)
    const { value } = e.target[0];

    // Makes a POST request to the authentication endpoint with the provided username
    axios
      .post("http://localhost:3001/authenticate", { username: value })
      .then((r) => {
        // On successful authentication, calls the onAuth prop with the returned data and secret
        props.onAuth({ ...r.data, secret: value });
      })
      .catch((e) => {
        // Logs an error message if the authentication fails
        console.log("Auth Error", e);
      });
  };

  // The component renders a form that allows the user to set their username
  return (
    <div className="background">
      <form onSubmit={onSubmit} className="form-card">
        {/* Title displayed on the authentication card */}
        <div className="form-title">Welcome to our CECS 327 Project👋</div>

        {/* Subtitle prompting the user to set their username */}
        <div className="form-subtitle">Set a username to get started</div>

        {/* Auth block containing the username label, input and submit button */}
        <div className="auth">
          <div className="auth-label">Username</div>
          <input className="auth-input" name="username" />
          <button className="auth-button" type="submit">
            Enter
          </button>
        </div>
      </form>
    </div>
  );
};

// Exporting AuthPage for use in other parts of the application
export default AuthPage;
