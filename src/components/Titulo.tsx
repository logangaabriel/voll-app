import {Text, ITextProps} from 'native-base'
import { ReactNode } from 'react'

interface TituloProps extends ITextProps {
    children: ReactNode

}

export function Titulo({children}: TituloProps) {
    return (
        <Text 
        accessibilityLabel="Faça Login na sua conta"
       fontSize="2xl" 
       fontWeight="bold" 
       color="gray.500"
       textAlign="center"
       mt={5}
       >
        {children}
       </Text>
    )
}