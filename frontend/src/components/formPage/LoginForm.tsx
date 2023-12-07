import { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './forms.css';
import API_URL from '../FakeENV';

function LoginForm() {
  const [userInfo, setUserInfo] = useState([]);
  const [error, setError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

	//checks to see if a token exists and if so, when it was made
	let session = localStorage.getItem("lastLoggedIn");
	if(session != null) {
		let nanoseconds = new Date();
		let seconds = Math.floor(nanoseconds.getTime() / 1000);
		if(Number(session) >= seconds) {
			//localStorage.setItem("lastLoggedIn", (Number(session) - 1) + "");
			const currentURL = "" + window.location;
			const newURL = currentURL.replaceAll("login", "home");
			window.location.assign(newURL);
		}
		else {
			// Session Access Control will handle this
			//localStorage.removeItem("lastLoggedIn");
		}
	}

  useEffect(() => {
    // For sake of logging in, do student1@gmail.com and Password123$
    let apiUrl = API_URL() + '/students';
    if(window.location.href.indexOf("tutor") != -1) {
		apiUrl = API_URL() + '/tutors';		
	}

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
    event.preventDefault();
    let isValidUser = false;

    userInfo.map((value: any) => {
      if (value.username === formData.email && value.password === formData.password) {
        isValidUser = true;
	let nanoseconds = new Date();
	let expirationTime = Math.ceil(nanoseconds.getTime() / 1000) + 36000;
        localStorage.setItem("lastLoggedIn", "" + expirationTime);
	localStorage.setItem("firstName", "" + value.firstName);
	localStorage.setItem("lastName", "" + value.lastName);
	localStorage.setItem("email", "" + value.username);
	localStorage.setItem("id", "" + value.id);
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

