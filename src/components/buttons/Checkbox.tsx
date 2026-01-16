import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { TagAprovado } from "@/components/tags/TagAprovado";
import { TagEnviado } from "@/components/tags/TagEnviado";
import { TagRascunho } from "@/components/tags/TagRascunho";
import { TagRecusado } from "@/components/tags/TagRecusado";

// Mapeamento de opções para componentes
const tagComponents: { [key: string]: React.ComponentType } = {
    "Rascunho": TagRascunho,
    "Enviado": TagEnviado,
    "Aprovado": TagAprovado,
    "Recusado": TagRecusado,
};

interface CheckboxProps {
    options: string[];
    selectedCheck: number[]; // Array de índices
    onChangeSelect: (index: number) => void;
}

export const Checkbox = ({
    options, 
    selectedCheck,
    onChangeSelect,
}: CheckboxProps) => {
    return(
        <View>
            {options.map((opt, index) => {
                const TagComponent = tagComponents[opt];
                const isChecked = selectedCheck.includes(index);
                return (
                    <TouchableOpacity 
                        key={index} 
                        style={styles.container}
                        onPress={() => onChangeSelect(index)}
                    >
                        <View>
                            {isChecked ? (
                                <MaterialIcons name="check-box" size={20} color={"#6A46EB"} />
                            ) : (
                                <MaterialIcons name="check-box-outline-blank" size={20} color={"#A1A2A1"} />
                            )}
                        </View>
                        {TagComponent && <TagComponent />}
                    </TouchableOpacity>
                );
            })}
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        marginBottom: 8,
        alignSelf: "flex-start",
    },
    uncheck: {
        width: 20,
        height: 20,
        borderRadius: 5,
        borderColor: "#A1A2A1",
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    check: {

    }
});