import { Box, Typography, Button, Grid, TextField, Autocomplete } from '@mui/material';

import "@fontsource/playfair-display";
import "@fontsource/inter";
import '@fontsource/inter';
import '@fontsource/inter/300.css';
//import '@fontsource/poppins';
import { useEffect, useState } from 'react';
import { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers';
import { appointments } from './apptData';
import { useLocation } from 'react-router-dom';

interface Tutors {
    tutorId: number;
    topic: string;
    aboutMe: string;
}

export default function BookAppointment() {
    const location = useLocation();
    const { tutorName, tutorSubject } = location.state;
    const [subject, setSubject] = useState(tutorSubject);
    const [tutor, setTutor] = useState(tutorName);
    const [value, setValue] = useState<Dayjs | null>();
    const [extraInfo, setExtraInfo] = useState('');

    const [names, setNames] = useState<string[]>([]);
    const [subjects, setSubjects] = useState<string[]>([]);

    const [appointment, setAppointment] = useState<readonly Tutors[]>([]);

    const handleSubjectChange = (event: React.ChangeEvent<{}>, newSubject: string) => {
        setSubject(newSubject);
    };

    const handleTutorChange = (event: React.ChangeEvent<{}>, newTutor: string) => {
        setTutor(newTutor);
    };

    useEffect(() => {
        // For sake of logging in, do johndoe@gmail.com and Password123$
        const apiUrl = 'https://ec2-34-224-29-186.compute-1.amazonaws.com/tutors';
    
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
            appointments.map((subj) => {
                if (!subjects.includes(subj.topic)) {
                    setSubjects([
                        ...subjects,
                        subj.topic
                    ])
                }
                if (!names.includes(subj.tutorName)) {
                    setNames([
                        ...names,
                        subj.tutorName
                    ])
                }
            })
            const tutorArray = data.map((value: any) => ({
                name: value.firstName + " " + value.lastName,
                topic: value.subjectList[0],
                aboutMe: value.aboutMe
            }));

            setAppointment(tutorArray);
          })
          .catch(error => {
            console.error('Fetch error:', error);
          });
      }, []);

    return (
        <div className='flex flex-row' style={{height: '100%', width: '100vw',}}>
            <div style={{width:'40%', paddingLeft: '4rem', paddingTop: '6rem', height: '100%'}}>
                <Box>
                    <Typography fontFamily='Playfair Display' fontSize={60} fontWeight='medium' sx={{lineHeight: 1, marginBottom: 3}}>Book an Appointment</Typography>
                    <Typography fontFamily='Inter' width="80%" fontSize={18} fontWeight={'regular'}>Select the subject and tutor you are interested in. Then select a time the tutor is available to book an appointment</Typography>
                </Box>
            </div>
            <div className='flex justify-center' style={{backgroundColor: 'rgba(217, 217, 217, 0.37)', height: '100%', width: '70%', paddingTop: '6rem'}}>
                <div className='flex flex-col justify-around w-8/12'>
                    <div className='flex flex-row justify-between w-7/12'>
                        <Typography fontFamily='Inter'>Tutoring Subject</Typography>
                        <Autocomplete
                            id="subject"
                            ListboxProps={{
                                style:{
                                    maxHeight: '30vh',
                                    fontFamily: 'Poppins'
                                }
                            }}
                            inputValue={subject}
                            onInputChange={handleSubjectChange}
                            // filterOptions={filterSubject}
                            options={subjects}
                            getOptionLabel={(option: string) => option}
                            sx={{ width: 200, ml: 2 }}
                            renderInput={(params) =>
                                <TextField 
                                    {...params}
                                    variant='filled'
                                    size='small'
                                    label="Subject" />
                            }
                        />
                    </div>
                    <div className='flex flex-row justify-between w-7/12'>
                        <Typography fontFamily='Inter'>Tutor</Typography>
                        <Autocomplete
                            id="tutor"
                            ListboxProps={{
                                style:{
                                    maxHeight: '30vh',
                                    fontFamily: 'Poppins'
                                }
                            }}
                            inputValue={tutor}
                            onInputChange={handleTutorChange}
                            options={names}
                            getOptionLabel={(option: string) => option}
                            sx={{ width: 200, ml: 2 }}
                            renderInput={(params) =>
                                <TextField 
                                    {...params}
                                    variant='filled'
                                    size='small'
                                    label="Tutor" />
                            }
                        />
                    </div>
                    <div className='flex flex-row justify-between w-10/12'>
                        <Typography mt={2.5} fontFamily='Inter'>Available date</Typography>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DateCalendar
                                sx={{fontFamily: 'Poppins'}}
                                value={value}
                                disablePast
                                onChange={(newValue) => setValue(newValue)}
                                showDaysOutsideCurrentMonth 
                                fixedWeekNumber={5} 
                                views={['year', 'month', 'day']}/>
                        </LocalizationProvider>
                    </div>
                    <div className='flex flex-col'>
                        <Typography fontFamily='Inter' textTransform='none'>Write a note to your tutor about what you want to learn</Typography>
                        <TextField
                        InputProps={{style: {background: 'white'}}}
                        value={extraInfo}
                        required
                        id="note"
                        variant='filled'
                        label=""
                        sx={{width: '100%'}}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            setExtraInfo(event.target.value);
                        }}
                        />
                    </div>
                    <div className='flex flex-row justify-center'>
                        <Button sx={{backgroundColor: '#A6CAA9', color: 'black', ml: 2, '&:hover': {
                                    backgroundColor: 'black',
                                    color: '#A6CAA9',
                        }}} disabled={subject === '' || tutor === '' || value === null || value === undefined} variant="contained" onClick={() => {
                            alert("Subject: " + subject + "\n Tutor: " + tutor + "\n Date: " + value?.toDate())
                        }}>
                            <Typography fontFamily='Inter' textTransform='none'>Create Appointment</Typography>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
