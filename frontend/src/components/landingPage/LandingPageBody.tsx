import { Box, Typography, Button, Grid } from '@mui/material';

import "@fontsource/playfair-display";
import "@fontsource/inter";
import '@fontsource/inter';
import '@fontsource/inter/300.css';
import boy from '../../assets/dude.png';

export default function LandingPageBody() {
	
  return (
		<div style={{ backgroundColor: '#D9F4EF'}}>
			<Grid
				container
				direction="row"
				alignItems="center"
				justifyContent="space-around"
				sx={{height: '90vh'}}
			>
				<Grid item xs={3}>
					<Box width='500px' >
							<Typography fontFamily='Inter' fontSize={62} fontWeight='bold' sx={{lineHeight: 1.25, mb: 3}}>Start Learning More.</Typography>
							<Typography fontFamily='Inter' fontSize={20} fontWeight={'light'}>Find a tutor that best fits your needs at your time.</Typography>
							<Typography fontFamily='Inter' fontSize={20} fontWeight={'light'}> Create an account and connect with our top tutors today!</Typography>
							<Box mt='40px'/>
							<Button variant='contained' href="/newstudent" sx={{backgroundColor: '#7E729F', textAlign: 'center'}}>
								<Typography width='200px' fontFamily='Inter' fontSize='20px' textTransform='none'>Join as Student</Typography>
							</Button>
							<Box mt='25px'/>
							<Button variant='contained' href="/newtutor" sx={{backgroundColor: '#7E729F', textAlign: 'center'}}>
								<Typography width='200px' fontFamily='Inter' fontSize='20px' textTransform='none'>Join as Tutor</Typography>
							</Button>
					</Box>
				</Grid>
				<img src={boy} width='550px' height='550px' alt="dude looking through monitor" style={{ marginLeft: '-100px' }} />
			</Grid>
		</div>
  );
}
