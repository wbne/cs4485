import {Typography, Grid, Box } from '@mui/material';

import "@fontsource/playfair-display";
import "@fontsource/inter";
import '@fontsource/inter';
import '@fontsource/inter/300.css';

// Define the data for each box
const boxesData = [
	{ number: 34, text: "hours tutored" },
	{ number: 6, text: "students tutored since your first day" },
	{ number: 7, text: "sessions this week" }
  ];

export default function TutorHome() {
	const firstName = localStorage.getItem("firstName");
	
  return (
		<div style={{ backgroundColor: 'white', paddingTop: '4rem'}}>
			<Box 
				display="flex" 
				flexDirection="column" 
				justifyContent="center"  
				height="30vh" 
				alignItems="center"
			>
   				<Typography fontFamily='Playfair Display' sx={{fontSize:{xs:60, md:80}}} fontWeight='medium'>Welcome, Tutorkeshian {firstName}!</Typography>
    			<Typography fontFamily='Inter' sx={{fontSize:{xs:20, md:30}}} fontWeight='normal'>Continue making on impact on the next generation!</Typography>
			</Box>
			
			
			<Grid
				container
				direction="row"
				alignItems="center"
				justifyContent="space-around"
				sx={{
					height: '60vh',
					width: '80%',
					margin: '0 auto'
				}}
			>
				{boxesData.map((box, index) => (
					<Grid 
						item 
						//xs={3} 
						key={index}
						sx={{
							backgroundColor: '#D9D9D95E',
							borderRadius: '10px',
							height: '50vh',
							width: '22vw',
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
							padding: '1rem',
							gap: '1rem'
						}}
					>
						<Typography fontFamily='Inter' sx={{fontSize:{xs:90, md:130}}} fontWeight='medium' color='#7D729E'>{box.number}</Typography>
						<Typography fontFamily='Inter' sx={{fontSize:{xs:20, md:30}}} fontWeight='light'align='center'>{box.text}</Typography>
					</Grid>
				))}	
				
			</Grid>
		</div>
  );
}

