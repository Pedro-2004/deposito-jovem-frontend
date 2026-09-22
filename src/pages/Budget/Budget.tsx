import { Box, Typography } from '@mui/material';
import Header from '../../components/Header/Header';
import { useState } from 'react';
import TextInput from '@/components/TextInput/TextInput';
import AddProductButton from '@/components/AddProductButton/AddProductButton';

type Product = {
  productName: string;
  productQuantity: string;
  productValue: string;
  clientName: string;
};
const Budget = () => {
  const [productName, setProductName] = useState<string>('');
  const [clientName, setClientName] = useState<string>('');
  const [productQuantity, setProductQuantity] = useState<string>('');
  const [productValue, setProductValue] = useState<string>('');
  const [products, setProducts] = useState<Product[]>([]);

  const handleAddProduct = () => {
    const newProduct: Product = {
      clientName: clientName,
      productName: productName,
      productQuantity: productQuantity,
      productValue: productValue,
    };

    setProducts([...products, newProduct]);
  };

  const handleSend = () => {
    handleAddProduct();
    fetch('http://localhost:3000/budget', {
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
              sx={{
                width: '100%',
                border: '1px solid #e0e0e0',
                borderRadius: 2,
                padding: 2,
                boxSizing: 'border-box',
                backgroundColor: '#fff',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
              }}
            >
              <Typography>Cliente: {product.clientName}</Typography>

              <Typography>Produto: {product.productName}</Typography>

              <Typography>Quantidade: {product.productQuantity}</Typography>

              <Typography>Valor: R$ {product.productValue}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Budget;
