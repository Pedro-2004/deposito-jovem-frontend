import { Box, Typography } from '@mui/material';
import Header from '../../components/Header/Header';
import { useState } from 'react';
import TextInput from '@/components/TextInput/TextInput';
import AddProductButton from '@/components/AddProductButton/AddProductButton';

type Product = {
  id: number;
  client_name: string;
  product_name: string;
  product_quantity: number;
  product_value: string;
  total_value: string;
  created_at: string;
};
const Budget = () => {
  const [productName, setProductName] = useState<string>('');
  const [clientName, setClientName] = useState<string>('');
  const [productQuantity, setProductQuantity] = useState<string>('');
  const [productValue, setProductValue] = useState<string>('');
  const [products, setProducts] = useState<Product[]>([]);

  const handleSend = async () => {
    const response = await fetch('http://localhost:3000/budget', {
      method: 'POST',
      body: JSON.stringify({
        productName: productName,
        clientName: clientName,
        productQuantity: productQuantity,
        productValue: productValue,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    setProducts([...products, data.products]);
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
            value={clientName}
            onChange={(event) => setClientName(event.target.value)}
          />

          <TextInput
            label="Digite o produto"
            fontFamily="system-ui"
            fontSize="30px"
            size="small"
            variant="outlined"
            value={productName}
            onChange={(event) => setProductName(event.target.value)}
          />
          <TextInput
            label="Quantidade do produto"
            fontFamily="system-ui"
            fontSize="30px"
            size="small"
            variant="outlined"
            value={productQuantity}
            onChange={(event) => setProductQuantity(event.target.value)}
          />
          <TextInput
            label="Valor do produto R$"
            fontFamily="system-ui"
            fontSize="30px"
            size="small"
            variant="outlined"
            value={productValue}
            onChange={(event) => setProductValue(event.target.value)}
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

          {products.map((product) => (
            <Box
              key={product.id}
              sx={{
                width: '100%',
                border: '1px solid black',
                borderRadius: 2,
                padding: 2,
                boxSizing: 'border-box',
                backgroundColor: '#fff',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
              }}
            >
              <Typography>Cliente: {product.client_name}</Typography>
              <Typography>Produto: {product.product_name}</Typography>
              <Typography>Quantidade: {product.product_quantity}</Typography>
              <Typography>Valor do produto: R$ {product.product_value}</Typography>
              <Typography>Valor total: R$ {product.total_value}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Budget;
