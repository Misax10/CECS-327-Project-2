// AuthPage component for handling user authentication
const AuthPage = (props) => {
    // onSubmit function triggered by the form submission event
    const onSubmit = (e) => {
      e.preventDefault(); // Prevent the default form submission behavior
      const { value } = e.target[0]; // Extracting the value of the first input field in the form (username)

      // Calling the onAuth prop function passed down from the parent component,
      // passing an object with username and secret (using the same value for simplicity)
      props.onAuth({ username: value, secret: value });
    };
  
    // Render the authentication page layout
    return (
      <div className="background"> {/* Container with a background styling */}
        <form onSubmit={onSubmit} className="form-card"> {/* Form with an onSubmit handler */}
          <div className="form-title">Welcome 👋</div> {/* Form header with a welcome message */}
  
          <div className="form-subtitle">Set a username to get started</div> {/* Subtitle encouraging user action */}
  
          <div className="auth"> {/* Authentication block containing the input and submit button */}
            <div className="auth-label">Username</div> {/* Label for the username input */}
            <input className="auth-input" name="username" /> {/* Username input field */}
            <button className="auth-button" type="submit"> {/* Submit button for the form */}
              Enter
            </button>
          </div>
        </form>
      </div>
    );
  };
  
  // Export the AuthPage component to be used in other parts of the application
  export default AuthPage;
