import { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './forms.css';

function LoginForm() {
  const [userInfo, setUserInfo] = useState([]);
  const [error, setError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

	//checks to see if a token exists and if so, when it was made
	let session = localStorage.getItem("lastLoggedIn");
	if(session != null) {
		if(Number(session) > 0) {
			localStorage.setItem("lastLoggedIn", (Number(session) - 1) + "");
			const currentURL = "" + window.location;
			const newURL = currentURL.replaceAll("login", "home");
			window.location.assign(newURL);
		}
		else {
			localStorage.removeItem("lastLoggedIn");
		}
	}

  useEffect(() => {
    const apiUrl = 'http://ec2-54-242-100-57.compute-1.amazonaws.com:8080/users';

    fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setUserInfo(data);
        console.log(data);
      })
      .catch(error => {
        console.error('Fetch error:', error);
      });
  }, []);

  // Define state variables to store form data
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  // Handle form field changes
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (event: any) => {
    //TODO: Add logic to see if user is validated.
    // 		If they are then redirect
    // 		Else return the error
    // For sake of logging in, do johndoe@gmail.com and password123
    event.preventDefault();
    let isValidUser = false;

    userInfo.map((value: any) => {
      if (value.username === formData.email && value.password === formData.password) {
        isValidUser = true;
        localStorage.setItem("lastLoggedIn", "3");
        const currentURL = "" + window.location;
        const newURL = currentURL.replaceAll("login", "home");
        setError(false);
        window.location.assign(newURL);
      }
    });

    if (!isValidUser) {
      setError(true);
      setErrorMessage('Invalid username or password');
    }
  };

  return (
    <>
    <h1 style={{marginTop: 50}} className="title"> Login </h1>
    <form className="form" onSubmit={handleSubmit}>
      <div>
        <TextField
          required
          id="email"
          name="email"
          label="Email"
          type="email"
          value={formData.email}
          onChange={handleInputChange}
          error={error}
          helperText={error && errorMessage}
          variant="outlined"
          fullWidth
        />
      </div>
      <div>
        <TextField
          required
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formData.password}
          onChange={handleInputChange}
          variant="outlined"
          fullWidth
        />
      </div>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
	onClick={handleSubmit}
      >
        Log In
      </Button>
      <a className="forgot">Forgot Password?</a>
    </form>

    </>
  );
}

export default LoginForm;

