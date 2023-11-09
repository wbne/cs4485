import React, { useState, ChangeEvent, FormEvent } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import './forms.css';

interface FormData {
  name: string;
  email: string;
  password: string;
  subject: string;
}

function RegistrationForm() {
  // Define state variables to store form data
  const [formData, setFormData] = useState<FormData>({
    name: '',
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
    //TODO: Add logic to see if user is validated.
    // 		If they are then redirect
    // 		Else return the error
    //event.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <form style={{marginTop: 50}} className="form" onSubmit={handleSubmit}>
      <h1 className="title">Let's get Onboarded!</h1>
      <div>
        <TextField
          required
          id="name"
          name="name"
          label="Name"
          value={formData.name}
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
      <div>
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
      </div>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
      >
        Register
      </Button>
    </form>
  );
}

export default RegistrationForm;

