import { useState } from "react";
import { View, Text } from "react-native";
import { ModalFilter } from "@/app/ModalFilter";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackRoutesList } from "@/routes/StackRoutes";

import { Title } from "@/components/Title";
import { Button } from "@/components/buttons/Button";
import { HeaderMain } from "@/components/HeaderMain";
import { FilterComponent } from "@/components/FilterComponent";
import { ItemOrcamento } from "@/components/ItemOrcamento";

type NavigationProp = NativeStackNavigationProp<StackRoutesList>;

export function Home() {
  const navigation = useNavigation<NavigationProp>();
  const [modalFilterVisible, setModalFilterVisible] = useState(false);
  return (
    <View style={{ flex: 1, paddingTop: 54, padding: 20 }}>
      <HeaderMain>
        <Title>Orçamentos</Title>
        <Button
          nameIcon="add"
          onPress={() => navigation.navigate("novoOrcamento")}
        >
          Novo
        </Button>
      </HeaderMain>
      <FilterComponent
        onOpenModal={() => setModalFilterVisible(true)}
      ></FilterComponent>
      <ItemOrcamento></ItemOrcamento>
      <ModalFilter
        visible={modalFilterVisible}
        onClose={() => setModalFilterVisible(false)}
      ></ModalFilter>
    </View>
  );
}
