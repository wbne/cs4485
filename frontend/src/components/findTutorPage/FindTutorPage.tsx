import { Box, Typography, Button, TextField, Autocomplete, Avatar} from '@mui/material';

import "@fontsource/playfair-display";
import "@fontsource/inter";
import '@fontsource/inter';
import '@fontsource/inter/300.css';
import pfp from '../../assets/pfp_temp.jpg';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import API_URL from '../FakeENV';

interface Tutors {
    name: string;
    topic: string;
    aboutMe: string;
    id: number;
}

export default function FindTutorPage() {
    const [tutors, setTutors] = useState<readonly Tutors[]>([]);
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
                aboutMe: value.aboutMe,
		id: value.id
            }));

            setTutors(tutorArray);
          })
          .catch(error => {
            console.error('Fetch error:', error);
          });
      }, []);

    const [tutorName, setTutorName] = useState<string>('');
    const [area, setArea] = useState<string>('');

    const handleTutorChange = (event: React.ChangeEvent<{}>, newTutor: string) => {
        setTutorName(newTutor);
    };

    const filterTutor = (options: Tutors[], state: { inputValue: string }) => {
        return options
            .filter(option => option.name.toLowerCase().includes(state.inputValue.toLowerCase()))
            .sort((a, b) => a.name.localeCompare(b.name)); // Sort alphabetically
    };
    
    const handleAreaChange = (event: React.ChangeEvent<{}>, newSubject: string) => {
        setArea(newSubject);
    };

    const filterSubject = (options: Tutors[], state: { inputValue: string }) => {
        return options
            .filter(option => option.name.toLowerCase().includes(state.inputValue.toLowerCase()))
            .sort((a, b) => a.name.localeCompare(b.name)); // Sort alphabetically
    };

	const likeTutor = (event:any) => {
		let studentId = localStorage.getItem("id");;
		let tutorId = Number(event.target.id);
		fetch(API_URL() + "/users/" + studentId + "/favorites/add?tutorId=" + tutorId, {
		  method: "post",
		  headers: {
		    'Accept': 'application/json',
		    'Content-Type': 'application/json'
		  },

		})
		.then( (response) => { 
			event.target.innerHTML = "Liked!";
		});

	}
    
    return (
        <div className='flex flex-row' style={{height: '100vh', width: '100vw',}}>
            <div style={{paddingLeft: '4rem', paddingTop: '6rem'}}>
                <Box>
                    <Typography fontFamily='Playfair Display' fontSize={40} fontWeight='medium'>Find your Tutor...</Typography>
    			
                </Box>
                <div className='flex flex-row' style={{marginTop:30}}>
                    <Typography sx={{mt: 2}} fontFamily='Inter' fontWeight={'medium'} fontSize={20}>Search by: </Typography>
                    <Autocomplete
                        id="findTutor"
                        ListboxProps={{
                            style:{
                                maxHeight: '30vh',
                            }
                        }}
                        inputValue={tutorName}
                        onInputChange={handleTutorChange}
                        filterOptions={filterTutor}
                        options={tutors}
                        getOptionLabel={(option) => option.name}
                        sx={{ width: 200, ml: 2 }}
                        renderInput={(params) =>
                            <TextField 
                                {...params}
                                variant='filled'
                                size='small'
                                label="Tutor name" />
                        }
                    />
                    <Autocomplete
                        id="major"
                        ListboxProps={
                            {
                              style:{
                                  maxHeight: '30vh',
                              }
                            }
                        }
                        inputValue={area}
                        onInputChange={handleAreaChange}
                        filterOptions={filterSubject}
                        options={tutors}
                        getOptionLabel={(option) => option.topic}
                        sx={{ width: 200, ml: 2 }}
                        renderInput={(params) =>
                            <TextField 
                                {...params}
                                variant='filled'
                                size='small'
                                label="Area" />
                        }
                    />
                </div>
                <div className='flex flex-col justify-center'>
                    {tutors.map((tutor: Tutors, index: number) => {
                        if ((tutorName === '' && area === '')
                         || (tutorName !== '' && area === '' && tutor.name.includes(tutorName))
                         || (area !== '' && tutorName === '' && tutor.topic.includes(area))
                         || (tutorName !== '' && tutor.name.includes(tutorName) && area !== '' && tutor.topic.includes(area))) {
                            return (
                                <Box key={index} sx={{width: '80vw', mt: 4, background: 'rgba(217, 217, 217, 0.37)', borderRadius: 4}}>
                                    <div className='flex flex-row justify-between mt-3 mb-3'>
                                        <div className='flex flex-row pl-2'>
                                            <Avatar sx={{width: 56, height: 56, mt: 1}} alt={tutorName} src={pfp} />
                                            <div className='pl-3 flex flex-col'>
                                                <Typography fontSize={20} fontWeight='bold' fontFamily={'Inter'} sx={{marginBottom: 1}}>{tutor.name}</Typography>
                                                <Typography fontSize={15} fontWeight='normal' fontFamily={'Inter'} sx={{marginBottom: 1}}><span style={{ backgroundColor: '#D9D9D9', padding: 5, borderRadius: 5 }}>{tutor.topic}</span></Typography>
                                                <Typography fontSize={15} fontWeight='lighter' fontFamily={'Inter'}>{tutor.aboutMe}</Typography>
                                            </div>
                                        </div>
                                        <div className='pr-5'>
                                            <Link to={'/appointments/book'} state={{ tutorName: tutor.name, tutorSubject: tutor.topic }} style={{backgroundColor: '#A6CAA9', color: 'black', marginRight:2, height: '30px'}}>
                                                <Typography fontFamily='Inter' textTransform='none'>Book</Typography>
                                            </Link>
                                            <Button onClick={likeTutor} sx={{backgroundColor: '#7E729F', color: 'white', height: '30px', '&:hover': {
                                                backgroundColor: '#fff',
                                                color: '#7E729F'
                                            }}}>
                                                <Typography id={""+tutor.id} fontFamily='Inter' textTransform='none'>Like</Typography>
                                            </Button>
                                        </div>
                                    </div>
                                </Box>
                            );
                        }
                        })
                    }
                </div>
            </div>
        </div>
    );
}
