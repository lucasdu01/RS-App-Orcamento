import { View, Text } from "react-native";

import { Title } from "@/components/Title";
import { Button} from "@/components/Button";
import { Header } from "@/components/Header";
// import { Filter } from "@/components/FilterComponent";


export function Home(){
    return(
        <View style={{flex: 1, paddingTop: 54}}>
            <Header>
                <Title>Orçamentos</Title>
                <Button nameIcon="add">Novo</Button>
            </Header>
            {/* <Filter/> */}
        </View>
    )
}