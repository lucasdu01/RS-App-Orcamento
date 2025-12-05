import { View, Text } from "react-native";
import { Title } from "@/components/Title"
import { Header } from "@/components/Header"
import { Button} from "@/components/Button";


export function Home(){
    return(
        <View style={{flex: 1, paddingTop: 54}}>
            <Header>
                <Title>Orçamentos</Title>
                <Button nameIcon="add">Novo</Button>
            </Header>
        </View>
    )
}