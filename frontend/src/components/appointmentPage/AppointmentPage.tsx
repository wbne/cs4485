import React from 'react';
import { Box, Typography, Button, Grid, styled } from '@mui/material';
import { appointments} from './apptData';

import "@fontsource/playfair-display";
import "@fontsource/inter";
import '@fontsource/inter';
import '@fontsource/inter/300.css';

const AppointmentsBox = styled(Box)(({ theme }) => ({
    backgroundColor: '#D9D9D9',
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
    display: 'flex',
    flexDirection:'column',
    flexGrow: 1,
    borderRadius: 8,
    marginRight: theme.spacing(2),
}));

const AppointmentsPage = () => {
    return (
        <div className='flex' style={{height: '90vh', width: '100vw',}}>
            <Box padding={4}>   
                <Box padding={2}>
                    <Typography fontFamily='Playfair Display' sx={{fontSize:{xs:40, md:60}, mb: 2}} fontWeight='medium'>Appointments</Typography>
                    <Button href={'/appointments/book'}sx={{backgroundColor: '#7D729E', color: 'white', mr:4, height: '40px', textTransform: 'none'}}>
                        <Typography fontFamily='Inter' fontWeight='light'>Book New Appointment</Typography>
                    </Button>
                </Box>

                <Box padding={2}>
                    <Typography fontFamily='Inter' fontWeight='bold' sx={{fontSize:{xs:15, md:20}, mb: 2}}>View Upcoming Tutoring Appointments</Typography>
                    
                    <Grid container spacing={2} style={{display: 'flex'}}>
                        {appointments.map((appointment, index) => (
                            <Grid item sm={6} md={4} key={index} style={{display: 'flex'}}>
                                <AppointmentsBox>
                                    <Box flexGrow={1}>
                                        <Typography fontFamily='Inter' fontWeight='normal' color={'#7D729E'}>{appointment.date}</Typography>
                                        <Typography fontFamily='Inter' fontWeight='normal' color={'#7D729E'} sx={{mb: 2}}>{appointment.time}</Typography>
                                        <Typography fontFamily='Inter' fontWeight= 'bold' color= 'black'>{appointment.tutorName}</Typography>
                                        <Typography fontFamily='Inter' fontWeight= 'normal' color= 'black'>{appointment.topic}</Typography>
                                        <Typography fontFamily='Inter' fontWeight="lighter" sx={{fontSize: '13px'}}>{appointment.notes}</Typography>
                                    </Box>
                                    <Box display="flex" justifyContent="center" marginTop={2}>
                                        <Button variant="contained" sx={{backgroundColor: "#A5CAA9", color: 'black', mr: 2}}>Meet</Button>
                                        <Button variant="contained" sx={{backgroundColor: "#F0B8B8", color: 'black', ml: 2}}>Cancel</Button>
                                        
                                    </Box>
                                </AppointmentsBox>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Box>
        </div>
    );
};

export default AppointmentsPage;
