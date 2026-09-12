import { Box, Typography } from '@mui/material';
import Header from '../../components/Header/Header';
import { useState } from 'react';
import TextInput from '@/components/TextInput/TextInput';
import AddProductButton from '@/components/AddProductButton/AddProductButton';

const Budget = () => {
  const [productName, setProductName] = useState<string>('');
  const [segundProductName, setSegundProductName] = useState<string>('');

  const handleSend = () => {
    fetch('http://localhost:3000/budget', {
      method: 'POST',
      body: JSON.stringify({ productName: productName, segundProductName: segundProductName }),
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
            paddingTop: 1,
            boxSizing: 'border-box',
            border: '1px solid #bdbcbc65',
            boxShadow: '0 20px 40px rgba(167, 164, 164, 0.15)',
          }}
        >
          <Box sx={{ mb: 2 }}>
            <Typography
              sx={{
                fontFamily: 'system-ui',
                fontSize: '30px',
                fontWeight: 600,
              }}
            >
              Novo Orçamento
            </Typography>
            <Typography sx={{ fontFamily: 'system-ui', fontSize: '15px', color: '#959393' }}>
              Preencha os dados para gerar o orçamento
            </Typography>
          </Box>
          <TextInput
            label="Digite o nome do cliente"
            fontFamily="system-ui"
            fontSize="30px"
            size="small"
            variant="outlined"
            value={productName}
            onChange={(event) => setProductName(event.target.value)}
          />

          <TextInput
            label="Digite o produto"
            fontFamily="system-ui"
            fontSize="30px"
            size="small"
            variant="outlined"
            value={segundProductName}
            onChange={(event) => setSegundProductName(event.target.value)}
          />

          <AddProductButton
            variant="contained"
            color="error"
            size="small"
            onClick={handleSend}
            sx={{ marginLeft: 'auto' }}
          >
            Adicionar
          </AddProductButton>
        </Box>
      </Box>
    </>
  );
};

export default Budget;
