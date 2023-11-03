import { Box, Typography, Button, TextField, Autocomplete, Avatar, styled, alpha, TextFieldProps, OutlinedInputProps, OutlinedInput } from '@mui/material';

import "@fontsource/playfair-display";
import "@fontsource/inter";
import '@fontsource/inter';
import '@fontsource/inter/300.css';
import pfp from '../../assets/pfp_temp.jpg';

interface Tutors {
    name: string;
    topic: string
}

export default function FavoriteTutorPage() {
    const tutors: readonly Tutors[] = [
        {name: 'Lokesh', topic: 'CS'},
        {name: 'Ben', topic: 'Math'},
        {name: 'Preesha', topic: 'English'}
    ];
    
    return (
        <div className='flex flex-row' style={{height: '90vh', width: '100vw',}}>
            <div style={{paddingLeft: '4rem', paddingTop: '2rem'}}>
                <Box>
                    <Typography fontFamily='Playfair Display' fontSize={40} fontWeight='medium'>Favorite Tutors</Typography>
                </Box>
                <div className='flex flex-col justify-center'>
                    {tutors.map((tutor: Tutors, index: number) => {
                       
                            return (
                                <Box key={index} sx={{width: '80vw', mt: 5, background: 'rgba(217, 217, 217, 0.37)', borderRadius: 4}}>
                                    <div className='flex flex-row justify-between mt-3 mb-3'>
                                        <div className='flex flex-row pl-2'>
                                            <Avatar sx={{width: 56, height: 56, mt: 1}} alt={tutor.name} src={pfp} />
                                            <div className='pl-3 flex flex-col'>
                                                <Typography fontSize={20} fontWeight='bold' fontFamily={'Inter'} sx={{marginBottom: 1}}>{tutor.name}</Typography>
                                                <Typography fontSize={15} fontWeight='normal' fontFamily={'Inter'} sx={{marginBottom: 1}}><span style={{ backgroundColor: '#D9D9D9', padding: 5, borderRadius: 5 }}>{tutor.topic}</span></Typography>
                                                <Typography fontSize={15} fontWeight='lighter' fontFamily={'Inter'}>More Information</Typography>
                                            </div>
                                        </div>
                                        <div className='pr-5'>
                                            <Button sx={{backgroundColor: '#A6CAA9', color: 'black', mr:2, height: '30px'}}>
                                                <Typography fontFamily='Inter' textTransform='none'>Book</Typography>
                                            </Button>
                                            <Button sx={{backgroundColor: '#F0B8B8', color: 'black', height: '30px', '&:hover': {
                                                backgroundColor: 'white',
                                                color: '#black'
                                            }}}>
                                                <Typography fontFamily='Inter' textTransform='none'>Delete</Typography>
                                            </Button>
                                        </div>
                                    </div>
                                </Box>
                            );
                        })}
                </div>
            </div>
        </div>
    );
}
