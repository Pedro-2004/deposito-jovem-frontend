import { TextField } from '@mui/material';

type TextInputProps = {
  label: string;
  fontFamily: string;

  fontSize: string;
  value: string;

  size: 'small' | 'medium';
  variant: 'outlined' | 'filled' | 'standard';
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const TextInput = ({
  label,
  fontFamily,

  fontSize,
  value,
  size,
  variant,

  onChange,
}: TextInputProps) => {
  return (
    <TextField
      label={label}
      value={value}
      onChange={onChange}
      size={size}
      variant={variant}
      sx={{
        fontFamily: fontFamily,

        fontSize: fontSize,
      }}
    />
  );
};

export default TextInput;
