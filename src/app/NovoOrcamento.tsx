import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

import { Header } from "@/components/Header";
import { Section } from "@/components/Section";
import { Input } from "@/components/Input";
import { RadioButton } from "@/components/buttons/RadioButton";
import { TagAprovado } from "@/components/tags/TagAprovado";
import { TagEnviado } from "@/components/tags/TagEnviado";
import { TagRascunho } from "@/components/tags/TagRascunho";
import { TagRecusado } from "@/components/tags/TagRecusado";
import { SecondaryButton } from "@/components/buttons/SecondaryButton";
import { PrimaryButton } from "@/components/buttons/PrimaryButton";

export function NovoOrcamento() {
  const [selectedRadio, setSelectedRadio] = useState(-1);
  return (
    <View style={{ flex: 1, paddingTop: 54, paddingBottom: 5 }}>
      <Header>Orçamento</Header>
      <ScrollView>
        <View style={styles.content}>
          <Section nameIcon="storefront" title="Informações Gerais">
            <Input>Título</Input>
            <Input>Cliente</Input>
          </Section>
          <Section nameIcon="sell" title="Status">
            <View style={styles.containerStatus}>
              <RadioButton
                selectedRadio={selectedRadio}
                onChangeSelect={(opt, i) => setSelectedRadio(i)}
                index={0}
              >
                <TagRascunho />
              </RadioButton>
              <RadioButton
                selectedRadio={selectedRadio}
                onChangeSelect={(opt, i) => setSelectedRadio(i)}
                index={1}
              >
                <TagAprovado />
              </RadioButton>
              <RadioButton
                selectedRadio={selectedRadio}
                onChangeSelect={(opt, i) => setSelectedRadio(i)}
                index={2}
              >
                <TagEnviado />
              </RadioButton>
              <RadioButton
                selectedRadio={selectedRadio}
                onChangeSelect={(opt, i) => setSelectedRadio(i)}
                index={3}
              >
                <TagRecusado />
              </RadioButton>
            </View>
          </Section>
          <Section nameIcon="description" title="Serviços inclusos">
            <Text>Serviço</Text>
            <SecondaryButton nameIcon="add">Adicionar serviço</SecondaryButton>
          </Section>
          <Section nameIcon="credit-card" title="Investimento">
            <View style={styles.containerInvestimento}>
              <View style={styles.containerSubtotal}>
                <Text>Subtotal</Text>
                <View style={{ flexDirection: "row", gap: 5 }}>
                  <Text>8 itens</Text>
                  <Text>R$ 3.847,50</Text>
                </View>
              </View>
              <View style={styles.containerDesconto}>
                <View style={{ flexDirection: "row", gap: 5 }}>
                  <Text>Desconto</Text>
                  <Text>8%</Text>
                </View>
                <Text>-R$200,00</Text>
              </View>
              <View style={styles.containerValorTotal}>
                <Text>Valor total</Text>
                <View>
                  <Text>R$4050,00</Text>
                  <Text>R$38478,50</Text>
                </View>
              </View>
            </View>
          </Section>
        </View>
      </ScrollView>
      <View style={styles.footerButtons}>
        <SecondaryButton>Cancelar</SecondaryButton>
        <PrimaryButton nameIcon="check">Salvar</PrimaryButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    padding: 20,
    gap: 20,
  },
  containerStatus: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    justifyContent: "space-between",
  },
  containerSubtotal: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  containerDesconto: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  containerValorTotal: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  containerInvestimento: {
    gap: 15,
  },
  footerButtons: {
    borderTopColor: "#E6E5E5",
    borderTopWidth: 1,
    backgroundColor: "F0F0F0",
    flexDirection: "row",
    padding: 20,
    justifyContent: "space-evenly",
  },
});
