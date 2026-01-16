import { useState } from "react";
import { Modal, View, Text, StyleSheet, TouchableOpacity} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { Checkbox } from "@/components/buttons/Checkbox";
import { RadioButton } from "@/components/buttons/RadioButton";
import { SecondaryButton } from "@/components/buttons/SecondaryButton";
import { PrimaryButton } from "@/components/buttons/PrimaryButton";


type ModalFilterProps = {
    visible: boolean;
    onClose: () => void;
}

export function ModalFilter({ visible, onClose }: ModalFilterProps) {
    const [selectedRadio, setSelectedRadio] = useState(-1);
    const [selectedCheck, setSelectedCheck] = useState<number[]>([]); // Array de índices selecionados

    // Função para toggle do checkbox
    const handleCheckboxToggle = (index: number) => {
        if (selectedCheck.includes(index)) {
            setSelectedCheck(selectedCheck.filter(i => i !== index)); // Remove
        } else {
            setSelectedCheck([...selectedCheck, index]); // Adiciona
        }
    };

    return(      
        <Modal
            animationType="fade"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={styles.modalBackground} >
                <View style={styles.modalContainer}>
                    <View style={styles.modalHeader}>
                        <Text style={styles.labelHeader}>Filtrar e Ordenar</Text>
                        <TouchableOpacity onPress={onClose}>
                            <MaterialIcons name="close" color="black" size={24}></MaterialIcons>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.titleSection}>Status</Text>
                        <Checkbox
                            options={["Rascunho", "Enviado", "Aprovado", "Recusado"]}
                            selectedCheck={selectedCheck}
                            onChangeSelect={handleCheckboxToggle}
                        ></Checkbox>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.titleSection}>Ordenação</Text>
                        <RadioButton 
                            options={["Mais recente", "Mais antigo", "Maior valor", "Menor valor"]}
                            onChangeSelect={(opt, i) => setSelectedRadio(i)}
                            selectedRadio={selectedRadio}
                        ></RadioButton>
                    </View>
                    <View style={styles.modalButtons}>
                        <SecondaryButton onPress={() => {
                            setSelectedRadio(-1);
                            setSelectedCheck([]);
                        }}>
                            Resetar Filtros</SecondaryButton>
                        <PrimaryButton nameIcon="check">Aplicar</PrimaryButton>
                    </View>
                </View>
            </View>
        </Modal>
    )
    
}

const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.2)",
        justifyContent: "flex-end",      
    },
    modalContainer: {
        backgroundColor: "#FFFFFF",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    modalHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottomColor: "#F0F0F0",
        borderBottomWidth: 1,
        padding: 20,
    },
    labelHeader: {
        color: "#0F0F0F",
        fontWeight: "bold",
    },
    section: {
        padding: 20,
        gap: 12,
    },
    titleSection: {
        marginBottom: 4,
        color: "#676767",
    },
    sectionOrdenation: {

    },
    modalButtons: {
        borderTopColor: "#F0F0F0",
        borderTopWidth: 1,
        backgroundColor: "F0F0F0",
        flexDirection: "row",
        padding: 20,
        justifyContent: "space-evenly"
    }
})