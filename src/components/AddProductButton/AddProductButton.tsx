import { Button } from '@mui/material';
import type { SxProps, Theme } from '@mui/material/styles';
type ButtonProductProps = {
  variant: 'contained' | 'outlined' | 'text';
  size: 'small' | 'medium' | 'large';
  color: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
  children: React.ReactNode;
  onClick: () => void;

  sx?: SxProps<Theme> | undefined;
};
const AddProductButton = ({
  variant,
  size,
  color,
  children,

  onClick,
  sx,
}: ButtonProductProps) => {
  return (
    <Button variant={variant} color={color} size={size} onClick={onClick} sx={sx}>
      {children}
    </Button>
  );
};
export default AddProductButton;
