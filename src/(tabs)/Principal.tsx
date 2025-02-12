import { VStack, Text, ScrollView, Image, Box, Divider } from "native-base";
import Logo from '../assets/Logo.png'
import { Titulo } from "../components/Titulo";
import { EntradaTexto } from "../components/EntradaTexto";
import { CustomButton } from "../components/Button";
import { mockReviews } from "../utils/mockReviews";

export default function Principal() {
    return (
        <ScrollView>
            <VStack flex={1} alignItems="flex-start" justifyContent="flex-start" p={5}>
                <Image source={Logo} alt='Logo Voll' />
                <Titulo color="blue.800">Boas Vindas!</Titulo>

                <Box w="100%" borderRadius="lg" p={3} mt={10} shadow="1" borderRightRadius="md">
                    <EntradaTexto placeholderText="Digite a especialidade"></EntradaTexto>
                    <EntradaTexto placeholderText="Digite a Localização"></EntradaTexto>
                    <CustomButton>Buscar</CustomButton>
                </Box>

                <Titulo alignSelf="center" color="blue.800">Depoimentos</Titulo>
                <VStack divider={<Divider />} w="100%">
                    {
                        mockReviews.map((reviews) => (
                            <Box w="100%" borderRadius="lg" p={3} key={reviews.id}>
                            <Text color="gray.300" fontSize="md" textAlign="justify">
                                {reviews.text}
                            </Text>
                            <Text color="gray.500" fontSize="lg" fontWeight="bold" alignSelf="center" mt="2">
                                {reviews.author}
                            </Text>
                        </Box>
                        ))
                       }
                </VStack>
            </VStack>
        </ScrollView>
    )
} 