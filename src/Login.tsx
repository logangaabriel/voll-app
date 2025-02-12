import { VStack, Image, Text, Box, Link,} from 'native-base';
import { TouchableOpacity } from 'react-native';
import Logo from './assets/Logo.png'
import { Titulo } from './components/Titulo';
import { EntradaTexto } from './components/EntradaTexto';
import { CustomButton } from './components/Button';


export default function Login({navigation}) {
  return (
    <VStack flex={1} alignItems="center" p={5} justifyContent="center">
      <Image source={Logo} alt='Logo Voll' />

    <Titulo >
      Faça login em sua conta
    </Titulo>

      <Box>
      <EntradaTexto placeholderText='Insira seu Email'>
        Email
      </EntradaTexto>

      <EntradaTexto placeholderText='Insira sua senha'>
        Senha
      </EntradaTexto>

      </Box>

      < CustomButton onPress={() => navigation.navigate('Tabs')}>Login</CustomButton>
      <Link href='hhtps://alura.com.br' mt="2">
      Esqueceu sua senha?
      </Link>

      <Box w="100%" flexDirection="row" justifyContent="center" mt="8">
        <Text>Ainda não tem cadastro?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
          <Text color="blue.500">
            Faça seu cadastro.
          </Text>
        </TouchableOpacity>
      </Box>
    </VStack>
  );
}

