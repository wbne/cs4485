import React from 'react';
import { Box, Typography, Button, Grid, styled } from '@mui/material';
import { appointments } from './apptData';

import "@fontsource/playfair-display";
import "@fontsource/inter";
import '@fontsource/inter';
import '@fontsource/inter/300.css';

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
    return (
        <div className='flex' style={{ height: '90vh', width: '100vw', }}>
            <Box padding={2}>
                <Box padding={2}>
                    <Typography fontFamily='Playfair Display' sx={{ fontSize: { xs: 40, md: 60 }, mb: 2 }} fontWeight='medium'>Appointments</Typography>
                    <Button href={'/appointments/book'} sx={{
                        backgroundColor: '#7D729E',
                        color: 'white',
                        mr: 4,
                        height: '40px',
                        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                        textTransform: 'none', '&:hover': { backgroundColor: 'white', color: '#7D729E' }
                    }}>
                        <Typography fontFamily='Inter' fontWeight='light'>Book New Appointment</Typography>
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
