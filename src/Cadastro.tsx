import { VStack, Image, Box, Checkbox, ScrollView, Text, Input, FormControl } from 'native-base';
import React, { useState } from 'react';
import Logo from './assets/Logo.png';
import { Titulo } from './components/Titulo';
import { EntradaTexto } from './components/EntradaTexto';
import { CustomButton } from "./components/Button";
import { session } from "./utils/CadastroEntradaTexto";

export default function Cadastro() {
  const [numSession, setNumSession] = useState(0);
  const [senha, setSenha] = useState('');

  function avancarSecao() {
    if (numSession < session.length - 1) {
      setNumSession(numSession + 1);
    }
  }

  function retornarSecao() {
    if (numSession > 0) {
      setNumSession(numSession - 1);
    }
  }

  return (
    <ScrollView flex={1} p={5}>
      <Image source={Logo} alt="Logo Voll" alignSelf="center" />
      <Titulo>{session[numSession].titulo}</Titulo>
      
      <Box>
        {session[numSession]?.entradaTexto?.map(entrada => (
          <EntradaTexto key={entrada.id} placeholderText={entrada.placeholder}>
            {entrada.label}
          </EntradaTexto>
        ))}

        {numSession === 0 && (
          <FormControl mt={3}>
            <FormControl.Label>Senha</FormControl.Label>
            <Input 
              placeholder="Digite sua senha" 
              size="lg" 
              w="100%" 
              borderRadius="lg" 
              bgColor="gray.100" 
              shadow={3} 
              secureTextEntry={true} 
              onChangeText={setSenha} 
              value={senha} 
            />
          </FormControl>
        )}
      </Box>

      {session[numSession].checkbox?.length > 0 && (
        <Box>
          <Text color="blue.800" fontWeight="bold" fontSize="md" mt={2} mb={2}>
            Selecione o plano:
          </Text>
          {session[numSession].checkbox.map(checkbox => (
            <Checkbox key={checkbox.id} value={checkbox.value}>
              {checkbox.value}
            </Checkbox>
          ))}
        </Box>
      )}

      <CustomButton onPress={() => avancarSecao()}>Avançar</CustomButton>
      {numSession > 0 && (
        <CustomButton bgColor="gray.400" mt={4} onPress={() => retornarSecao()}>
          Voltar
        </CustomButton>
      )}
    </ScrollView>
  );
}
