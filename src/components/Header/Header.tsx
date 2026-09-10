import { AppBar, Toolbar, Typography, Box } from '@mui/material';

const Header = () => {
  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: '	#DC143C', paddingBottom: '12px' }}>
        <Toolbar sx={{ gap: 2, display: 'flex', alignItems: 'center' }}>
          <Box sx={{ marginLeft: 12 }}>
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
                fontSize: '40px',
                lineHeight: 1.1,
              }}
            >
              jovem
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
