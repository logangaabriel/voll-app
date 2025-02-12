import { VStack, Text, ScrollView, Divider } from "native-base";
import { CardConsulta } from "../components/Card";
import { Titulo } from "../components/Titulo";
import { CustomButton } from "../components/Button";
export default function Explorar(){
    return(
    <ScrollView p={5}>
        <VStack>
            <Titulo color="blue.600">Minhas consultas</Titulo>
            <CustomButton mt={5} mb={5}>Agendar outra consulta</CustomButton>
            <Text fontSize={15} color="blue.600" fontWeight="bold" mb={5}>Próximas consultas:</Text>
            <CardConsulta 
            nome="Dr. Gabriel Logan"
            especialidade="Nutricionista"
            foto="https://img.freepik.com/fotos-kostenlos/ein-gluecklicher-student-mit-afro-frisur-zeigt-weisse-zaehne-und-ist-nach-dem-unterricht-gut-gelaunt_273609-16608.jpg"
            data="08/12/2023"
            foiAgendado
            />
            <Divider />
            <Text fontSize={15} color="blue.600" fontWeight="bold" mb={5} mt={5}>Consultas passadas:</Text>
            <CardConsulta 
            nome="Dr. Alex Karev"
            especialidade="Cirugião pediatria"
            foto="https://cdn.folhape.com.br/upload/dn_arquivo/2020/01/3101karev.jpg"
            data="08/12/2023"
            foiAtendido
            />
            <CardConsulta 
            nome="Dr. Jackson Avery "
            especialidade="Ortopedista"
            foto="https://preview.redd.it/weekly-discussion-what-are-your-thoughts-on-jackson-avery-v0-e4obt2r4y5za1.png?width=640&crop=smart&auto=webp&s=ff27e3a178e9b43229b1fda043b8cbe176983053"
            data="08/12/2023"
            foiAtendido
            />
                 <CardConsulta 
            nome="Dra. Meredith Grey"
            especialidade="Cirurgiã Geral"
            foto="https://pm1.aminoapps.com/6675/6f27d8d5a002703cf4c639a7b22fa19f62afc356_00.jpg"
            data="08/12/2023"
            foiAtendido
            />
        </VStack>
    </ScrollView>
    )
}