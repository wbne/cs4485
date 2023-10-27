import { useState, ChangeEvent, FormEvent } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './forms.css';

function LoginForm() {
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
    //event.preventDefault();
    console.log('Form Data:', formData);
    
  };

  return (
    <>
    <h1 className="title"> Login </h1>
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
	href="./home"
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

