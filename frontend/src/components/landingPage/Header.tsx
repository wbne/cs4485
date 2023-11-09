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
  return (
    <AppBar position="absolute" sx={{backgroundColor: "white", }} >
      <Container maxWidth={false} sx={{color: 'black', width: '100vw'}}>
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
							href="/"
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
					<Button variant="outlined" href="/login" sx={{color: 'black', border: '1.5px solid #7E729F', marginRight: 2}}>
						<Typography fontFamily='Inter' textTransform='none'>Login as Student</Typography>
					</Button>
					<Button variant="outlined" href="/tutor/login" sx={{color: 'black', border: '1.5px solid #7E729F'}}>
						<Typography fontFamily='Inter' textTransform='none'>Login as Tutor</Typography>
					</Button>
				</Box>
		  </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
