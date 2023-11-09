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
    <AppBar position="absolute">
      <Container maxWidth={false} sx={{color: 'black',backgroundColor: '#D9F4EF', width: '100vw'}}>
        <Toolbar disableGutters>
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
			<Box>
            {['Find Tutor', 'Favorites', 'Appointments', 'Profile'].map(text => (
              <Button key={text} href={'/'+text.replace(/\s/g, "").toLowerCase()} sx={{ textTransform: 'none', marginRight: 5 }}>
                <Typography color='black' fontFamily='Inter'>{text}</Typography>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
