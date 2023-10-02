import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import "@fontsource/playfair-display";
import "@fontsource/inter";

export default function ResponsiveAppBar() {
  return (
    <AppBar position="static">
      <Container maxWidth="xl" sx={{color: 'black',backgroundColor: 'white'}}>
        <Toolbar disableGutters>
			<Box display='flex' flexGrow={1}>
				<Typography
					variant="h6"
					noWrap
					component="a"
					href="#app-bar-with-responsive-menu"
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
          <Box>
			<Button variant="outlined" sx={{color: 'black', border: '1.5px solid #7E729F', marginRight: 2}}>
				<Typography fontFamily='Inter' textTransform='none'>Login as Student</Typography>
			</Button>
			<Button variant="outlined" sx={{color: 'black', border: '1.5px solid #7E729F', marginRight: 5}}>
				<Typography fontFamily='Inter' textTransform='none'>Login as Tutor</Typography>
			</Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
