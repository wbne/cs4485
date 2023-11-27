import React, { useState, ChangeEvent, FormEvent } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import './forms.css';
import { red } from '@mui/material/colors';

interface TutorFormData {
  name: string;
  email: string;
  password: string;
  subjects: string[];
  experience: string;
  criminalBackgroundCheck: {
    felony: boolean | undefined;
    pendingCharges: boolean | undefined;
    violenceTheftDishonesty: boolean | undefined;
    otherConvictions: boolean | undefined;
  };
}

function TutorRegistration() {
  const [formData, setFormData] = useState<TutorFormData>({
    name: '',
    email: '',
    password: '',
    subjects: [],
    experience: '',
    criminalBackgroundCheck: {
      felony: undefined,
      pendingCharges: undefined,
      violenceTheftDishonesty: undefined,
      otherConvictions: undefined,
    },
  });

  const [currentStep, setCurrentStep] = useState<number>(0);
  const [isBackgroundCheckOpen, setBackgroundCheckOpen] = useState(false);
  const [isRegisterButtonDisabled, setRegisterButtonDisabled] = useState(true);
  const [isBackgroundCheckDisabled, setBackgroundCheckDisabled] = useState(false)
  const [displayFailNote, setDisplayFailNote] = useState(false);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (event: ChangeEvent<{ value: unknown }>) => {
    const selectedSubjects = event.target.value as string[];
    setFormData({ ...formData, subjects: selectedSubjects });
  };

  const handleBackgroundCheckOpen = () => {
    setBackgroundCheckOpen(true);
    setCurrentStep(1);
  };

  const handleBackgroundCheckClose = () => {
    setBackgroundCheckOpen(false);
    setCurrentStep(0);
  };

  const handleBackgroundCheckSubmit = () => {
    // If "Yes" for check
    if (formData.criminalBackgroundCheck.felony || formData.criminalBackgroundCheck.otherConvictions || formData.criminalBackgroundCheck.pendingCharges || formData.criminalBackgroundCheck.violenceTheftDishonesty) {
      setRegisterButtonDisabled(true);
      setDisplayFailNote(true);
      handleBackgroundCheckClose();
    } else {
      if (currentStep < 4) 
        setCurrentStep(currentStep + 1);
      else 
        handleBackgroundCheckClose();
        setRegisterButtonDisabled(false);
    }
    setBackgroundCheckDisabled(true);
  };

  const handleBackgroundCheckChange = (
    name: keyof TutorFormData['criminalBackgroundCheck'],
    answer: 'yes' | 'no'
  ) => {
    setFormData((prevData) => ({
      ...prevData,
      criminalBackgroundCheck: {
        ...prevData.criminalBackgroundCheck,
        [name]: answer === 'yes',
      },
    }));
  };

  const renderBackgroundCheckQuestion = () => {
    const questions = [
      "Begin your background Check",
      "Have you ever been convicted of a felony?",
      "Do you have any criminal charges pending against you?",
      "Have you ever been convicted of any crime related to violence, theft, or dishonesty?",
      "Do you have any other convictions or legal issues not covered by the above questions?",
    ];

    const attributeNames = [
      '', // Placeholder for the beginning check
      'felony',
      'pendingCharges',
      'violenceTheftDishonesty',
      'otherConvictions',
    ];
    
    const currentAttributeName = attributeNames[currentStep] as keyof TutorFormData['criminalBackgroundCheck'];

    return (
      <div>
      <Typography variant="body1">{questions[currentStep]}</Typography>
      {currentStep !== 0 && (
        <div>
          <Button 
            style={{ color: 'grey', marginRight: '20px'}}
            onClick={() => handleBackgroundCheckChange(currentAttributeName, 'no')}>
            No
          </Button>
          <Button 
            style={{ color: 'grey',}}
            onClick={() => handleBackgroundCheckChange(currentAttributeName, 'yes')}>
            Yes
          </Button>
        </div>
      )}
    </div>
    );
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Tutor Registration Data:', formData);
  };

  return (
    <form style={{ marginTop: 50 }} className="form" onSubmit={handleSubmit}>
      
      <h1 className="title">Let's get Onboarded!</h1>
      <div>
        <TextField
          required
          id="firstName"
          name="firstName"
          label="First Name"
          value={formData.name}
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
          id="abt"
          name="abt"
          label="About Me"
          multiline
          rows={4}
          value={formData.experience}
          onChange={handleInputChange}
          variant="outlined"
          fullWidth
        />
      </div>

      <div className="background-check">
        <h1>Please complete the required background check</h1>
        <Button
          variant="contained"
          //color="primary"
          onClick={handleBackgroundCheckOpen}
          style={{marginTop: '10px',  backgroundColor: isBackgroundCheckDisabled ? 'gray' : 'black'}}
          disabled={isBackgroundCheckDisabled}
        >
          Background Check
        </Button>
      </div>
      
      <Dialog open={isBackgroundCheckOpen} onClose={handleBackgroundCheckClose}>
        <DialogTitle>Criminal Background Check</DialogTitle>
        <DialogContent>
          {renderBackgroundCheckQuestion()}
        </DialogContent>
        <DialogActions>
          {currentStep !== 0 && (
            <Button onClick={handleBackgroundCheckSubmit}>Next</Button>
          )}
        </DialogActions>
      </Dialog>


      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        disabled={isRegisterButtonDisabled}
      >
        {isRegisterButtonDisabled
          ? "Unable to register as Tutor"
          : "Register as a Tutor"}
      </Button>
      
      {displayFailNote && (
        <Typography sx={{mt: 2, backgroundColor: 'rgba(250, 0, 0, 0.1)', color: 'red', borderRadius: 2, padding: 2}} >
          Thank you for your interest in tutoring with Tutorkesh. 
          Unfortunately, based on the background check results, we are unable to proceed with your registration at this time. 
        </Typography>
      )}
      
    </form>
  );
}

export default TutorRegistration;