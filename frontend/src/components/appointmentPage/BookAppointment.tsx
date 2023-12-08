import { Box, Typography, Button, Grid, TextField, Autocomplete } from '@mui/material';

import "@fontsource/playfair-display";
import "@fontsource/inter";
import '@fontsource/inter';
import '@fontsource/inter/300.css';
//import '@fontsource/poppins';
import { useEffect, useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers';
import { useLocation } from 'react-router-dom';
import API_URL from '../FakeENV';

interface Tutors {
    tutorId: number;
    topic: string;
    name: string;
    availableHours: string[];
}

export default function BookAppointment() {
    const location = useLocation();
    const { tutorName, tutorSubject } = location.state;
    const [subject, setSubject] = useState('');
    const [tutor, setTutor] = useState('');
    const [value, setValue] = useState<Dayjs | null>();
    const [userTime, setUserTime] = useState<string>('');
    const [tutors, setTutors] = useState<Tutors[]>([]);

    const availableTimes = [
        '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM',
        '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', 
        '5:00 PM', '6:00 PM', '7:00 PM',
    ];

    const [names, setNames] = useState<string[]>([]);
    const [subjects, setSubjects] = useState<string[]>([]);
    const [times, setTimes] = useState<string[]>([]);
    

    const [selectedTime, setSelectedTime] = useState<string>('');
  
    // Function to handle date change
    const handleDateChange = (newValue: Dayjs | null) => {
        if (value) {
            if (!dayjs(newValue).isSame(value, 'day')) {
                setValue(newValue);
                setSelectedTime('0');
                timeGenerator();
                setUserTime('');
            }
        } else {
            setUserTime('');
            setValue(newValue);
            setSelectedTime('0');
            timeGenerator()
        }
    };

    const handleSubjectChange = (event: any, newSubject: string) => { // React.ChangeEvent<{}>
        setSubject(newSubject ?? '');
    };

    const handleTutorChange = (event: any, newTutor: string) => { // React.ChangeEvent<{}>
        setTutor(newTutor);
    };

    const apiUrl = API_URL() + '/tutors';
    useEffect(() => {
        // For sake of logging in, do johndoe@gmail.com and Password123$
    
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
            const tutorArray = data.map((value: any) => ({
                name: value.firstName + " " + value.lastName,
                topic: value.subjectList[0],
                availableHours: value.availableHours,
                tutorId: value.id
            }));

            const subjectsToAdd = tutorArray.filter((subj: any) => !subjects.includes(subj.topic));
            const namesToAdd = tutorArray.filter((subj: any) => !names.includes(subj.name));
            
            setSubjects(subjectsToAdd.map((subj: any) => subj.topic));
            setNames(namesToAdd.map((subj: any) => subj.name));

            setTutor(tutorName);
            setSubject(tutorSubject);

            handleSubjectChange("", tutorSubject);
            handleTutorChange("", tutorName);

            setTutors(tutorArray);
          })
          .catch(error => {
            console.error('Fetch error:', error);
          });
      }, []);

      useEffect(() => {
        if (subject !== '') {
            const namesToAdd = tutors.filter((subj: Tutors) => subj.topic === subject);
            setNames(namesToAdd.map((subj: any) => subj.name));
        } else {
            setNames(tutors.map((subj: Tutors) => subj.name));
            setSubjects(tutors.map((subj: Tutors) => subj.topic));
        }
      }, [subject]);

      useEffect(() => {
        if (tutor !== '') {
            const namesToAdd = tutors.filter((subj: Tutors) => subj.name === tutor);
            setSubjects(namesToAdd.map((subj: any) => subj.topic));
        } else {
            setNames(tutors.map((subj: Tutors) => subj.name));
            setSubjects(tutors.map((subj: Tutors) => subj.topic));
        }
      }, [tutor]);

      const timeGenerator  = () => {
        const size = Math.floor(Math.random() * 5) + 1;
        let tms: string[] = [];
        while (tms.length != size) {
            let randomIndex = Math.floor(Math.random() * availableTimes.length);
            if (!tms.includes(availableTimes[randomIndex])) {
                tms.push(availableTimes[randomIndex]);
            }
        }
        
        tms.sort(sortByTime)
        setTimes(tms);
      };

      // Custom sorting function
    const sortByTime = (a: string, b: string) => {
        const timeA = new Date('2021-01-01 ' + a);
        const timeB = new Date('2021-01-01 ' + b);
        return timeA.getTime() - timeB.getTime();
    };

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
                            value={subject}
                            onInputChange={handleSubjectChange}
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
                            value={tutor}
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
                    <div className='flex flex-col justify-between w-10/12'>
                        <Typography mt={2.5} fontFamily='Inter'>Available date</Typography>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DateCalendar
                                sx={{fontFamily: 'Poppins'}}
                                value={value}
                                disablePast
                                onChange={handleDateChange}
                                showDaysOutsideCurrentMonth 
                                fixedWeekNumber={5} 
                                views={['year', 'month', 'day']}/>
                        </LocalizationProvider>
                        {selectedTime && (
                            <div style={{display: 'flex', justifyContent: 'center'}}>
                                {times.map((value, index) => (
                                    <Button sx={{
                                        backgroundColor: 'rgb(126, 114, 159, 0.5)',
                                        width: '15%',
                                        padding: '0.2em',
                                        borderRadius: 2,
                                        textAlign: 'center',
                                        margin: '0.5em',
                                        mt: 2.5,
                                        color: 'black'
                                        }}
                                        onClick={() => setUserTime(value)}
                                        >
                                        <Typography
                                            key={index}
                                            fontFamily='Inter'
                                        >
                                            {value}
                                        </Typography>
                                    </Button>
                                ))}
                          </div>
                        )}
                    </div>
                    <div className='flex flex-row justify-center'>
                        <Button sx={{backgroundColor: '#A6CAA9', color: 'black', ml: 2, '&:hover': {
                                    backgroundColor: 'black',
                                    color: '#A6CAA9',
                        }}} disabled={subject === '' || tutor === '' || value === null || value === undefined || userTime === ''} variant="contained" onClick={() => {
                            //alert("Subject: " + subject + "\n Tutor: " + tutor + "\n Date: " + value?.toDate() + "\n Time: " + userTime)
				let current = localStorage.getItem("appointments") || "";
				let studentName = localStorage.getItem("firstName") + " " + localStorage.getItem("lastName");
				current += studentName+","+tutor+","+subject+","+value?.toDate()+","+userTime + "$";
				console.log(current);
				localStorage.setItem("appointments", current);
                        }}>
                            <Typography fontFamily='Inter' textTransform='none'>Create Appointment</Typography>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
