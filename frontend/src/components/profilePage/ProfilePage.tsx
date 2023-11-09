import { Box, Typography, Button, Grid, TextField } from '@mui/material';

import "@fontsource/playfair-display";
import "@fontsource/inter";
import '@fontsource/inter';
import '@fontsource/inter/300.css';
import { useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers';

export default function ProfilePage() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [value, setValue] = useState<Dayjs | null>(dayjs(new Date()));
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    
    return (
        <div className='flex flex-row' style={{height: '100vh', width: '100vw',}}>
            <div style={{backgroundColor: 'rgba(217, 217, 217, 0.37)', width:'40%', paddingLeft: '4rem', paddingTop: '6rem', height: '100%'}}>
                <Box>
                    <Typography fontFamily='Playfair Display' fontSize={60} fontWeight='medium'>Profile</Typography>
                    <Typography fontFamily='Inter' fontSize={20} fontWeight={'regular'}>Student Account</Typography>
                </Box>
            </div>
            <div className='flex justify-center' style={{height: '80%', width: '70%', paddingTop: '6rem'}}>
                <div className='flex flex-col justify-around w-7/12'>
                    <TextField
                    required
                    variant='filled'
                    id="firstName"
                    label="First Name"
                    value={firstName}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setFirstName(event.target.value);
                    }}
                    sx={{width: '100%'}}
                    />
                    <TextField
                    required
                    id="lastName"
                    variant='filled'
                    label="Last Name"
                    sx={{width: '100%'}}
                    value={lastName}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setLastName(event.target.value);
                    }}
                    />
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                        label="Date of birth"
                        value={value}
                        onChange={(newValue) => setValue(newValue)}
                        slotProps={{
                            textField: {
                                variant: "filled",
                                required: true,
                            },
                        }}
                        disableFuture
                        />
                    </LocalizationProvider>
                    <TextField
                    variant='filled'
                    required
                    id="user"
                    label="Username"
                    sx={{width: '100%'}}
                    value={userName}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setUserName(event.target.value);
                    }}
                    />
                    <TextField
                    required
                    id="pwd"
                    variant='filled'
                    label="Password"
                    type='password'
                    sx={{width: '100%'}}
                    value={password}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setPassword(event.target.value);
                    }}
                    />
                    <div className='flex flex-row w-full'>
                        <Button sx={{color: 'black', borderColor: '#7E729F', '&:hover': {
                                color: '#fff',
                                backgroundColor: '#7E729F',
                                border: 'none'
                        }}} variant="outlined">
                            <Typography fontFamily='Inter' textTransform='none'>Cancel</Typography>
                        </Button>
                        <Button sx={{backgroundColor: '#7E729F', ml: 2, '&:hover': {
                                backgroundColor: '#fff',
                                color: '#7E729F',
                        }}} variant="contained">
                            <Typography fontFamily='Inter' textTransform='none'>Save Changes</Typography>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
