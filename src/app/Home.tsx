import { View, Text } from "react-native";

import { Title } from "@/components/Title";
import { Button} from "@/components/Button";
import { Header } from "@/components/Header";
import { FilterComponent } from "@/components/FilterComponent";
import { ItemOrcamento } from "@/components/ItemOrcamento";


export function Home(){
    return(
        <View style={{flex: 1, paddingTop: 54, padding: 20}}>
            <Header>
                <Title>Orçamentos</Title>
                <Button nameIcon="add">Novo</Button>
            </Header>
            <FilterComponent></FilterComponent>
            <ItemOrcamento></ItemOrcamento>
        </View>
    )
}