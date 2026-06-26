import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function Footer() {
  return (
    <Box component="footer" sx={{ borderTop: '1px solid #ddd', py: 3, mt: 4 }}>
      <Container maxWidth="xl">
        <Typography variant="body2" color="text.secondary" align="center">
          © 2026 Каталог университетов. Надеюсь ваши права не ущемлены.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;