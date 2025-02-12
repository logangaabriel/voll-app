import { VStack, Text, ScrollView, Image, Box, Divider } from "native-base";
import { Titulo } from "../components/Titulo";
import { EntradaTexto } from "../components/EntradaTexto";
import { CustomButton } from "../components/Button";
import { CardConsulta } from "../components/Card";


export default function Principal() {
    return (
        <ScrollView>
            <VStack flex={1} alignItems="flex-start" justifyContent="flex-start" p={5}>
                <Box w="100%" borderRadius="lg" p={3} mt={5} shadow="1" borderRightRadius="md">
                    <EntradaTexto placeholderText="Digite a especialidade"></EntradaTexto>
                    <EntradaTexto placeholderText="Digite a Localização"></EntradaTexto>
                    <CustomButton mb={5}>Buscar</CustomButton>
                </Box>
                <Titulo alignSelf="center" color="blue.600" mb={5}>Resultado da busca</Titulo>
                <CardConsulta
                    nome="Dr. Maggie"
                    especialidade="Cardiotorax"
                    foto="https://upload.wikimedia.org/wikipedia/en/a/a3/MaggiePierce.jpg"
                    data="08/12/2023"
                    foiAtendido
                />
                <CardConsulta
                    nome="Dr. Derek"
                    especialidade="Neurocirurgião"
                    foto="https://conteudo.imguol.com.br/c/entretenimento/95/2019/03/27/patrick-dempsey-como-o-dr-derek-shepherd-em-greys-anatomy-1553722514060_v2_3x4.jpg"
                    data="08/12/2023"
                    foiAtendido
                />
            </VStack>
        </ScrollView>
    )
} 