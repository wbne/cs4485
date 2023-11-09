import React, { useState, ChangeEvent, FormEvent } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import './forms.css';

interface TutorFormData {
  name: string;
  email: string;
  password: string;
  subjects: string[];
  experience: string;
}

function TutorRegistration() {
  const [formData, setFormData] = useState<TutorFormData>({
    name: '',
    email: '',
    password: '',
    subjects: [],
    experience: '',
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (event: ChangeEvent<{ value: unknown }>) => {
    const selectedSubjects = event.target.value as string[];
    setFormData({ ...formData, subjects: selectedSubjects });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    //TODO: Add logic to see if user is validated.
    // 		If they are then redirect
    // 		Else return the error
    //event.preventDefault();
    console.log('Tutor Registration Data:', formData);
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
          <InputLabel id="subjects-label">Select Subjects</InputLabel>
          <Select
            labelId="subjects-label"
            id="subjects"
            name="subjects"
            multiple
            value={formData.subjects}
            label="Select Subjects"
            renderValue={(selected) => (selected as string[]).join(', ')}
          >
            <MenuItem value="math">Math</MenuItem>
            <MenuItem value="science">Science</MenuItem>
            <MenuItem value="english">English</MenuItem>
            <MenuItem value="history">History</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div>
        <TextField
          required
          id="experience"
          name="experience"
          label="Tutoring Experience"
          multiline
          rows={4}
          value={formData.experience}
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
        Register as a Tutor
      </Button>
    </form>
  );
}

export default TutorRegistration;

