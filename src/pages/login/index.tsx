import { Grid, Typography, Stack } from '@mui/material';
import TextInput from '@/components/TextInput/TextInput';
import AddProductButton from '@/components/AddProductButton/AddProductButton';

import { useState } from 'react';

const Login = () => {
  const [password, setPassword] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  const sendData = async () => {
    await fetch('http://localhost:3000/login', {
      method: 'POST',
      body: JSON.stringify({
        password,
        email,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };
  return (
    <Grid
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      <Grid
        sx={{
          border: '1px solid #282727b9',
          width: '50vh',
          height: '80vh',
          textAlign: 'center',
          marginTop: '25px',
        }}
      >
        <Typography sx={{ fontFamily: 'arial', fontSize: '20px', marginTop: '20px' }}>
          Login de usuário
        </Typography>

        <Stack sx={{ marginTop: '20%', marginX: '20px' }}>
          <Typography>Senha</Typography>
          <TextInput
            label="Digite a senha"
            fontFamily="system-ui"
            fontSize="30px"
            size="small"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Typography>Email</Typography>

          <TextInput
            label="Digite o email"
            fontFamily="system-ui"
            fontSize="30px"
            size="small"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Stack>
        <Grid sx={{ margintTop: '20px' }}></Grid>
        <AddProductButton
          variant="contained"
          color="error"
          size="small"
          sx={{ marginLeft: 'auto', textAlign: 'center' }}
          onClick={sendData}
        >
          Adicionar
        </AddProductButton>
      </Grid>
    </Grid>
  );
};

export default Login;
