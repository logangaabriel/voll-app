import { VStack, Text, ScrollView, Avatar, Divider } from "native-base";
import { Titulo } from "../components/Titulo";

export default function Perfil(){
    return(
        <ScrollView flex={1}>
            <VStack flex={1} alignItems="center" p={5}>
                <Titulo>Meu perfil</Titulo>
                <Avatar source={{uri: 'https://avatars.githubusercontent.com/u/146207145?v=4'}} mt={5} size="xl" />
                <Titulo color="blue.500">Informações pessoais</Titulo>
                <Titulo fontSize="lg">Gabriel Logan</Titulo>
                <Text>08/04/2003</Text>
                <Text>Pernambuco</Text>

                <Divider mt={5} />

                <Titulo color="blue.500" mb={1}>Histórico médico</Titulo>
                <Text>Bronquite</Text>
                <Text>Sinusite</Text>

            </VStack>
        </ScrollView>
    )
}