import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import "@fontsource/playfair-display";
import "@fontsource/inter";

function TutorHeader() {
  return (
    <AppBar position="static">
      <Container maxWidth="xl" sx={{color: 'black',backgroundColor: '#D9F4EF'}}>
        <Toolbar disableGutters>
			<Box display='flex' flexGrow={1}>
				<Typography
					variant="h6"
					noWrap
					component="a"
					href="./home"
					sx={{
					ml: 5,
					display: { xs: 'none', md: 'flex' }
					}}
				>
					<Typography variant='h4' color='inherit' fontFamily='Playfair Display' fontWeight={600}>
						Tutorkesh - Tutor View
					</Typography>
				</Typography>
			</Box>
			<Box>
			<>
		      <Button key="Appointments" href="./appointments" sx={{ textTransform: 'none', marginRight: 5 }}>
			<Typography color='black' fontFamily='Inter'>Appointments</Typography>
		      </Button>
		      <Button key="Profile" href="./profile" sx={{ textTransform: 'none', marginRight: 5 }}>
			<Typography color='black' fontFamily='Inter'>Profile</Typography>
		      </Button>
			</>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default TutorHeader;
