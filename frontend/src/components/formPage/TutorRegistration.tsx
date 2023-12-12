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
import { SelectChangeEvent } from '@mui/material/Select';

interface TutorFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  subjects: string[];
  abt: string;
  criminalBackgroundCheck: {
    felony: boolean;
    pendingCharges: boolean;
    violenceTheftDishonesty: boolean;
    otherConvictions: boolean;
  };
}

function TutorRegistration() {
  const [formData, setFormData] = useState<TutorFormData>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    subjects: [],
    abt: '',
    criminalBackgroundCheck: {
      felony: true,
      pendingCharges: true,
      violenceTheftDishonesty: true,
      otherConvictions: true,
    },
  });
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [isBackgroundCheckOpen, setBackgroundCheckOpen] = useState(false);
  const [isRegisterButtonDisabled, setRegisterButtonDisabled] = useState(true);
  const [isCheckButtonDisabled, setCheckButtonDisabled] = useState(false)
  const [isYesClicked, setIsYesClicked] = useState(false)
  const [isNoClicked, setIsNoClicked] = useState(false)
  const [displayFailNote, setDisplayFailNote] = useState(false);
  const isbackgroundCheckFail =
    formData.criminalBackgroundCheck.felony || 
    formData.criminalBackgroundCheck.otherConvictions || 
    formData.criminalBackgroundCheck.pendingCharges || 
    formData.criminalBackgroundCheck.violenceTheftDishonesty;

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (event: SelectChangeEvent<string[]>) => {
    const selectedSubjects = event.target.value as string[];
    setFormData({ ...formData, subjects: selectedSubjects });
  };

  const handleBackgroundCheckOpen = () => {
    setBackgroundCheckOpen(true);
    setCurrentStep(0);
  };

  const handleBackgroundCheckClose = () => {
    setBackgroundCheckOpen(false);
    setCurrentStep(0);
  };
  
  const handleStartButton = () => {
    setCurrentStep(currentStep + 1);
  };

  const handleBackgroundCheckSubmit = () => {
    // if any background check question is true
    if (isbackgroundCheckFail && currentStep == 4) {
      setRegisterButtonDisabled(true);
      setDisplayFailNote(true);
      handleBackgroundCheckClose();
    } else {
      if (currentStep < 4) {
        setCurrentStep(currentStep + 1);
        setIsNoClicked(false);
        setIsYesClicked(false);
      }
      else {
        handleBackgroundCheckClose();
        setRegisterButtonDisabled(false);
      }
    }
    setCheckButtonDisabled(true);
  };

  const handleBackgroundCheckChange = (
    name: keyof TutorFormData['criminalBackgroundCheck'],
    answer: 'yes' | 'no'
  ) => {
    if (answer === 'yes') {
      setIsYesClicked(true);
      setIsNoClicked(false);
    }
    if (answer === 'no') {
      setIsYesClicked(false);
      setIsNoClicked(true);
    }

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
      "Please answer all questions truthfully and do not skip any questions.",
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
      {currentStep === 0 &&
      (
        <Button sx={{color: '#7D729E'}} onClick={handleStartButton}>Click to Begin</Button>
      )}
      {currentStep !== 0 && (
        <div>
          <Button 
            style={{ backgroundColor: isNoClicked ? '#7D729E' : '', color: 'black', marginRight: '20px', marginTop: '10px'}}
            onClick={() => handleBackgroundCheckChange(currentAttributeName, 'no')}>
            No
          </Button>
          <Button 
            style={{marginTop: '10px', color: 'black', backgroundColor: isYesClicked ? '#7D729E' : ''}}
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
	let nanoseconds = new Date();
	let expirationTime = Math.ceil(nanoseconds.getTime() / 1000) + 36000;
        localStorage.setItem("lastLoggedIn", "" + expirationTime);
	localStorage.setItem("firstName", "" + formData.firstName);
	localStorage.setItem("lastName", "" + formData.lastName);
	localStorage.setItem("email", "" + formData.email);
	localStorage.setItem("id", "" + 10);
        const currentURL = "" + window.location;
        const newURL = currentURL.replaceAll("newtutor", "tutor/home");
        window.location.assign(newURL);
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
      <div>
        <FormControl fullWidth variant="outlined">
          <InputLabel id="subjects-label">Select Subject</InputLabel>
          <Select
            labelId="subjects-label"
            id="subjects"
            name="subjects"
            multiple
            value={formData.subjects}
            onChange={handleSelectChange}
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
          value={formData.abt}
          onChange={handleInputChange}
          variant="outlined"
          fullWidth
        />
      </div>
      <div className="background-check">
        <h1>Please complete the required background check</h1>
        <Button
          variant="contained"
          onClick={handleBackgroundCheckOpen}
          style={{marginTop: '10px',  backgroundColor: isCheckButtonDisabled ? 'gray' : 'black'}}
          disabled={isCheckButtonDisabled}
        >
          Background Check
        </Button>
      </div>
      
      <Dialog open={isBackgroundCheckOpen} /*onClose={handleBackgroundCheckClose}*/>
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
