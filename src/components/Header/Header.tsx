import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

const Header = () => {
  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: '#8B0000', paddingBottom: '12px' }}>
        <Toolbar sx={{ minHeight: '64px', display: 'flex', alignItems: 'center' }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              marginLeft: 2,
            }}
          >
            <HomeIcon sx={{ fontSize: 72, color: 'white' }} />
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <Typography
                sx={{
                  fontFamily: 'system-ui',
                  color: 'white',
                  fontSize: '30px',
                  margin: 0,
                  lineHeight: 1.1,
                }}
              >
                Depósito
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'system-ui',
                  color: 'yellow',
                  fontWeight: 600,
                  fontSize: '45px',
                  lineHeight: 1.1,
                }}
              >
                jovem
              </Typography>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
