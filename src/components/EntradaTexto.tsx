import { FormControl, Input, ITextProps } from 'native-base';
import { ReactNode } from 'react';

interface EntradaTextoProps extends ITextProps {
  children: ReactNode;
  placeholderText: string; 
}

export function EntradaTexto({ children, placeholderText, ...rest }: EntradaTextoProps) {
  return (
    <FormControl mt={3}>
      <FormControl.Label>{children}</FormControl.Label>
      <Input
        placeholder={placeholderText}
        size="lg"
        w="100%"
        borderRadius="lg"
        bgColor="gray.100"
        shadow={3}
        {...rest} 
      />
    </FormControl>
  );
}
