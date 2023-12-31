import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import "@fontsource/playfair-display";
import "@fontsource/inter";
import { Grid } from '@mui/material';

export default function ResponsiveAppBar() {
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
      <Container maxWidth={false} sx={{color: 'black',backgroundColor: '#D9F4EF', width: '100vw'}}>
		<Toolbar disableGutters>
			<Grid
				container
				direction="row"
				alignItems="center"
				justifyContent="space-around"
				sx={{width: '100vw'}}
			>
				<Grid item xs={4}>
					<Box display='flex' flexGrow={1}>
						<Typography
							variant="h6"
							noWrap
							component="a"
							href="/home"
							sx={{
							ml: 5,
							display: { xs: 'none', md: 'flex' }
							}}
						>
							<Typography variant='h4' color='inherit' fontFamily='Playfair Display' fontWeight={600}>
								Tutorkesh
							</Typography>
						</Typography>
					</Box>
				</Grid>
				<Box>
					{['Find Tutor', 'Favorites', 'Appointments', 'Profile'].map(text => (
					<Button key={text} href={'/'+text.replace(/\s/g, "").toLowerCase()} sx={{ textTransform: 'none', marginRight: 5 }}>
						<Typography color='black' fontFamily='Inter'>{text}</Typography>
					</Button>
					))}
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
				</Box>
			</Grid>
		</Toolbar>
      </Container>
    </AppBar>
  );
}
