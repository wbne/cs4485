import React from 'react';
import { Box, Typography, Button, Grid, styled } from '@mui/material';
import { Appointments } from './AppointmentData';

import "@fontsource/playfair-display";
import "@fontsource/inter";
import '@fontsource/inter';
import '@fontsource/inter/300.css';
import { Link } from 'react-router-dom';

const AppointmentsBox = styled(Box)(({ theme }) => ({
    backgroundColor: 'rgba(217, 217, 217, 0.5)',
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    borderRadius: 8,
    marginRight: theme.spacing(2),
}));

const AppointmentsPage = () => {
	const appointments = Appointments();
    return (
        <div className='flex' style={{ height: '100vh', width: '100vw'}}>
            <Box pl={5} pt={6}>
                <Box padding={2}>
                    <Typography fontFamily='Playfair Display' sx={{ fontSize: { xs: 40, md: 60 }, mb: 2 }} fontWeight='medium'>Appointments</Typography>
                    <Button sx={{
                        backgroundColor: '#7D729E',
                        color: 'white',
                        mr: 4,
                        height: '40px',
                        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                        textTransform: 'none', '&:hover': { backgroundColor: 'white', color: '#7D729E' }
                    }}>
                        <Link to={'/appointments/book'} state={{tutorName: '', tutorSubject: ''}}>
                            <Typography fontFamily='Inter' fontWeight='light'>Book New Appointment</Typography>
                        </Link>
                    </Button>
                </Box>

                <Box padding={2} marginTop={2}>
                    <Typography fontFamily='Inter' fontWeight='bold' sx={{ fontSize: { xs: 15, md: 20 }, mb: 2 }}>View Upcoming Tutoring Appointments</Typography>

                    <Grid container spacing={2} style={{ display: 'flex' }}>
                        {appointments.map((appointment, index) => (
                            <Grid item sm={6} md={4} key={index} style={{ display: 'flex' }}>
                                <AppointmentsBox>
                                    <Box flexGrow={1}>
                                        <Typography fontFamily='Inter' fontWeight='normal' color={'#7D729E'}>{appointment.date}</Typography>
                                        <Typography fontFamily='Inter' fontWeight='normal' color={'#7D729E'} sx={{ mb: 2 }}>{appointment.time}</Typography>
                                        <Typography fontFamily='Inter' fontWeight='bold' color='black'>{appointment.tutorName}</Typography>
                                        <Typography fontFamily='Inter' fontWeight='normal' sx={{ color: 'black', marginTop: 1 }}><span style={{ backgroundColor: '#D9D9D9', padding: 5, borderRadius: 5 }}>{appointment.topic}</span></Typography>
                                        <Typography fontFamily='Inter' fontWeight="lighter" sx={{ fontSize: '13px', marginTop: 1 }}>{appointment.notes}</Typography>
                                    </Box>
                                    <Box display="flex" justifyContent="center" marginTop={2}>
                                        <Button variant="contained" sx={{
                                            backgroundColor: "#A5CAA9",
                                            color: 'black',
                                            mr: 2,
                                            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                                            '&:hover': {
                                                backgroundColor: 'rgba(165, 202, 169, 0.3)',
                                            }
                                        }}>Meet</Button>
                                        <Button variant="contained" sx={{
                                            backgroundColor: "#F0B8B8",
                                            color: 'black',
                                            ml: 2,
                                            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // Add permanent drop shadow
                                            '&:hover': {
                                                backgroundColor: 'rgba(240, 184, 184, 0.3)',
                                            }
                                        }}>Cancel</Button>
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
