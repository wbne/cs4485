import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import "@fontsource/playfair-display";
import "@fontsource/inter";

function TutorHeader() {

	function logout() {
		localStorage.removeItem("email");
		localStorage.removeItem("firstName");
		localStorage.removeItem("id");
		localStorage.removeItem("lastLoggedIn");
		localStorage.removeItem("lastName");
		const currentURL = "" + window.location.origin;
		window.location.assign(currentURL);
		
		return "Logged Out!";
	}

  return (
    <AppBar position="absolute">
      <Container maxWidth="xl" sx={{color: 'black',backgroundColor: '#D9F4EF'}}>
        <Toolbar disableGutters>
			<Box display='flex' flexGrow={1}>
				<Typography
					variant="h6"
					noWrap
					component="a"
					href="/tutor/home"
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
		      <Button key="Appointments" href="/tutor/appointments" sx={{ textTransform: 'none', marginRight: 5 }}>
			<Typography color='black' fontFamily='Inter'>Appointments</Typography>
		      </Button>
			  <Button key="Availability" href="/tutor/availability" sx={{ textTransform: 'none', marginRight: 5 }}>
			<Typography color='black' fontFamily='Inter'>Availability</Typography>
		      </Button>
		      <Button key="Profile" href="/tutor/profile" sx={{ textTransform: 'none', marginRight: 5 }}>
			<Typography color='black' fontFamily='Inter'>Profile</Typography>
		      </Button>
					<Button
						onClick={logout}
						sx={{
							textTransform: 'none',
							marginRight: 5,
							backgroundColor: 'black',
							'&:hover': { backgroundColor: 'grey'},
						}}
						>
						<Typography color='white' fontFamily='Inter'>Log Out</Typography>
					</Button>
			</>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default TutorHeader;
