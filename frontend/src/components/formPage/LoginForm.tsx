import React, { useState, ChangeEvent, FormEvent } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

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
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // You can access form data in the `formData` object here and perform login logic.
    console.log('Form Data:', formData);
    // You can also make an API request to validate the login credentials.
  };

  return (
    <form onSubmit={handleSubmit}>
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
      >
        Log In
      </Button>
    </form>
  );
}

export default LoginForm;

