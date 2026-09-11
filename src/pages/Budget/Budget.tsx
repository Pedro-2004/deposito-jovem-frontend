import { Box, TextField, Button } from '@mui/material';
import Header from '../../components/Header/Header';
import { useState } from 'react';

const Budget = () => {
  const [productName, setProductName] = useState<string>('');

  const handleSend = () => {
    fetch('http://localhost:3000/budget', {
      method: 'POST',
      body: JSON.stringify({ productName: productName }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
          paddingTop: '64px',
          boxSizing: 'border-box',
        }}
      >
        <Header />

        <Box
          sx={{
            width: '80%',
            maxWidth: '1000px',
            minHeight: '50vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: 2,
            padding: 4,
            boxSizing: 'border-box',
            border: '3px solid #0a0a0a',
            boxShadow: '0 20px 40px rgba(167, 164, 164, 0.15)',
          }}
        >
          <TextField
            label="Nome do produto"
            size="small"
            value={productName}
            onChange={(event) => setProductName(event.target.value)}
          />
          <Button variant="outlined" onClick={handleSend}>
            {' '}
            Enviar dados para o back{' '}
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Budget;
