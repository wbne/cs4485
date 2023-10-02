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
					<Box width='400px'>
							<Typography fontFamily='Inter' fontSize={55} fontWeight='bold'>Start Learning More.</Typography>
							<Typography fontFamily='Inter' fontSize={20} fontWeight={'light'}>Find a tutor that best fits your needs.</Typography>
							<Typography fontFamily='Inter' fontSize={20} fontWeight={'light'}> Create an account and connect with</Typography>
							<Typography fontFamily='Inter' fontSize={20} fontWeight={'light'}> a tutor today.</Typography>
							<Box mt='50px'/>
							<Button variant='contained' sx={{backgroundColor: '#7E729F'}}>
								<Typography width='200px' fontFamily='Inter' fontSize='20px' textTransform='none'>Join as Student</Typography>
							</Button>
							<Box mt='10px'/>
							<Button variant='contained' sx={{backgroundColor: '#7E729F'}}>
								<Typography width='200px' fontFamily='Inter' fontSize='20px' textTransform='none'>Join as Tutor</Typography>
							</Button>
					</Box>
				</Grid>
				<img src={boy} width='500px' height='500px' alt="dude looking through monitor"/>
			</Grid>
		</div>
  );
}
