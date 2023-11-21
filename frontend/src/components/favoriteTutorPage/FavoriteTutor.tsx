import React, { useState } from 'react';
import { Box, Typography, Button, Avatar} from '@mui/material';
import { Dialog, DialogContent, DialogActions } from '@mui/material';

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
    const [tutors, setTutors] = useState<readonly Tutors[]>([
        { name: 'Lokesh', topic: 'CS' },
        { name: 'Ben', topic: 'Math' },
        { name: 'Preesha', topic: 'English' },
      ]);
    
    const [selectedTutor, setSelectedTutor] = useState<Tutors | null>(null);
    const [isDeleteDialogOpen, setDeleteDialogOpen] = useState(false);
  
    const handleDeleteClick = (tutor: Tutors) => {
      setSelectedTutor(tutor);
      setDeleteDialogOpen(true);
    };
  
    const handleCancelDelete = () => {
      setDeleteDialogOpen(false);
      setSelectedTutor(null);
    };
  
    const handleConfirmDelete = () => {
      if (selectedTutor) {
        const updatedTutors = tutors.filter((tutor) => tutor !== selectedTutor);
        setTutors(updatedTutors);
        setDeleteDialogOpen(false);
        setSelectedTutor(null);
      }
    };

    return (
        <div className='flex flex-row' style={{height: '100vh', width: '100vw',}}>
            <div style={{paddingLeft: '4rem', paddingTop: '6rem'}}>
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
                                            <Button 
                                                href={'/appointments/book'}
                                                sx={{backgroundColor: '#A6CAA9', color: 'black', mr:2, height: '30px'}}>
                                                <Typography fontFamily='Inter' textTransform='none'>Book</Typography>
                                            </Button>
                                            <Button 
                                                onClick={() => handleDeleteClick(tutor)}
                                                sx={{backgroundColor: '#F0B8B8', color: 'black', height: '30px', '&:hover': {
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

             {/* Delete Confirmation Dialog */}
            <Dialog open={isDeleteDialogOpen} onClose={handleCancelDelete}>
                <DialogActions>
                    <DialogContent>
                        <Typography fontFamily={'Inter'} sx={{ fontWeight: 'normal', textAlign: 'center', mb: 2 }}>
                            Are you sure you want to delete{' '}
                            <Typography component="span" fontFamily={'Inter'} sx={{ color: '#7D729E', fontWeight: 'bold' }}>
                            {selectedTutor?.name}
                            </Typography>
                            ?
                        </Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                            <Button onClick={handleCancelDelete} sx={{ mr: 2 }}>Cancel</Button>
                            <Button onClick={handleConfirmDelete} sx={{ backgroundColor: '#F0B8B8', color: 'black' }}>Delete</Button>
                        </Box>
                    </DialogContent>
                </DialogActions>
            </Dialog>
        </div>
    );
}
