import React, { useState, ChangeEvent, FormEvent } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';

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
  const handleSelectChange = (event: ChangeEvent<{ value: unknown }>) => {
    const value = event.target.value as string;
    setFormData({ ...formData, subject: value });
  };

  // Handle form submission
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // You can access form data in the `formData` object here and perform registration logic.
    console.log('Form Data:', formData);
    // You can also make an API request to store user data.
  };

  return (
    <form onSubmit={handleSubmit}>
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
            onChange={handleSelectChange}
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

