import { Box, Typography, Button, Grid, TextField } from '@mui/material';

import "@fontsource/playfair-display";
import "@fontsource/inter";
import '@fontsource/inter';
import '@fontsource/inter/300.css';
import { useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { DatePicker } from '@mui/x-date-pickers';

export default function ProfilePage() {
    const [value, setValue] = useState<Dayjs | null>(dayjs(new Date()));
    const MAX_AGE = 100;
    const MIN_AGE = 18;

    return (
        <div className='flex flex-row' style={{height: '90vh', width: '100vw',}}>
            <div style={{backgroundColor: 'rgba(217, 217, 217, 0.37)', width:'40%', paddingLeft: '4rem', paddingTop: '6rem', height: '100%'}}>
                <Box>
                    <Typography fontFamily='playfair-display' fontSize={55} >Profile</Typography>
                    <Typography fontFamily='Inter' fontSize={20} fontWeight={'regular'}>Student Account</Typography>
                </Box>
            </div>
            <div className='flex flex-row justify-center' style={{height: '80%', width: '70%', paddingTop: '6rem'}}>
                <div className='flex flex-col justify-around w-7/12'>
                    <TextField
                    required
                    id="firstName"
                    label="First Name"
                    sx={{width: '100%'}}
                    />
                    <TextField
                    required
                    id="lastName"
                    label="Last Name"
                    sx={{width: '100%'}}
                    />
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                        label="Date of birth"
                        value={value}
                        onChange={(newValue) => setValue(newValue)}
                        slotProps={{
                            textField: {
                                required: true,
                            },
                        }}
                        disableFuture
                        />
                    </LocalizationProvider>
                    <TextField
                    required
                    id="user"
                    label="Username"
                    sx={{width: '100%'}}
                    />
                    <TextField
                    required
                    id="pwd"
                    label="Password"
                    sx={{width: '100%'}}
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

