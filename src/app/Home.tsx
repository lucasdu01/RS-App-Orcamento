import { useState } from "react";
import { View, Text } from "react-native";
import {ModalFilter } from "@/app/ModalFilter";

import { Title } from "@/components/Title";
import { Button} from "@/components/buttons/Button";
import { HeaderMain } from "@/components/HeaderMain";
import { FilterComponent } from "@/components/FilterComponent";
import { ItemOrcamento } from "@/components/ItemOrcamento";


export function Home(){
    const [modalFilterVisible, setModalFilterVisible] = useState(false);
    return(
        <View style={{flex: 1, paddingTop: 54, padding: 20}}>
            <HeaderMain>
                <Title>Orçamentos</Title>
                <Button nameIcon="add">Novo</Button>
            </HeaderMain>
            <FilterComponent onOpenModal={() => setModalFilterVisible(true)}></FilterComponent>
            <ItemOrcamento></ItemOrcamento>
            <ModalFilter
                visible={modalFilterVisible} 
                onClose={() => setModalFilterVisible(false)}
            >
            </ModalFilter>
        </View>
    )
}