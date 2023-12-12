import React, { useState, ChangeEvent, FormEvent } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import './forms.css';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  subject: string;
}

function RegistrationForm() {
  // Define state variables to store form data
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    subject: '',
  });

  // Handle form field changes
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle subject selection
  const handleSelectChange = (event: ChangeEvent<string>) => {
    const value = event.target as string;
    setFormData({ ...formData, subject: value });
  };

  // Handle form submission
  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log('Form Data:', formData);
	let nanoseconds = new Date();
	let expirationTime = Math.ceil(nanoseconds.getTime() / 1000) + 36000;
        localStorage.setItem("lastLoggedIn", "" + expirationTime);
	localStorage.setItem("firstName", "" + formData.firstName);
	localStorage.setItem("lastName", "" + formData.lastName);
	localStorage.setItem("email", "" + formData.email);
	localStorage.setItem("id", "" + 10);
        const currentURL = "" + window.location;
        const newURL = currentURL.replaceAll("newstudent", "home");
        window.location.assign(newURL);
        window.location.assign(newURL);
  };

  return (
    <form style={{marginTop: 50}} className="form" onSubmit={handleSubmit}>
      <h1 className="title">Let's get Onboarded!</h1>
      <div>
        <TextField
          required
          id="firstName"
          name="firstName"
          label="First Name"
          value={formData.firstName}
          onChange={handleInputChange}
          variant="outlined"
          fullWidth
        />
      </div>
      <div>
        <TextField
          required
          id="lastName"
          name="lastName"
          label="Last Name"
          value={formData.lastName}
          onChange={handleInputChange}
          variant="outlined"
          fullWidth
        />
      </div>
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
      
      {/* <div>
        <FormControl fullWidth variant="outlined">
          <InputLabel id="subject-label">Select a Subject</InputLabel>
          <Select
            labelId="subject-label"
            id="subject"
            name="subject"
            value={formData.subject}
            label="Select a Subject"
          >
            <MenuItem value="math">Math</MenuItem>
            <MenuItem value="science">Science</MenuItem>
            <MenuItem value="english">English</MenuItem>
            <MenuItem value="history">History</MenuItem>
          </Select>
        </FormControl>
      </div> */}
      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
	onClick={handleSubmit}
      >
        Register
      </Button>
    </form>
  );
}

export default RegistrationForm;

