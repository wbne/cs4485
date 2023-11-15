import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers';

const availableTimes = [
  '8:00 AM', '8:30 AM', '9:00 AM', '9:30 AM',
  '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM',
  '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM',
  '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM',
];

const TutorAvailability = () => {
  const [value, setValue] = useState<Dayjs | null>();
  const [open, setOpen] = useState(false);
  const [selectedTimes, setSelectedTimes] = useState<{ [date: string]: string[] }>({});

  const handleDateChange = (newValue: Dayjs | null) => {
    setValue(newValue);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleToggleTime = (time: string) => {
    const currentDate = value?.format('YYYY-MM-DD');

    if (!currentDate) {
      return;
    }

    setSelectedTimes((prevSelectedTimes) => {
      const currentTimes = prevSelectedTimes[currentDate] || [];
      const newTimes = currentTimes.includes(time)
        ? currentTimes.filter((selectedTime) => selectedTime !== time)
        : [...currentTimes, time];

      return {
        ...prevSelectedTimes,
        [currentDate]: newTimes,
      };
    });
  };

  const getSelectedTimesForDate = (date: string): string[] => {
    return selectedTimes[date] || [];
  };

  return (
    <div style={{ height: '100%', width: '100vw' }}>
      <div style={{ paddingLeft: '4rem', paddingTop: '6rem', height: '100%' }}>
        <Box>
          <Typography fontFamily='Playfair Display' fontSize={60} fontWeight='medium' sx={{ lineHeight: 1, marginBottom: 3 }}>
            Availabilities
          </Typography>
          <Typography fontFamily='Inter' width="80%" fontSize={18} fontWeight={'regular'}>
            Select a date to view and update your available times. Tutoring sessions are in 30-minute intervals.
          </Typography>
        </Box>
      </div>

      <div className="flex flex-row justify-center" style={{ width: '80%', paddingTop: '3rem', paddingLeft: '4rem' }}>
        <div className="flex flex-col" style={{ marginRight: '0x', marginLeft: '0' }}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar
              sx={{
                fontFamily: 'Poppins',
                justifyContent: 'center',
                '& .MuiPickersDay-root.Mui-selected': {
                  backgroundColor: '#7E729F !important',
                },
              }}
              value={value}
              disablePast
              onChange={handleDateChange}
              showDaysOutsideCurrentMonth
              fixedWeekNumber={5}
              views={['year', 'month', 'day']}
            />
          </LocalizationProvider>

          <Button
            sx={{ backgroundColor: '#A6CAA9', color: 'black', ml: 2, '&:hover': { backgroundColor: 'white', color: '#A6CAA9' } }}
            variant="contained"
            onClick={handleOpen}
          >
            <Typography fontFamily='Inter' textTransform='none'>
              {value ? `Update ${value.format('MMMM D, YYYY')}` : 'Update Times'}
            </Typography>
          </Button>
        </div>

        <div className='flex flex-wrap justify-center' style={{ width: '40%', height: '50%', marginLeft: '100px' }}>
          {getSelectedTimesForDate(value?.format('YYYY-MM-DD') || '').map((time) => (
            <Box key={time} bgcolor="rgba(126, 114, 159, 0.4)" p={1} borderRadius={2} height={40} style={{ margin: '6px' }}>
              <Typography>{time}</Typography>
            </Box>
          ))}
        </div>
      </div>

      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogTitle fontFamily='Inter' fontSize={20} sx={{ textAlign: 'center' }}>Select/Deselect to Update Availability</DialogTitle>
        <DialogContent>
          <Typography fontFamily='Inter' fontSize={16} fontWeight={'bold'}>Morning:</Typography>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {availableTimes.slice(0, 8).map((time) => (
              <div key={time} onClick={() => handleToggleTime(time)} style={{ margin: '6px' }}>
                <Button
                  variant="outlined"
                  disabled={getSelectedTimesForDate(value?.format('YYYY-MM-DD') || '').includes(time)}
                  sx={{ color: '#7E729F', borderColor: '#7E729F' }}
                >
                  {time}
                </Button>
              </div>
            ))}
          </div>

          <Typography fontFamily='Inter' fontSize={16} sx={{ fontWeight: 'bold', mt: 2 }}>Afternoon:</Typography>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {availableTimes.slice(8, 16).map((time) => (
              <div key={time} onClick={() => handleToggleTime(time)} style={{ margin: '6px' }}>
                <Button
                  variant="outlined"
                  disabled={getSelectedTimesForDate(value?.format('YYYY-MM-DD') || '').includes(time)}
                  sx={{ color: '#7E729F', borderColor: '#7E729F' }}
                >
                  {time}
                </Button>
              </div>
            ))}
          </div>

          <Typography fontFamily='Inter' fontSize={16} sx={{ fontWeight: 'bold', mt: 2 }}>Evening:</Typography>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {availableTimes.slice(16).map((time) => (
              <div key={time} onClick={() => handleToggleTime(time)} style={{ margin: '6px' }}>
                <Button
                  variant="outlined"
                  disabled={getSelectedTimesForDate(value?.format('YYYY-MM-DD') || '').includes(time)}
                  sx={{ color: '#7E729F', borderColor: '#7E729F' }}
                >
                  {time}
                </Button>
              </div>
            ))}
          </div>
        </DialogContent>

        <DialogActions>
          <Button sx={{ backgroundColor: '#A6CAA9', color: 'black', mr: 2, mb: 2 }} onClick={handleClose}>Done</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default TutorAvailability;
